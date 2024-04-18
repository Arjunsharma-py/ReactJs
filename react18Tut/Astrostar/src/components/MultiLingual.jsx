import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "hi", lang: "हिंदी" },
  { code: "ta", lang: "தமிழ்" },
  { code: "ar", lang: "عربي" },
  { code: "es", lang: "Español" },
  { code: "fr", lang: "Français" },
  { code: "cmn", lang: "中國人" },
  { code: "ja", lang: "日本語" },
  { code: "ru", lang: "русский" },
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
