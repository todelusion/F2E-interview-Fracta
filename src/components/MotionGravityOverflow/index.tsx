import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import { Ellipse53, Ellipse62 } from "../../assets/motion";

function MotionGravityOverflow(): JSX.Element {
  const gravityOverflowCtx = useRef<HTMLDivElement>(null);

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

      tl.to(
        "#Ellipse53",
        {
          scale: 0,
          motionPath: {
            path: "#path53",
            align: "#path53",
            alignOrigin: [0.5, 0.5],
          },
        },
        "<"
      );
      tl.to(
        "#Ellipse62",
        {
          scale: 0,
          motionPath: {
            path: "#path62",
            align: "#path62",
            alignOrigin: [0.5, 0.5],
          },
        },
        "<"
      );
    }, gravityOverflowCtx);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={gravityOverflowCtx}
      className="pointer-events-none relative h-full"
    >
      <div id="triggerGravity" className=" absolute top-1/3" />
      <ul>
        <li className="absolute -right-32 top-0 hidden md:right-100 md:block">
          <svg
            width="165"
            height="801"
            viewBox="0 0 165 801"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path id="path53" d="M164.5 0.5C123.833 114.5 32.6 437.2 1 800" />
          </svg>

          <img id="Ellipse53" src={Ellipse53} alt="" />
        </li>
        <li className=" absolute top-0 right-20 md:right-1/2">
          <svg
            width="224"
            height="869"
            viewBox="0 0 224 869"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-75 md:scale-100"
          >
            <path id="path62" d="M0.5 1C77.6667 179.5 228.6 603.7 223 868.5" />
          </svg>
          <img id="Ellipse62" src={Ellipse62} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default MotionGravityOverflow;
