import React from "react";
import Header from "../components/header/Header";
import SendEmail from "../components/SendEmail";
import ImgContentBox from "../components/ImgContentBox";
import astro_circle from "../assets/landing_page/astro_circle.png";
import tv from "../assets/landing_page/tv.png";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import WrappingBox from "../components/WrappingBox";

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="bg-img-main bg-img-common">
        <div className="connect-container">
          <h1>{t("l_page_cover.title")}</h1>
          <p>{t("l_page_cover.description")}</p>
          <SendEmail />
        </div>
      </div>
      <div className="ads-container">
        <div className="ads-banner">
          <img src={astro_circle} alt="astro-image" />
          <div className="ads-description">
            <h4>{t("ads.ad1.title")} $4.99.</h4>
            <p>{t("ads.ad1.description")}</p>
            <Link to="/">
              {t("ads.ad1.link")}
              <AiOutlineRight />
            </Link>
          </div>
        </div>
      </div>
      <ImgContentBox
        right={true}
        imgSrc={tv}
        heading={t("boxes_content.box1.title")}
        para={t("boxes_content.box1.description")}
      />
      <div className="hr-line" />
      <ImgContentBox
        right={false}
        imgSrc={tv}
        heading={t("boxes_content.box2.title")}
        para={t("boxes_content.box2.description")}
      />
      <div className="hr-line" />
      <ImgContentBox
        right={true}
        imgSrc={tv}
        heading={t("boxes_content.box3.title")}
        para={t("boxes_content.box3.description")}
      />
      <div className="hr-line" />
      <div className="faq-bg">
        <div className="faq-container">
          <h1>Frequently Asked Questions</h1>
          <WrappingBox question={t("faq.q1")} answer={t("faq.a1")} />
          <WrappingBox question={t("faq.q2")} answer={t("faq.a2")} />
          <WrappingBox question={t("faq.q3")} answer={t("faq.a3")} />
          <WrappingBox question={t("faq.q4")} answer={t("faq.a4")} />
          <WrappingBox question={t("faq.q5")} answer={t("faq.a5")} />
          <WrappingBox question={t("faq.q6")} answer={t("faq.a6")} />
          <SendEmail />
        </div>
      </div>
      <div className="hr-line" />
      <Footer />
    </>
  );
};

export default LandingPage;
