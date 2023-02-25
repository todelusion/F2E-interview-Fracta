import Lottie from "lottie-web";
import { useLayoutEffect, useRef } from "react";
import data from "./data";

interface ILottieMenuButtonProps {
  onClick?: () => void;
  className?: string;
}

function LottieMenuButton({
  onClick,
  className,
}: ILottieMenuButtonProps): JSX.Element {
  const lottieMenuRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const animation = Lottie.loadAnimation({
      container: lottieMenuRef.current as HTMLDivElement,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: data,
    });

    return () => animation.destroy();
  }, []);

  return (
    <button type="button" onClick={onClick}>
      <div
        ref={lottieMenuRef}
        onMouseEnter={() => {
          Lottie.setDirection(1);
          Lottie.play();
        }}
        onMouseLeave={() => {
          Lottie.setDirection(-1);
          Lottie.play();
        }}
        className={className}
      />
    </button>
  );
}

export default LottieMenuButton;
