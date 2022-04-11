import Camera from "./Camera";
import { Auth } from "aws-amplify";

import "./Security.css";

export default function Security() {
  return (
    <div className="main--security">
      <button onClick={() => Auth.signOut()}>Sign Out</button>
      <div className="row">
        <div className="p-5">
          <Camera cameraName="Nursery" streamName="eufy-nursery-stream" />
        </div>
        <div className="col-xl-6 col-lg-12 p-5">
          <Camera
            cameraName="Living Room"
            streamName="eufy-living-room-stream"
          />
        </div>
        <div className="col-xl-6 col-lg-12 p-5">
          <Camera cameraName="Driveway" streamName="eufy-driveway-stream" />
        </div>

        {/*
      <div className="col-auto p-5">
        <Camera cameraName="Front Door" streamName="eufy-front-door-stream" />
      </div>
      */}
      </div>
    </div>
  );
}
