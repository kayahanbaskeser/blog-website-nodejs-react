import React, { useEffect } from "react";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Portfolio } from "../components/portfolio/portfolio";
import { AboutMe } from "../components/aboutMe/aboutMe";
import "../style/style.scss";

export const App = () => {
  useEffect(() => {
    console.log("Hey !");
  }, []);

  return (
    <div>
      <Header />
      <Portfolio />
      <AboutMe />
      <Footer />
    </div>
  );
};
