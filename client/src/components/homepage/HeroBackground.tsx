import "./HeroBackground.css";
import HeroImage from "../../assets/mon_woman-holding-corgi.png";

export default function HeroBackground() {
  return (
    <div className="hero-background">
      <img src={HeroImage} alt="" />
      <div className="square1"></div>
      <div className="square2"></div>
      <div className="square3"></div>
      <div className="square4"></div>
      <div className="square5"></div>
      <div className="square6"></div>
      <div className="square7"></div>
      <div className="square8"></div>
    </div>
  );
}
