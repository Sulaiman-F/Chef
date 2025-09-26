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
      className="group flex items-center gap-2 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300 cursor-pointer hover:scale-105 "
      aria-label="Change language"
    >
      <IoLanguage className="text-xl text-[#374151] group-hover:text-[#D97706]" />
    </button>
  );
};

export default LanguageSwitcher;
