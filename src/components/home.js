import React from "react";
import Logo from "../images/JDPwhite.png";

export default function Home() {
  return (
    <section id="home">
      <img className="mainlogo" src={Logo} alt="Logo" />
      <div className="social-menu">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/joshuadaltonphotography-103118494616845/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/joshuadaltonphotography/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC-Ny-B0xPm4pn2HOXcqq6qg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fa fa-envelope-o"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
