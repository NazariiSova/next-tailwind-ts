import React from "react";
import Iframe from 'react-iframe'

export const Video = () => {
  const videoCode = "https://www.youtube.com/embed/fGzh6pPMC4g?si=M6_g6BBHU7bN1GZ0";

  return (
    <div className="container w-full text-center">
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl max-w-[800px] mx-auto my-8">The easiest way to write and grow an engaging newsletter</h2>
      <p className="text-lg mb-8">
        Despite powerful functionality, Maildroppa is intuitive and easy to use.
      </p>
      <div className="mx-auto">
        <Iframe
          url={videoCode}
          width="800"
          height="440"
          frameBorder={0}
          allow="autoplay; fullscreen"
          className="my-video-player" 
        />
      </div>
    </div>
  );
};
