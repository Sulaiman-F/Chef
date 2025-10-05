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
      className="flex items-center gap-2 p-2  rounded-lg transition-all duration-300 cursor-pointer hover:scale-105 bg-[#e0e0e0] hover:bg-[#d6d6d6]"
      aria-label="Change language"
    >
      <IoLanguage className="text-xl text-[#0B1215]" />
    </button>
  );
};

export default LanguageSwitcher;
