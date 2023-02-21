import React from "react";
import useMobie from "../hooks/useMobie";

function Hero(): JSX.Element {
  const isMobile = useMobie();

  const renderMobile = (): JSX.Element => (
    <p className="mx-auto mb-5 text-center font-sansEG text-4xl font-medium uppercase">
      <span className="mb-2 block text-base font-normal">about</span>
      We Accelerate
      <br />
      the Organization
      <br />
      is transition
      <br />
      to the future
      <br />
      period
    </p>
  );
  const renderDesktop = (): JSX.Element => (
    <p className="mx-auto mb-5 text-center font-sansEG text-4xl font-medium uppercase xl:text-5.5xl xl:leading-[67.2px]">
      <span className="mb-2 block text-base font-normal">ABOUT</span>
      We Accelerate
      <br />
      the Organization is
      <br />
      transition
      <br />
      to the future period
    </p>
  );

  return (
    <>
      {isMobile ? renderMobile() : renderDesktop()}
      <h2 className="text-center text-xl font-medium">品牌發展的夥伴</h2>
    </>
  );
}

export default Hero;
