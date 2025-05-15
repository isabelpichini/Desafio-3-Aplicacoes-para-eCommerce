import { InlineIcon } from "@iconify/react";
import "./Banner.css";
import Banner1Img from "../../assets/mon_woman-kissing-pug.png";

export default function Banner1() {
  return (
    <section id="banner-section">
      <article className="banner">
        <img src={Banner1Img} alt="" />
        <div className="square1"></div>
        <div className="square2"></div>
        <div className="banner-content">
          <h2 className="heading-m bold">One More Friend</h2>
          <h3 className="heading-s semibold">Thousands More Fun!</h3>
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
      </article>
    </section>
  );
}
