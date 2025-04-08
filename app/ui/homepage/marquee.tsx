"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from './homepage-css/marquee.module.css'
import Image from "next/image";

const brandImages = [
  '/homepage/Marquee/acure_34eec53a-de6d-4717-9e48-ee4137067bc5.png',
  '/homepage/Marquee/bkind_20964610-a240-4c93-9e8a-b016c9ef244b.png',
  '/homepage/Marquee/herbi_f4fc6530-ee64-4cb8-8620-eac55c6746ef.png',
  '/homepage/Marquee/ilia_c29907a2-c6f9-410c-bbc3-1d4debd9e041.png',
  '/homepage/Marquee/keeko_9849e5d4-ee3b-4662-9b4a-ea98f768c7f7.png',
  '/homepage/Marquee/mokosh_f88a0aa0-bea8-46a1-ba15-7a3ac0f97859.png',
  '/homepage/Marquee/odacite_6c8c52af-f8ae-4260-8725-8e7119df3aad.png',
  '/homepage/Marquee/osea_249c4ef0-4671-4810-910a-54461c1a863d.png'
]




const Marquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -100,
        duration: 30,
        ease: "linear",
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.wrapper} ref={marqueeRef}>
      <div className={`${styles.track} marquee-track`}>
        {[...brandImages, ...brandImages].map((src, index) =>(
          <Image className="h-auto w-full object-cover" key={index} src={src} width="400" height="400" alt="brand image" />
        ))}
      </div>
    </div>
  );
}


export default Marquee