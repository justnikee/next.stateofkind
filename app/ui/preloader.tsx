"use client"

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const topBlock = useRef<HTMLDivElement>(null);
  const bottomBlock = useRef<HTMLDivElement>(null);
  const topText = useRef<HTMLDivElement>(null);
  const bottomText = useRef<HTMLDivElement>(null);
  const middleText = useRef<HTMLDivElement>(null);
const preloaderContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(topBlock.current, {
      clipPath: "inset(0 0 100% 0) ", // Collapse from bottom to top
      duration: 10,
      delay: 1,
      ease: "power4.out",
      onComplete: () => {
        preloaderContainer.current?.remove();
      }
    });

    gsap.to(bottomBlock.current, {
      clipPath: "inset(100% 0 0 0)", // Collapse from top to bottom
      duration: 10,
      delay: 1,
      ease: "power4.out",
    });

    gsap.to([topText.current,middleText.current, bottomText.current], {
      opacity: 1,
      delay: 0,
    });

    gsap.to(topText.current, {
      y: "-100%",
      duration: 2,
      delay: 0,
      ease: "power4.in",
      onComplete: () => {
        gsap.to(topText.current, { y: "-200%", duration: 1, ease: "power4.in" });
      }
    });
  
    gsap.to(middleText.current, {
      y: "-100%",
      duration: 2,
      delay: 2, // Delay for middle text
      ease: "power4.in",
      onComplete: () => {
        gsap.to(middleText.current, { y: "-200%", duration: 1, ease: "power4.in"});
      }


    });
  
    gsap.to(bottomText.current, {
      y: "-100%",
      duration: 2,
      delay: 4, // Delay for bottom text
      ease: "power4.in",
      onComplete: () => {
        gsap.to(bottomText.current, { y: "-200%", duration: 1, ease: "power4.in"});
      }
    });

   

  }, []);

  return (
    <div ref={preloaderContainer} className="h-screen z-[99999] fixed justify-center align-center top-0 left-0 bg-white flex flex-col w-screen">
      <div
        ref={topBlock}
        className="h-1/2 bg-black w-full absolute top-0"
        // style={{ clipPath: "inset(0 0 0 0)" }} // Ensure full visibility initially
      ></div>
      <div
        ref={bottomBlock}
        className="h-1/2 bg-black w-full absolute bottom-0"
        // style={{ clipPath: "inset(0 0 0 0)" }} // Ensure full visibility initially
      ></div>
      <div className=" relative h-[150px] flex justify-center items-center flex-col gap-10 overflow-hidden w-full">
        <h2 ref={topText} className="text-[150px] absolute top-[100%]  leading-[150px] text-center uppercase font-bold text-black opacity-0">
          Sleep
        </h2>
        <h2 ref={middleText} className="text-[150px] absolute top-[100%]  leading-[150px] text-center uppercase font-bold text-black opacity-0">
          Smart
        </h2>
        <h2 ref={bottomText} className="text-[150px] absolute top-[100%]  leading-[150px] text-center uppercase font-bold text-black opacity-0">
          Naturally
        </h2>
      </div>
    </div>
  );
};

export default Preloader;
