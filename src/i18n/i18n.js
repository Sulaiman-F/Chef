import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Suls",
      name: " Kitchen",
      description:
        "Suls Kitchen brings local flavors with a global twist, crafted by a Saudi chef graduated in Culinary Arts from Switzerland.",
      description2: "Distinctive dishes for your events and gatherings.",
      location: "Riyadh | For reservations and contact via WhatsApp",
      instagram: "Suls Kitchen",
      tiktok: "Tiktok",
      whatsapp: "Whatsapp",
      menu: "Menu",
      policy: "Orders Policy",
      language: "Language",
    },
  },
  ar: {
    translation: {
      welcome: "سولز",
      name: "كتشين",
      description:
        "سولز كتشن يقدم نكهات محلية بلمسة عالمية بإبداع شيف سعودي خريج فنون الطهي من سويسرا.",
      description2: "أطباق مميزة لمناسباتكم واجتماعاتكم.",
      location: "الرياض | للحجز والتواصل ع طريق الواتساب",
      instagram: "Suls Kitchen",
      tiktok: "تيك توك",
      whatsapp: "واتساب",
      menu: "قائمة الطعام",
      policy: "سياسة الطلبات",
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
