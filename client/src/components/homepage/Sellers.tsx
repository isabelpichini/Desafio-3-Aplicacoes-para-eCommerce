import { InlineIcon } from "@iconify/react";
import ShebaLogo from "../../assets/mon_sheba-logo.svg";
import WhiskasLogo from "../../assets/mon_whiskas-logo.svg";
import BakersLogo from "../../assets/mon_purina-bakers-logo.svg";
import FelixLogo from "../../assets/mon_purina-felix-logo.svg";
import GoodBoyLogo from "../../assets/mon_good-boy-logo.svg";
import ButchersLogo from "../../assets/mon_butchers-logo.svg";
import PedigreeLogo from "../../assets/mon_pedigree-logo.svg";
import "./Sellers.css";

export default function Sellers() {
  return (
    <section id="sellers">
      <div className="sellers-wrapper">
        <div className="sellers-header">
          <p className="body-m">
            Proud to be a part of{" "}
            <span className="heading-xs semibold"> Pet Sellers</span>
          </p>
          <button className="button-outline">
            View all of our sellers
            <InlineIcon icon="ci:chevron-right-md" width={18} />
          </button>
        </div>
        <div className="sellers-icons">
          <div className="icon">
            <img src={ShebaLogo} alt="Sheba Logo" width={88} height={64} />
          </div>
          <div className="icon">
            <img src={WhiskasLogo} alt="Whiskas Logo" />
          </div>
          <div className="icon">
            <img src={BakersLogo} alt="Purina Bakers logo" />
          </div>
          <div className="icon">
            <img src={FelixLogo} alt="Purina Felix Logo" />
          </div>
          <div className="icon">
            <img src={GoodBoyLogo} alt="Good Boy Logo" />
          </div>
          <div className="icon">
            <img src={ButchersLogo} alt="Butcher's Logo" />
          </div>
          <div className="icon">
            <img src={PedigreeLogo} alt="Pedigree Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
