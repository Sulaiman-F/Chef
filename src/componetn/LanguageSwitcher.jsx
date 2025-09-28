import React from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`group flex items-center gap-2 p-2  rounded-lg transition-all duration-300 cursor-pointer hover:scale-105 ${
        i18n.language === "ar"
          ? "bg-[#0A5258] hover:bg-[#0A5258]/90"
          : "bg-[#5E5197] hover:bg-[#5E5197]/90"
      }`}
      aria-label="Change language"
    >
      <IoLanguage
        className={`text-xl text-[#f7f7f7] ${
          i18n.language === "ar"
            ? "group-hover:text-[#5E5197]"
            : "group-hover:text-[#0A5258]"
        }`}
      />
    </button>
  );
};

export default LanguageSwitcher;
