import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import {
  Ellipse53,
  Ellipse54,
  Ellipse55,
  Ellipse56,
  Ellipse57,
  Ellipse58,
  Ellipse59,
  Ellipse60,
  Ellipse61,
  Ellipse62,
  gravity,
  motionGravityRef,
} from "../../assets/motion";

function MotionGravity(): JSX.Element {
  const gravityCtx = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(MotionPathPlugin);
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#triggerGravity",
          // markers: true,
          start: "top 40%",
          end: "top 1%",
          scrub: true,
        },
      });

      tl.to("#circle62", {
        scale: 0,
        motionPath: {
          path: "#path62",
          align: "#path62",
          alignOrigin: [0.5, 0.5],
        },
      });
    }, gravityCtx);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={gravityCtx} id="motionGravity" className="relative h-full">
      <div id="triggerGravity" className=" absolute top-52" />

      <svg
        width="224"
        height="869"
        viewBox="0 0 224 869"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-11 left-[calc(50%+1rem)] origin-top-left scale-75 md:scale-100"
      >
        <path id="path62" d="M0.5 1C77.6667 179.5 228.6 603.7 223 868.5" />
      </svg>

      {/* <img id="circle53" src={Ellipse53} alt="" />
      <img id="circle54" src={Ellipse54} alt="" />
      <img id="circle54" src={Ellipse55} alt="" />
      <img id="circle54" src={Ellipse56} alt="" />
      <img id="circle54" src={Ellipse57} alt="" />
      <img id="circle54" src={Ellipse58} alt="" />
      <img id="circle54" src={Ellipse59} alt="" />
      <img id="circle54" src={Ellipse60} alt="" /> */}

      {/* OK */}
      {/* <img
        id="circle61"
        src={Ellipse61}
        alt=""
        className=" absolute right-16 bottom-40"
      /> */}
      <img
        id="circle62"
        src={Ellipse62}
        alt=""
        className=" absolute -top-11 left-[calc(50%+1rem)]"
      />
    </div>
  );
}

export default MotionGravity;
