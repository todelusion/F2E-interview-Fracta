import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useLayoutEffect, useRef } from "react";
import { Ellipse1Path, Ellipse2Path, Ellipse3Path } from "../../assets/icons";
import { dMotionOrbit } from "../../assets/motion";

interface IMotionOrbitProps {
  className?: string;
}

function MotionOrbit({ className }: IMotionOrbitProps): JSX.Element {
  const orbitCtx = useRef<HTMLUListElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(MotionPathPlugin);
      gsap.to("#circle", {
        duration: 5,
        motionPath: {
          path: "#orbit",
          align: "#orbit",
          alignOrigin: [0.5, 0.5],
        },
        ease: "none",
        repeat: -1,
      });
    }, orbitCtx);

    return () => ctx.revert();
  }, []);

  return (
    <ul
      ref={orbitCtx}
      className={`${className ?? ""} relative mx-auto max-w-sm`}
    >
      <li className=" absolute -left-64 -top-10 z-10">
        <img src={Ellipse1Path} alt="" />
      </li>
      <li className=" absolute top-16 -left-20">
        <img src={Ellipse2Path} alt="" />
      </li>
      <li className="absolute top-70 right-12 -z-10 -translate-y-1/2">
        <svg
          width="536"
          viewBox="0 0 536 645"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-64"
        >
          <path
            id="orbit"
            d={dMotionOrbit}
            stroke="white"
            strokeOpacity="0.6"
            strokeWidth="0.5"
          />
        </svg>
        <div id="circle" className="h-3 w-3 rounded-full bg-white" />
      </li>
      <li>
        <img src={Ellipse3Path} alt="" className="absolute right-10 top-72" />
      </li>
    </ul>
  );
}

export default MotionOrbit;
