import React from "react";
import { logoPath, logoTitlePath, menuPath } from "./assets/icons";
import Hero from "./components/Hero";
import useMobie from "./hooks/useMobie";

function App(): JSX.Element {
  const isMobile = useMobie();

  return (
    <div className="max-w-8xl text-white">
      <header className="flex-between mb-[85px] px-7 pt-8">
        <img src={isMobile ? logoPath : logoTitlePath} alt="logo" />
        <button type="button">
          <img src={menuPath} alt="" />
          <span className="font-sansEG text-white">MENU</span>
        </button>
      </header>
      <section className="min-h-screen">
        <Hero />
      </section>
    </div>
  );
}

export default App;
