import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import {
  Ellipse54,
  Ellipse55,
  Ellipse56,
  Ellipse57,
  Ellipse58,
  Ellipse59,
  Ellipse60,
  Ellipse61,
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
          start: "top 50%",
          end: "top 1%",
          scrub: true,
        },
      });

      for (let i = 53; i <= 62; i += 1) {
        tl.to(
          `#Ellipse${i}`,
          {
            scale: 0,
            motionPath: {
              path: `#path${i}`,
              align: `#path${i}`,
              alignOrigin: [0.5, 0.5],
            },
          },
          "<"
        );
      }
    }, gravityCtx);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={gravityCtx}
      className="pointer-events-none relative h-full overflow-x-clip"
    >
      <div id="triggerGravity" className=" absolute top-1/3" />

      <ul className="MotionGravity">
        <li className=" absolute right-0 bottom-32 md:right-100">
          <svg
            width="76"
            height="338"
            viewBox="0 0 76 338"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path id="path54" d="M75.5 1C57.3333 53 17 193 1 337" />
          </svg>

          <img id="Ellipse54" src={Ellipse54} alt="" />
        </li>
        <li className=" absolute bottom-32 right-0 md:right-1/3">
          <svg
            width="62"
            height="182"
            viewBox="0 0 62 182"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="path55"
              d="M0.5 1C17.3333 30.3333 55.9 107.5 61.5 181.5"
            />
          </svg>

          <img id="Ellipse55" src={Ellipse55} alt="" />
        </li>
        <li className="absolute top-1/3 left-0 hidden md:left-1/4 md:block">
          <svg
            width="611"
            height="461"
            viewBox="0 0 611 461"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute"
          >
            <path id="path56" d="M0.5 1C156.5 71 416.8 231.2 610 460" />
          </svg>

          <img id="Ellipse56" src={Ellipse56} alt="" />
        </li>
        <li className=" absolute right-0 top-[calc(60%-1rem)] md:right-64">
          <svg
            width="46"
            height="129"
            viewBox="0 0 46 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path id="path57" d="M45 1C29 29.5 -0.49995 96.4 1.50005 128" />
          </svg>

          <img id="Ellipse57" src={Ellipse57} alt="" />
        </li>
        <li className=" absolute right-0 top-2/3 md:right-64">
          <svg
            width="19"
            height="47"
            viewBox="0 0 19 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="path58"
              d="M17.9997 1C12.333 11.6667 1.09966 36.4 1.49966 46"
            />
          </svg>

          <img id="Ellipse58" src={Ellipse58} alt="" />
        </li>
        <li className=" absolute left-0 bottom-32 md:left-100">
          <svg
            width="394"
            height="243"
            viewBox="0 0 394 243"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path id="path59" d="M1 0.5C1 0.5 288.2 117.6 393 242" />
          </svg>

          <img id="Ellipse59" src={Ellipse59} alt="" />
        </li>
        <li className="absolute -bottom-10 left-32 md:left-1/2 md:bottom-0">
          <svg
            width="224"
            height="35"
            viewBox="0 0 224 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="path60"
              d="M1 17C43 -0.666661 143.8 -13.4999 223 34.5001"
            />
          </svg>
          <img id="Ellipse60" src={Ellipse60} alt="" />
        </li>
        <li className="absolute -right-1/2 bottom-0 hidden md:right-32 md:bottom-20 lg:block">
          <svg
            width="353"
            height="114"
            viewBox="0 0 353 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="path61"
              d="M352.5 3.50001C278.667 -4.66666 101 6.6002 1 113"
            />
          </svg>
          <img id="Ellipse61" src={Ellipse61} alt="" className="" />
        </li>
      </ul>

      {/* 
     
     
      
      
      
      */}

      {/* OK */}
    </div>
  );
}

export default MotionGravity;
