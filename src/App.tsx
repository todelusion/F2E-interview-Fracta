import { logoPath, logoTitlePath } from "./assets/icons";
import { gravity } from "./assets/motion";
import Hero from "./components/Hero";
import LottieMenuButton from "./components/LottieMenuButton";
import MotionArrow from "./components/MotionArrow";
import MotionGravity from "./components/MotionGravity";
import MotionOrbit from "./components/MotionOrbit";

function App(): JSX.Element {
  return (
    <>
      <header className="flex-between mx-auto mb-20 max-w-8xl px-7 pt-8">
        <img src={logoPath} alt="logo" className="block md:hidden" />
        <img src={logoTitlePath} alt="logo" className="hidden md:block" />
        <LottieMenuButton className="w-14" />
      </header>
      <h1 className="scale-0">序形設計</h1>

      <section className="mx-auto mb-52 min-h-screen max-w-8xl md:mb-36">
        <div className="w-full md:absolute md:-top-1/3">
          <MotionOrbit className="-z-10 md:scale-[200%]" />
        </div>
        <Hero />
      </section>
      <section
        style={{
          backgroundImage: `url(${gravity})`,
        }}
        className="relative min-h-screen rounded-t-[30px] bg-second bg-cover bg-center bg-no-repeat px-6 pt-28 pb-6 lg:bg-right lg:pt-[182px]"
      >
        <div className="mx-auto max-w-8xl">
          <div className="absolute -top-24 right-6 -translate-y-full lg:-top-60 lg:right-32">
            <MotionArrow />
          </div>
          <div className="absolute left-0 top-0 h-full w-full">
            <MotionGravity />
          </div>
          <article className="mb-113">
            <h2 className="mx-auto mb-5 max-w-3xl text-center font-sansEG text-4xl font-medium uppercase md:text-5.5xl md:leading-tight">
              To Dedicate a Proposal for the Coming Era
            </h2>
            <h2 className="mb-10 text-center text-xl font-medium md:text-2xl">
              不斷迎接時代挑戰
            </h2>
            <p className="mx-auto max-w-2xl text-center text-[#D0D0D0]">
              序形是品牌數位化的節點，各種產業透過序形構築品牌的數位樣貌，一同定義未來。
              <br />
              <br />
              我們堅信不同的合作是促成環境進步的動力，序形打造串接品牌策略與數位媒體的渠道，幫助企業切入未來的數位主流市場，推動產業變革的動能，數位市場絕對不僅網路與電商，序形提供企業數位變革的方向，成就非凡。
            </p>
          </article>
        </div>
      </section>
      {/* <section className=" min-h-screen" /> */}
      <footer className="bg-second px-6 pb-6">
        <h2 className="mb-6">序形設計股份有限公司</h2>
        <ul className="mb-9 flex flex-wrap">
          <li className="flex w-full md:basis-4/12">
            <span className="basis-2/12 md:max-w-max">E-Mail &nbsp;</span>
            <span className="basis-1/12">|</span>
            <span>info@fractalab.com</span>
          </li>
          <li className="mb-9 flex w-full md:mb-0 md:basis-4/12">
            <span className="basis-2/12 md:max-w-max">TEL &nbsp;</span>
            <span className="basis-1/12">|</span>
            <span>02-338455678</span>
          </li>
          <li className="w-full text-center text-[#ACACAC] md:basis-4/12 md:text-right">
            © 2022 by Fracta Lab . All rights reserved.
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
