"use client";
import Header from "./components/WhySaudiInner/Header/Header";
import Footer from "./components/WhySaudiInner/Footer/Footer";
import MobileHeader from "./components/WhySaudiInner/MobileHeader/MobileHeader";
import Hero from "./components/Hero/Hero";
import { container6 } from "./contents/MainPage";
import Container6 from "./components/Container6/Container6";
import Container4 from "./components/Container4/Container4";
import Container2 from "./components/Container2/Container2";
import Clients from "./components/ClientsContainer/Clients";
import Container7 from "./components/WhySaudiInner/Container7/Container7";
import ContactBanner from "./components/WhySaudiInner/ContactBanner/ContactBanner";
import WhatsAppChat from "./components/WhatsAppChat/WhatsAppChat";
import LoadingCircle from "./components/LoadingAnimation/LoadingCircle";
import { useEffect, useState } from "react";
import styles from "./styles/loadinganimation.module.css";

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = ["Growth", "Success", "Strategy", "Expansion"];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const whiteScreen = document.querySelector(".whiteScreen");
      if (whiteScreen) {
        // whiteScreen.style.opacity = '0';
        whiteScreen.classList.add("hidden");
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 450);

    return () => clearInterval(interval);
  }, [textOptions.length]);
  return (
    <>
      <div className="whiteScreen">
        <LoadingCircle />
        <div className="changeTextContainer">
          <h1 className="spinnerText">Your Global Advisory Partner For</h1>
          <h1 className="changeText">
            <span className="spinnerText"> Business </span>{" "}
            {textOptions[textIndex]}
          </h1>
        </div>
      </div>
      <Header />
      <MobileHeader />
      <WhatsAppChat />
      <Hero />
      <Container6 data={container6} />
      <Container4 />
      <Container2 />
      <Clients />
      <Container7 />
      <ContactBanner />
      <Footer />
    </>
  );
}
