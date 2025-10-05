import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import LanguageSwitcher from "../componetn/LanguageSwitcher";
import { TextFade } from "../framer/TextFade";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePolicy } from "react-icons/md";

const MotionButton = motion.button;
function Home() {
  const { t, i18n } = useTranslation();
  //00343A
  //5E5197
  return (
    <div
      className={` min-h-screen flex flex-col-reverse xl:flex-row items-center justify-center p-5 md:px-10  xl:px-15 bg-[#f7f7f7] gap-15 ${
        i18n.language === "ar" ? "rtl" : "ltr"
      }`}
    >
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      {/* <div
        className={`fixed bottom-0 h-15 w-15 md:h-25 md:w-25 lg:h-35 lg:w-35 flex items-end p-0 md:p-2 justify-end lg:justify-start bg-[#5E5197] ${
          i18n.language === "ar"
            ? "left-0 lg:right-0 rounded-tr-full lg:rounded-tl-full lg:rounded-tr-none "
            : "right-0 lg:left-0 rounded-tl-full lg:rounded-tr-full lg:rounded-tl-none "
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
      </div> */}
      {/* profile image */}
      <img
        src="/profile2.jpg"
        alt="Chef"
        className={`absolute top-0 w-full  xl:w-160 object-contain drop-shadow-lg border-b-[7px] border-[#5E5197]
          ${
            i18n.language === "ar"
              ? "left-0 rounded-br-[15rem] rounded-bl-[1rem] md:rounded-tr-[1rem]  border-r-[2px]"
              : "right-0 rounded-bl-[15rem] rounded-br-[1rem] md:rounded-tl-[1rem] border-l-[2px]"
          }`}
      />

      <TextFade
        direction="up"
        className="w-full lg:w-2/3 flex flex-col gap-5 lg:p-1 text-[#0B1215] mb-5"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          <span className="text-[#5E5197]"> {t("welcome")}</span> {t("name")}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl whitespace-pre-wrap/relaxed font-[400]">
          {t("description")}
          <br />
          <br /> {t("description2")}
          <br />
          <br />
          <FaLocationDot className="inline-block text-[#5E5197]" />{" "}
          {t("location")}
        </p>

        <TextFade
          direction="up"
          className="flex flex-col gap-4 md:gap-5 pt-5 text-xl md:text-2xl lg:text-3xl ltr font-[450]"
        >
          <MotionButton
            onClick={() => window.open("https://wa.me/966502774403", "_blank")}
            className="group flex items-center w-full justify-between cursor-pointer text-[#5E5197] rounded-lg  px-4 py-2 md:py-3  transition-all duration-300 border-2 border-[#5E5197] hover:bg-[#5E5197] hover:text-[#f7f7f7]"
            aria-label="Open WhatsApp chat"
            whileTap={{ scale: 0.98 }}
            transition={{
              scale: { type: "spring", stiffness: 500, damping: 32 },
            }}
          >
            <div className="h-9 w-9 md:h-12 md:w-12 lg:h-14 lg:w-14 p-1.5 md:p-2 border-2 border-[#5E5197] rounded-full flex items-center justify-center group-hover:border-[#f7f7f7]">
              <FaWhatsapp className="text-2xl md:text-3xl lg:text-4xl" />{" "}
            </div>
            {t("whatsapp")}
            <div className="h-9 w-9 md:h-12 md:w-12 lg:h-14 lg:w-14 p-1.5 md:p-2 border-2 border-[#5E5197] opacity-0"></div>
          </MotionButton>
          <MotionButton
            onClick={() =>
              window.open("https://www.instagram.com/suls.kitchen", "_blank")
            }
            className="flex items-center w-full justify-between cursor-pointer bg-[#5E5197] rounded-lg  px-4 py-2 md:py-3 text-[#f7f7f7] hover:bg-[#5E5197]/90 transition-all duration-300 "
            aria-label="Open Instagram profile"
            whileTap={{ scale: 0.98, backgroundColor: "#4A3F85" }}
            whileHover={{ scale: 1.005 }}
            transition={{
              scale: { type: "spring", stiffness: 500, damping: 32 },
              backgroundColor: { duration: 0.08 },
            }}
          >
            <div className="h-9 w-9 md:h-12 md:w-12 lg:h-14 lg:w-14 p-1.5 md:p-2 border-2 border-[#f7f7f7] rounded-full flex items-center justify-center">
              <FaInstagram className="text-2xl md:text-3xl lg:text-4xl" />
            </div>
            {t("instagram")}
            <div className="h-9 w-9 md:h-12 md:w-12 lg:h-14 lg:w-14 p-1.5 md:p-2 border-2 border-[#5E5197] opacity-0"></div>
          </MotionButton>
          {/* <MotionButton
            onClick={() =>
              window.open("https://www.tiktok.com/@tiktok", "_blank")
            }
            className="flex items-center w-full justify-between cursor-pointer bg-[#5E5197] rounded-lg  px-4 py-2 md:py-3 text-[#f7f7f7] hover:bg-[#5E5197]/90 transition-all duration-300 "
            aria-label="Open TikTok profile"
            whileTap={{ scale: 0.98, backgroundColor: "#4A3F85" }}
            whileHover={{ scale: 1.005 }}
            transition={{
              scale: { type: "spring", stiffness: 500, damping: 32 },
              backgroundColor: { duration: 0.08 },
            }}
          >
            <div className="h-9 w-9 md:h-12 md:w-12 lg:h-14 lg:w-14 p-1.5 md:p-2 border-2 border-[#f7f7f7] rounded-full flex items-center justify-center">
              <FaTiktok className="text-2xl md:text-3xl lg:text-4xl" />{" "}
            </div>
            {t("tiktok")}
            <div className="h-9 w-9 md:h-12 md:w-12 lg:h-14 lg:w-14 p-1.5 md:p-2 border-2 border-[#5E5197] opacity-0"></div>
          </MotionButton> */}
          <MotionButton
            onClick={() => window.open("/Menu.pdf", "_blank")}
            className="flex items-center w-full justify-between cursor-pointer bg-[#5E5197] rounded-lg  px-4 py-2 md:py-3 text-[#f7f7f7] hover:bg-[#5E5197]/90 transition-all duration-300 "
            aria-label="Open Menu PDF"
            whileTap={{ scale: 0.98, backgroundColor: "#4A3F85" }}
            whileHover={{ scale: 1.005 }}
            transition={{
              scale: { type: "spring", stiffness: 500, damping: 32 },
              backgroundColor: { duration: 0.08 },
            }}
          >
            <div className="h-9 w-9 md:h-12 md:w-12 lg:h-14 lg:w-14 p-1.5 md:p-2 border-2 border-[#f7f7f7] rounded-full flex items-center justify-center">
              <MdOutlineRestaurantMenu className="text-2xl md:text-3xl lg:text-4xl" />{" "}
            </div>
            {t("menu")}
            <div className="h-9 w-9 md:h-12 md:w-12 lg:h-14 lg:w-14 p-1.5 md:p-2 border-2 border-[#5E5197] opacity-0"></div>
          </MotionButton>
          <MotionButton
            onClick={() => window.open("/Order-Policy.pdf", "_blank")}
            className="flex items-center w-full justify-between cursor-pointer bg-[#5E5197] rounded-lg  px-4 py-2 md:py-3 text-[#f7f7f7] hover:bg-[#5E5197]/90 transition-all duration-300 "
            aria-label="Open Order Policy PDF"
            whileTap={{ scale: 0.98, backgroundColor: "#4A3F85" }}
            whileHover={{ scale: 1.005 }}
            transition={{
              scale: { type: "spring", stiffness: 500, damping: 32 },
              backgroundColor: { duration: 0.08 },
            }}
          >
            <div className="h-9 w-9 md:h-12 md:w-12 lg:h-14 lg:w-14 p-1 md:p-2 border-2 border-[#f7f7f7] rounded-full flex items-center justify-center">
              <MdOutlinePolicy className="text-2xl md:text-3xl lg:text-4xl" />{" "}
            </div>
            {t("policy")}
            <div className="h-9 w-9 md:h-12 md:w-12 lg:h-14 lg:w-14 p-1.5 md:p-2 border-2 border-[#5E5197] opacity-0"></div>
          </MotionButton>
        </TextFade>
      </TextFade>

      <div className="w-full  xl:w-170 xl:h-[90vh] h-95 md:h-180 lg:h-250 flex justify-center items-center "></div>
    </div>
  );
}

export default Home;
