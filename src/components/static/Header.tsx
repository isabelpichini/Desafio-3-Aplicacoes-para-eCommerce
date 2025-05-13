import MonLogo from "../../assets/mon_logo.svg";
import VNFlag from "../../assets/vn-flag.svg";
import Input from "./Inputs";
import "./Header.css";
import { InlineIcon } from "@iconify/react";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <img src={MonLogo} alt="Monito Logo" />
        <nav>
          <ul>
            <li>
              <a className="body-m bold" href="">
                Home
              </a>
            </li>
            <li>
              <a className="body-m bold" href="">
                Category
              </a>
            </li>
            <li>
              <a className="body-m bold" href="">
                About
              </a>
            </li>
            <li>
              <a className="body-m bold" href="">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <Input
          id="search"
          name="search"
          type="search"
          placeholder="Search something here!"
          icon="ci:search"
          iconOnClick={() => console.log("Icon clicked")}
          iconPosition="before"
        />

        <button className="button">Join the community</button>

        <div className="currency pointer">
          <img src={VNFlag} alt="" />
          <p className="body-m">VND</p>
          <InlineIcon icon="ci:caret-down-md" width={24} />
        </div>
      </div>
    </header>
  );
}
