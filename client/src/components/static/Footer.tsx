import Input from "./Inputs";
import "./Footer.css";
import { InlineIcon } from "@iconify/react";
import MonLogo from "../../assets/mon_logo.svg";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="register">
          <h3 className="heading-xs bold">
            Register Now So You Don't Miss Our Programs
          </h3>
          <form action="post">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your Email"
            />
            <button type="submit" className="button">
              Subscribe Now
            </button>
          </form>
        </div>
        <div className="links-socials">
          <nav>
            <ul>
              <li>
                <a className="body-m" href="">
                  Home
                </a>
              </li>
              <li>
                <a className="body-m" href="">
                  Category
                </a>
              </li>
              <li>
                <a className="body-m" href="">
                  About
                </a>
              </li>
              <li>
                <a className="body-m" href="">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="socials">
            <a href="">
              <InlineIcon icon="bxl:facebook-circle" width={40} />
            </a>
            <a href="">
              <InlineIcon icon="bxl:twitter" width={40} />
            </a>
            <a href="">
              <InlineIcon icon="bxl:instagram" width={40} />
            </a>
            <a href="">
              <InlineIcon icon="bxl:youtube" width={40} />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p className="body-s">
            &copy; {currentYear} Monito. All rights reserved.
          </p>
          <img src={MonLogo} alt="Monito Logo" />
          <nav aria-label="Legal links">
            <ul>
              <li>
                <a className="body-s" href="">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="body-s" href="">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
