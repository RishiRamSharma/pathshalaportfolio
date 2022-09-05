import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <header>
      <div className="overlay"></div>

      <video
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source
          src="https://player.vimeo.com/external/451873751.sd.mp4?s=9ac895ab57b2716a0ebdb67e30ec6f607be71379&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>

      <div className="container h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white ">
            <h1 className="display-3 fw-semibold">
              Welcome to Pathshala Classes
            </h1>
            <p className="lead mb-0 fw-semibold">Learn & Apply</p>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Slider;
