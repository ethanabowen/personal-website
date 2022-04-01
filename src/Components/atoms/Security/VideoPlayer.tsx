import { useRef, useEffect } from "react";
import videojs, { VideoJsPlayerOptions, VideoJsPlayer } from "video.js";

// Styles
import "video.js/dist/video-js.css";

const initialOptions: VideoJsPlayerOptions = {
  aspectRatio:"16:9",
  controls: true,
  controlBar: {
    volumePanel: {
      inline: false,
    },
  },
};

type VideoProps = {
  options: VideoJsPlayerOptions | undefined;
};
export default function VideoPlayer(props: VideoProps) {
  const videoNode = useRef<HTMLVideoElement>(null) as any;
  const player = useRef<VideoJsPlayer>();

  
  // instantiate Video.js
  useEffect(() => {
    const combinedOptions = {
      ...initialOptions,
      ...props.options,
    }
    
    player.current = videojs(videoNode.current, combinedOptions);
    /*.ready(function() {
      console.log("onPlayerReady", this);
    });*/

    return () => {
      // unmounting code
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [props.options, videoNode]);

  return (
      <video ref={videoNode} className="video-js" />
  );
}
