"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const maskImage = "/homepage/Parallax/svgexport-1.png";
const girlImage = "/homepage/Parallax/ingredients-clip.jpg";

const firstRowImgOne = "/homepage/Parallax/Radical Transparency.png";
const firstRowImgTwo = "/homepage/Parallax/Potent & Multi Tasking.png";

const arrowImage = "/homepage/Parallax/svgexport-13.png";
const leaf = "/homepage/Parallax/leaf.png";
const peal = "/homepage/Parallax/empress.png";

const ParallaxSection = () => {
  const mainContainer = useRef<HTMLDivElement>(null);
  const rowOneRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(['.row-one, .row-two'],{
            yPercent: 200
        }, {
          yPercent: -110,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: mainContainer.current,
            start: "top bottom",
            end: "bottom 50%",
            scrub: true,
          },
        });

        gsap.fromTo(['.row-three', 'row-four'], {
            yPercent: 110
        },{
            yPercent: -110,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: mainContainer.current,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
              },
        })

        gsap.fromTo('.row-four', {yPercent: 110}, {
            yPercent: -110,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: mainContainer.current,
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
              },})

              gsap.fromTo('.leaf', {yPercent: 110,}, {
                yPercent: -110,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: mainContainer.current,
                    start: "top bottom",
                    end: "bottom 50%",
                    scrub: true,
                  },})

                  gsap.fromTo('.peal', {yPercent: 110,}, {
                    yPercent: -110,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: mainContainer.current,
                        start: "top top",
                        end: "bottom 50%",
                        scrub: true,
                      },})


                      gsap.fromTo('.main-image', {yPercent: -22,},{yPercent: 0,
                        ease: "power1.inOut",
                        scrollTrigger: {
                            trigger: mainContainer.current,
                            start: "top top",
                            end: "bottom 50%",
                            scrub: true,
                          }})
              

        ScrollTrigger.refresh();
      }, mainContainer);

      return () => ctx.revert();
    },
    { scope: mainContainer }
  );

  return (
    <section className="section relative main-container " ref={mainContainer}>
      <div className="container border-b border-[#3b3b3b]">
        <div className="relative mb-32">
          <h2 className="font-[PPMori] text-7xl font-bold mb-7 text-[#3b3b3b] uppercase">
            Clean, Conscious,
            <br />
            Performance
          </h2>
          <h2 className="absolute font-[PPEditorialNewItalic] text-8xl text-[#3b3b3b] left-[28rem] underline-style">
            skincare.
          </h2>
          <p className="text-[#3b3b3b]">
            Unreservedly honest products that truly work, be <br /> kind to skin
            and the planet – no exceptions!
          </p>
          <div className="arrow-image">
            <Image
              className="w-full h-full object-cover"
              height={1000}
              width={600}
              alt="arrow"
              src={arrowImage}
            />
          </div>
        </div>

        <div className="ingrediants-wrapper relative">
          <IngrediantsFirstRow />
          <IngrediantsSecondRow />
          <ParallaxWrapper />
        </div>

        <div className="leaf w-64 h-64 absolute right-[20%] top-[40%]">
          <Image
            className="w-full h-full object-cover"
            height={265}
            width={265}
            alt="leaf"
            src={leaf}
          />
        </div>
        <div className="peal w-64 h-64 absolute left-[20%] bottom-[15%]">
          <Image
            className="w-full h-full object-cover"
            height={265}
            width={265}
            alt="peal"
            src={peal}
          />
        </div>
      </div>
    </section>
  );
};

const IngrediantsFirstRow = (() => {
  return (
    <div className="z-10 flex gap-7">
      <div className="row-one item-one bg-[#f5f5f5] rounded-2xl max-w-80 pt-16 px-10 pb-12 flex flex-col items-center mt-[300px]">
        <Image
          className="bg-white rounded-full mb-5"
          src={firstRowImgOne}
          height={100}
          width={100}
          alt="logo"
        />
        <h3 className="font-semibold uppercase mb-6">Radical Transparency</h3>
        <p className="text-center">
          No black boxes, nothing to hide, we disclose our full formulas, so
          you will never have to guess what's in it and how much.
        </p>
      </div>
      <div className="row-two item-one bg-[#f5f5f5] rounded-2xl max-w-80 pt-16 px-10 pb-12 flex flex-col items-center h-fit">
        <Image
          className="bg-white rounded-full mb-5"
          src={firstRowImgTwo}
          height={100}
          width={100}
          alt="logo"
        />
        <h3 className="font-semibold uppercase mb-6">
          Potent & Multi-Tasking
        </h3>
        <p className="text-center">
          Thoughtfully formulated to do more with less – our actives are
          potent, and every ingredient serves a clear purpose.
        </p>
      </div>
    </div>
  );
});

function IngrediantsSecondRow() {
  return (
    <div className="z-10 flex gap-7 second-row mt-[-5%]">
      <div className="row-three item-one bg-[#f5f5f5] rounded-2xl max-w-80 pt-16 px-10 pb-12 flex flex-col items-center mt-[300px]">
        <Image
          className="bg-white rounded-full mb-5"
          src={firstRowImgOne}
          height={100}
          width={100}
          alt="logo"
        />
        <h3 className="font-semibold uppercase mb-6">Radical Transparency</h3>
        <p className="text-center">
          No black boxes, nothing to hide, we disclose our full formulas, so
          you will never have to guess what's in it and how much.
        </p>
      </div>
      <div className="item-one row-four bg-[#f5f5f5] rounded-2xl max-w-80 pt-16 px-10 pb-12 flex flex-col items-center h-fit">
        <Image
          className="bg-white rounded-full mb-5"
          src={firstRowImgTwo}
          height={100}
          width={100}
          alt="logo"
        />
        <h3 className="font-semibold uppercase mb-6">
          Potent & Multi-Tasking
        </h3>
        <p className="text-center">
          Thoughtfully formulated to do more with less – our actives are
          potent, and every ingredient serves a clear purpose.
        </p>
      </div>
    </div>
  );
}

function ParallaxWrapper() {
  return (
    <div
      className="ingrediants -z-[1]"
      style={{
        WebkitMaskImage: `url('${maskImage}')`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskImage: `url('${maskImage}')`,
        maskRepeat: "no-repeat",
        maskSize: "contain",
      }}
    >
      <Image
        className="main-image w-full h-full object-cover object-center fixed top-0"
        height={1000}
        width={600}
        alt="background"
        src={girlImage}
      />
    </div>
  );
}

export default ParallaxSection;
