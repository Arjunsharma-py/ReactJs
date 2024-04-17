import React from "react";
import { Link } from "react-router-dom";
import MultiLingual from "../MultiLingual";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <header>
        <div className="header-links">
          <div className="header-logo">
            <Link to="/">AstroStar</Link>
          </div>
          <div className="navbar">
            <MultiLingual />
            <Link to="/signin" className="red-btn">
              {t("buttons.sign_in")}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
