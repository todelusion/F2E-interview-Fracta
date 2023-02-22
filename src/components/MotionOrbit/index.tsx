import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useLayoutEffect, useRef } from "react";
import { motionOrbit } from "../../assets/motion";
import "./style.css";

function MotionOrbit(): JSX.Element {
  const orbitCtx = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(MotionPathPlugin);
      gsap.to("#circle", { duration: 0, x: "50%", y: 0 });
      gsap.to("#circle", {
        duration: 10,
        motionPath: { path: motionOrbit },
        repeat: -1,
      });
    }, orbitCtx);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={orbitCtx}>
      <div id="circle" className="h-20 w-20 rounded-full bg-white" />
    </div>
  );
}

export default MotionOrbit;
