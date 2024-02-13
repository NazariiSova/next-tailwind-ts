import React from "react";
import Iframe from 'react-iframe'

interface Props {
  src?: string;
}

export const Video = ({ src }: Props) => {
  const videoCode = "https://www.youtube.com/embed/fGzh6pPMC4g?si=M6_g6BBHU7bN1GZ0";

  return (
    <div className="w-full text-center container">
      <h2 className="text-center text-[25px] lg:text-[45px] max-w-[800px] mx-auto my-8 text-dark font-bold">The easiest way to write and grow an engaging newsletter</h2>
      <p className="text-lg mb-8 text-secondary font-normal">
        Despite powerful functionality, Maildroppa is intuitive and easy to use.
      </p>
      <div className="w-full h-[250px] md:h-[400px] lg:h-[600px] mx-auto">
        <Iframe
          url={src || videoCode}
          width="100%"
          height="100%"
          frameBorder={0}
          allow="autoplay; fullscreen"
          className="my-video-player" 
        />
      </div>
    </div>
  );
};
