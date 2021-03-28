import React from "react";
import './Video.css';

import { Splide } from "@splidejs/react-splide";
import Video from "@splidejs/splide-extension-video";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import wBank from "../../images/product_pictures/app_platter.jpg";

const SPLIDE_OPTIONS = {
  width: '100%',
  height: '60vh',
  pagination: false,
  video: {
    autoplay: true,
    mute: true,
    disableOverlayUI: true,
    hideControls: true,
  }
};

const video = () => {

  return (
    <section id="video" className="video-container">
    <header className="video-header">
      <h1>Take a tour of our showroom</h1>
    </header>
    <Splide
        onMoved={() => console.log("Slide moved!")}
        options={SPLIDE_OPTIONS}
        Extensions={{ Video }}
      >
        <li
          className="splide__slide"
          data-splide-youtube="https://www.youtube.com/watch?v=c9iIHABYwdg"
        >
          <img
            src="https://i.imgur.com/hqCBTK8.png"
            alt="Example 2"
          />
        </li>
        <li
          className="splide__slide"
          data-splide-youtube="https://www.youtube.com/watch?v=MVTN4r41Hn0"
        >
          <img
            src="https://i.imgur.com/hqCBTK8.png"
            alt="Example 1"
          />
        </li>
        <li
          className="splide__slide"
          data-splide-youtube="https://www.youtube.com/watch?v=BCWJyZQED9E"
        >
          <img
            src="https://i.imgur.com/hqCBTK8.png"
            alt="Example 1"
          />
        </li>
      </Splide>
      </section>
  );
};

export default video;