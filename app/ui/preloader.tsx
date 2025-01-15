"use client"

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const topBlock = useRef<HTMLDivElement>(null);
  const bottomBlock = useRef<HTMLDivElement>(null);
  const topText = useRef<HTMLDivElement>(null);
  const bottomText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(topBlock.current, {
      clipPath: "inset(0 0 100% 0) ", // Collapse from bottom to top
      duration: 12,
      delay: 1,
      ease: "power4.out",
    });

    gsap.to(bottomBlock.current, {
      clipPath: "inset(100% 0 0 0)", // Collapse from top to bottom
      duration: 12,
      delay: 1,
      ease: "power4.out",
    });

    gsap.to([topText.current, bottomText.current], {
      opacity: 1,
      delay: 0,
    });

    gsap.to([topText.current, bottomText.current], {
      y: "-107px",
      duration: 3,
      delay: 0,
      ease: "power4.in",
    });
  }, []);

  return (
    <div className="h-screen fixed top-0 left-0 bg-white flex flex-col w-screen z-50">
      <div
        ref={topBlock}
        className="h-1/2 bg-black w-full"
        style={{ clipPath: "inset(0 0 0 0)" }} // Ensure full visibility initially
      ></div>
      <div
        ref={bottomBlock}
        className="h-1/2 bg-black w-full"
        style={{ clipPath: "inset(0 0 0 0)" }} // Ensure full visibility initially
      ></div>
      <div className="preloader_text absolute top-1/2 left-1/2 h-[107px] overflow-hidden ">
        <h2 ref={topText} className="text-[150px] leading-[126px] uppercase font-bold text-black opacity-0">
          SMART
        </h2>
        <h2 ref={bottomText} className="text-[150px] leading-[126px] uppercase font-bold text-black opacity-0">
          BETTER
        </h2>
      </div>
    </div>
  );
};

export default Preloader;
