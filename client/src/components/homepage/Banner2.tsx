import { InlineIcon } from "@iconify/react";
import "./Banner.css";
import Banner2Img from "../../assets/mon_hand-holding-paw.png";

export default function Banner2() {
  return (
    <section id="banner-section">
      <article className="banner banner2">
        <img src={Banner2Img} alt="" />
        <div className="square1"></div>
        <div className="square2"></div>
        <div className="banner-content">
          <h2 className="heading-m bold">
            Adoption
            <InlineIcon icon="fontisto:paw" width={32} />
          </h2>
          <h3 className="heading-s semibold">We Need Help. So Do They.</h3>
          <p className="body-m">
            Adopt a pet and give them a home.
            <br />
            They will love you back unconditionally.
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
