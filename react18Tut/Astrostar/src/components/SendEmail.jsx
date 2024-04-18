import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineRight } from "react-icons/ai";

const SendEmail = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // apiClient
    //   .post({ email: e.target.value })
    //   .then((res) => console.log(res.message))
    //   .catch((err) => console.log(err.message));
    console.log(e.target.email.value);
  };

  return (
    <form className="email-container" onSubmit={handleSubmit}>
      <input type="email" placeholder="Email address" name="email" />
      <button type="submit" className="red-btn">
        {t("buttons.get_started")} <AiOutlineRight />
      </button>
    </form>
  );
};

export default SendEmail;
