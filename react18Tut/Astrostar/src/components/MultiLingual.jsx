import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "hi", lang: "हिंदी" },
  { code: "ar", lang: "عربي" },
];

const MultiLingual = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select
      name="language"
      id="lang"
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      {languages.map((lng) => {
        return (
          <option key={lng.code} value={lng.code}>
            {lng.lang}
          </option>
        );
      })}
    </select>
  );
};

export default MultiLingual;
