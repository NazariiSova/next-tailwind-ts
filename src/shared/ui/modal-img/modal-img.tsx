"use client"
import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface Props {
  src: string;
}

// <img />
export const MyImg = ({ src }: Props) => (
  <Zoom>
    <Image
      alt="That Wanaka Tree, New Zealand by Laura Smetsers"
      src={src}
      width={500}
      height={500}
    />
  </Zoom>
);

// <div>
// export const MyDiv = () => (
//   <Zoom>
//     <div
//       aria-label="That Wanaka Tree, New Zealand by Laura Smetsers"
//       role="img"
//       style={{
//         backgroundColor: '#fff',
//         backgroundImage: `url("/path/to/thatwanakatree.jpg")`,
//         backgroundPosition: '50%',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         height: '0',
//         paddingBottom: '56%',
//         width: '100%',
//       }}
//     />
//   </Zoom>
// );

// // <picture>
// export const MyPicture = () => (
//   <Zoom>
//     <picture>
//       <source media="(max-width: 800px)" srcSet="/path/to/teAraiPoint.jpg" />
//       <Image
//         alt="A beautiful, serene setting in nature"
//         src="/path/to/thatwanakatree.jpg"
//         width={900}
//         height={900}
//       />
//     </picture>
//   </Zoom>
// );

// // <figure>
// export const MyFigure = () => (
//   <figure>
//     <Zoom>
//       <Image
//         alt="That Wanaka Tree, New Zealand by Laura Smetsers"
//         src="/path/to/thatwanakatree.jpg"
//         width={900}
//         height={900}
//       />
//     </Zoom>
//     <figcaption>Photo by Laura Smetsers</figcaption>
//   </figure>
// );

// // MonoblockImg
// export const MyMonoblockImg = () => (
//   <Zoom>
//     <Image
//       src={MonoblockImg}
//       alt="That Wanaka Tree, New Zealand by Laura Smetsers"
//       width={900}
//       height={900}
//     />
//   </Zoom>
// );
