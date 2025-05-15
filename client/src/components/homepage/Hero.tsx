import "./Hero.css";
import { InlineIcon } from "@iconify/react";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-wrapper">
        <HeroBackground />
        <div className="hero-content">
          <h1 className="heading-l bold">One More Friend</h1>
          <h2 className="heading-m semibold">Thousands More Fun!</h2>
          <p className="body-m">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
        </div>
        <div className="action-buttons">
          <button className="button-outline">
            View Intro
            <InlineIcon icon="ci:play-circle" width={18} />
          </button>
          <button className="button">Explore Now</button>
        </div>
      </div>
    </section>
  );
}
