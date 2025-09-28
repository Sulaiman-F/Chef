import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import LanguageSwitcher from "../componetn/LanguageSwitcher";

function Home() {
  const { t, i18n } = useTranslation();
  //00343A
  //5E5197
  return (
    <div
      className={` min-h-screen flex flex-col-reverse xl:flex-row items-center justify-center p-5 md:px-10  xl:px-20 ${
        i18n.language === "ar"
          ? "rtl bg-gradient-to-b from-[#00343A] to-[#00343A]"
          : "ltr bg-gradient-to-b from-[#5E5197] to-[#5E5197]"
      }`}
    >
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      <div
        className={`fixed bottom-0 h-15 w-15 md:h-25 md:w-25 lg:h-35 lg:w-35 flex items-end p-0 md:p-2 justify-end lg:justify-start ${
          i18n.language === "ar"
            ? "left-0 lg:right-0 rounded-tr-full lg:rounded-tl-full lg:rounded-tr-none bg-[#5E5197]"
            : "right-0 lg:left-0 rounded-tl-full lg:rounded-tr-full lg:rounded-tl-none bg-[#00343A]"
        }`}
      >
        <img
          src="/ChefHat.webp"
          alt="Chef"
          className={`object-cover w-2/3 h-2/3  hover:rotate-0 transition-all duration-500 ${
            i18n.language === "ar"
              ? "rotate-12 lg:-rotate-12"
              : "-rotate-12 lg:rotate-12"
          }`}
        />
      </div>
      {/* profile image */}
      <img
        src="/Chef.jpg"
        alt="Chef"
        className={`absolute top-0 w-full  xl:w-160 object-contain drop-shadow-lg border-b-[7px] 
          ${
            i18n.language === "ar"
              ? "left-0 rounded-br-[15rem] rounded-bl-[1rem] md:rounded-tr-[1rem]  border-r-[2px] border-[#5E5197]"
              : "right-0 rounded-bl-[15rem] rounded-br-[1rem] md:rounded-tl-[1rem] border-l-[2px] border-[#00343A]"
          }`}
      />

      <div className="w-full lg:w-2/3 lg:h-[80vh] flex flex-col gap-5 lg:p-1 text-[#f7f7f7]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          {t("welcome")}{" "}
          <span
            className={`${
              i18n.language === "ar" ? "text-[#5E5197]" : "text-[#00343A]"
            }`}
          >
            {t("name")}
          </span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl whitespace-pre-wrap/relaxed font-[350]">
          {t("description")}
        </p>

        <div className="flex flex-col gap-4 md:gap-5 pt-5 font-[350] text-xl md:text-2xl lg:text-3xl ">
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center w-fit gap-2  cursor-pointer transition-all duration-300  ${
              i18n.language === "ar"
                ? "hover:text-[#5E5197]"
                : "hover:text-[#00343A]"
            }`}
            aria-label="Open Instagram profile"
          >
            <FaInstagram className="transition-transform group-hover:-translate-y-0.5" />{" "}
            {t("instagram")}
          </a>
          <a
            href="https://www.tiktok.com/@yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center w-fit gap-2  cursor-pointer transition-all duration-300  ${
              i18n.language === "ar"
                ? "hover:text-[#5E5197]"
                : "hover:text-[#00343A]"
            }`}
            aria-label="Open TikTok profile"
          >
            <FaTiktok className="transition-transform group-hover:-translate-y-0.5" />{" "}
            {t("tiktok")}
          </a>

          <a
            href="https://wa.me/966537701127"
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center w-fit gap-2  cursor-pointer transition-all duration-300  ${
              i18n.language === "ar"
                ? "hover:text-[#5E5197]"
                : "hover:text-[#00343A]"
            }`}
            aria-label="Contact on WhatsApp"
          >
            <FaWhatsapp className="transition-transform group-hover:-translate-y-0.5" />{" "}
            {t("whatsapp")}
          </a>

          <a
            href="/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center w-fit gap-2  cursor-pointer transition-all duration-300  ${
              i18n.language === "ar"
                ? "hover:text-[#5E5197]"
                : "hover:text-[#00343A]"
            }`}
            aria-label="Open menu PDF"
          >
            <MdOutlineRestaurantMenu className="transition-transform group-hover:-translate-y-0.5" />{" "}
            {t("menu")}
          </a>
        </div>
      </div>

      <div className="w-full  xl:w-170 xl:h-[90vh] h-110 md:h-200 lg:h-250 flex justify-center items-center "></div>
    </div>
  );
}

export default Home;
