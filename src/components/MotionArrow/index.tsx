import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { arrowTextPath, arrowPath } from "../../assets/icons";

function MotionArrow(): JSX.Element {
  const arrowCtx = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#arrowText", {
        duration: 10,
        rotation: 360,
        ease: "none",
        repeat: -1,
      });
    }, arrowCtx);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={arrowCtx} className="relative h-44 w-44">
      <img
        id="arrowText"
        src={arrowTextPath}
        alt="arrow"
        className="absolute-center"
      />
      <img id="arrow" src={arrowPath} alt="arrow" className="absolute-center" />
    </div>
  );
}

export default MotionArrow;
