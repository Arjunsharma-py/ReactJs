import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer">
        <div className="section links">
          <h4>
            Questions? <a href="/"> Call 1-844-505-2993 </a>
          </h4>
          <ul className="footer-list">
            <li>
              <a href="today's Horoscope">{t("footer.faq")}</a>
            </li>
            <li>
              <a href="today's Horoscope">{t("footer.t_h")}</a>
            </li>
            <li>
              <a href="today's Horoscope">{t("footer.t_l_h")}</a>
            </li>
            <li>
              <a href="today's Horoscope">{t("footer.y_h")}</a>
            </li>
            <li>
              <a href="today's Horoscope">{t("footer.to_h")}</a>
            </li>
            <li>
              <a href="today's Horoscope">{t("footer.w_h")}</a>
            </li>
            <li>
              <a href="today's Horoscope">{t("footer.m_h")}</a>
            </li>
            <li>
              <a href="today's Horoscope">{t("footer.yl_h")}</a>
            </li>
          </ul>
        </div>
        <div className="section links">
          <ul className="footer-list">
            <li>
              <a href="today's Horoscope">{t("footer.bl")}</a>
            </li>
            <li>
              <a href="today's Horoscope">{t("footer.pl")}2024</a>
            </li>
            <li>
              <a href="today's Horoscope">{t("footer.ta")}</a>
            </li>
            <li>
              <a href="today's Horoscope">{t("footer.tc")}</a>
            </li>
          </ul>
        </div>
        <div className="section links">
          <ul className="footer-list">
            <li>
              <a href="today's Horoscope">Terms & Conditions</a>
            </li>
            <li>
              <a href="today's Horoscope">Privacy Policy</a>
            </li>
            <li>
              <a href="today's Horoscope">Disclaimer</a>
            </li>
            <li>
              <a href="today's Horoscope">About Us</a>
            </li>
            <li>
              <a href="today's Horoscope">Pricing Policy</a>
            </li>
          </ul>
        </div>
        <div className="section links">
          <ul className="footer-list">
            <li>
              <a href="today's Horoscope">Private & Confidential</a>
            </li>
            <li>
              <a href="today's Horoscope">Verified Astrologers</a>
            </li>
            <li>
              <a href="today's Horoscope">Secure Payment</a>
            </li>
          </ul>
        </div>
      </div>
      <small>&copy; 2024 Astrology App</small>
    </footer>
  );
};

export default Footer;
