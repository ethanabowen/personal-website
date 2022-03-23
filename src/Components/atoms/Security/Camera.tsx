import { useState, useEffect } from "react";
import KinesisVideo from "aws-sdk/clients/kinesisvideo";
import KinesisVideoArchivedMedia from "aws-sdk/clients/kinesisvideoarchivedmedia";
import AWS from "aws-sdk";
import { Amplify, Auth } from "aws-amplify";
import VideoPlayer from "./VideoPlayer";
import { VideoJsPlayerOptions } from "video.js";

AWS.config.region = "us-east-1";

export default function Camera(props: any) {
  const [kinesisStreamUrl, setKinesisStreamUrl] = useState() as any;
  const [videoJsOptions, setVideoJSOptions] = useState<
    VideoJsPlayerOptions
  >();

  useEffect(() => {
    const getKinesisUrl = async () => {
      await getKinesisStreamUrl(props.streamName);
    };

    getKinesisUrl();
  }, [props.streamName]);

  useEffect(() => {
    setVideoJSOptions({
      autoplay: true,
      controls: true,
      liveui: true,
      height: 1000,
      width: 1000,
      sources: [
        {
          src: kinesisStreamUrl,
          type: "application/x-mpegURL",
        },
      ],
    });
  }, [kinesisStreamUrl]);

  const getKinesisStreamUrl = async (streamName: string) => {
    var kinesisVideo: any = null;
    var kinesisVideoArchivedContent: any = null;

    const streamingOptions = {
      StreamName: streamName,
      PlaybackMode: "LIVE",
      /*HLSFragmentSelector: {
    FragmentSelectorType: $('#fragmentSelectorType').val(),
    TimestampRange: $('#playbackMode').val() === "LIVE" ? undefined : {
      StartTimestamp: new Date($('#startTimestamp').val()),
      EndTimestamp: new Date($('#endTimestamp').val())
    }
  },*/
      //ContainerFormat: 'FRAGMENTED_MP4',
      //DiscontinuityMode: 'ALWAYS'
      DisplayFragmentTimestamp: "ALWAYS",
      //MaxMediaPlaylistFragmentResults: 5 for LIVE, 1000 for ON_DEMAND,
      //Expires: 300 //seconds
    };

    await Amplify.Auth.currentCredentials().then((credentials: any) => {
      const options = {
        credentials: Auth.essentialCredentials(credentials),
      };
      kinesisVideo = new KinesisVideo(options);
      kinesisVideoArchivedContent = new KinesisVideoArchivedMedia(options);
    });

    //console.log("Fetching data endpoint");
    await kinesisVideo.getDataEndpoint(
      {
        StreamName: streamName,
        APIName: "GET_HLS_STREAMING_SESSION_URL",
      },
      async function(err: string, response: any) {
        if (err) {
          return console.error(err);
        }

        //console.log("Data endpoint: " + response.DataEndpoint);
        kinesisVideoArchivedContent.endpoint = response.DataEndpoint; //new AWS.Endpoint(response.DataEndpoint);

        // Get a Streaming Session URL
        console.log("Fetching Streaming Session URL");

        await kinesisVideoArchivedContent.getHLSStreamingSessionURL(
          streamingOptions,
          function(err: string, response: any) {
            if (err) {
              return console.error(err);
            }

            //console.log("HLS Streaming Session URL: " + response.HLSStreamingSessionURL);

            setKinesisStreamUrl(response.HLSStreamingSessionURL);
          }
        );
      }
    );
  };

  const isVideoSrcSet = () => {
    return videoJsOptions != null && 
      videoJsOptions.sources != null &&
      videoJsOptions.sources[0].src != null
  }
  return (
    <>
      {isVideoSrcSet() && (
        <div>
          <div className="pl-1 pb-1 strong fs-1">{props.cameraName}</div>
          <VideoPlayer options={videoJsOptions} />
        </div>
      )}
    </>
  );
}
