import React from "react";
import "./footer.css";
import { Element } from "react-scroll";
import { GrFacebook } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";

function Footer() {
  return (
    <Element id="contact-footer" name="contact-footer">
      <div className="footer">
        <div className="footer__wrap">
          <img
            className="footer__banner"
            src={require("../../assets/footer-salento-3.jpg")}
            alt="footer"
          />
          <div className="footer__content">
            <div className="footer__header">
              <div className="footer__header--logo">
                <img src={require("../../assets/Salenticceria.png")} alt="logo" />
              </div>
            </div>
            <div className="footer__contact">
              <div className="footer__contact--item">
                <div className="footer__contact--item--phone">
                  <p className="footer__contact--paragraph">
                    Contatti per ordinare una torta presso il negozio:{" "}
                  </p>

                  <p className="footer__contact--paragraph">
                    <span className="footer__contact--phoneicon">
                      <FaPhoneAlt />{" "}
                    </span>{" "}
                    <a className="phone__link" href="tel:0833591234">
                      0833591234
                    </a>{" "}
                    (Fisso)
                  </p>
                  <p className="footer__contact--paragraph">
                    <span className="footer__contact--phoneicon">
                      <FaPhoneAlt />{" "}
                    </span>{" "}
                    <a className="phone__link" href="tel:3201234567">
                      3201234567
                    </a>{" "}
                    (Cellulare)
                  </p>

                  <p className="footer__contact--paragraph">
                    <span className="footer__contact--houseicon">
                      <GiHouse />
                    </span>{" "}
                    Consegna dei prodotti nella provincia di Lecce
                  </p>
                </div>
              </div>
              <div className="footer__contact--item">
                <a
                  className="footer__contact--icon"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrFacebook />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <p className="footer__copyright--paragraph">
              &copy; Copyright. Nicholas Notaro. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Footer;
