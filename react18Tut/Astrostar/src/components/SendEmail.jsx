import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineRight } from "react-icons/ai";

const SendEmail = () => {
  const { t } = useTranslation();
  return (
    <form className="email-container">
      <input type="email" placeholder="Email address" />
      <button type="submit" className="red-btn">
        {t("buttons.get_started")} <AiOutlineRight />
      </button>
    </form>
  );
};

export default SendEmail;
