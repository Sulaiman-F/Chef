import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      name: "Chef",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eius autem rem magnam fugiat nulla laudantium alias numquam ratione hic doloremque, consequatur quas.",
      instagram: "Instagram",
      tiktok: "Tiktok",
      whatsapp: "Whatsapp",
      menu: "Menu",
      language: "Language",
    },
  },
  ar: {
    translation: {
      welcome: "مرحباً",
      name: "الشيف",
      description:
        "لوريم إيبسوم دولور سيت أميت كونسيكتيتور أديبيسيسينغ إيليت. كونسيكتيتور، إيوس أوتيم ريم ماغنام فوغيات نولا لاوداتيوم أليوس نومكوام راتيوني هيك دولوريمكي، كونسيكواتور كاوس.",
      instagram: "Instagram",
      tiktok: "تيك توك",
      whatsapp: "واتساب",
      menu: "القائمة",
      language: "اللغة",
    },
  },
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    // Start in Arabic by default; will be overridden by detector if matches
    lng: "ar",
    fallbackLng: "en", // fallback language
    debug: true, // set to false in production

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // language detection options
    detection: {
      // Prefer saved choice; if none, fall back to <html lang> (ar) for first visit
      order: ["localStorage", "htmlTag", "navigator", "path", "subdomain"],
      caches: ["localStorage"],
    },
  });

// Keep document direction and lang in sync with i18n
const setDocumentDirLang = (lng) => {
  const dir = lng === "ar" ? "rtl" : "ltr";
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lng);
  }
};

setDocumentDirLang(i18n.language);
i18n.on("languageChanged", setDocumentDirLang);

export default i18n;
