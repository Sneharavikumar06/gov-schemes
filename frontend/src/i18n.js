import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Register with Aadhaar": "Register with Aadhaar",
      "Enter Aadhaar Number": "Enter Aadhaar Number",
      "Send OTP": "Send OTP",
      "Enter OTP": "Enter OTP",
      "Verify OTP": "Verify OTP"
    }
  },
  hi: {
    translation: {
      "Register with Aadhaar": "आधार के साथ पंजीकरण करें",
      "Enter Aadhaar Number": "आधार नंबर दर्ज करें",
      "Send OTP": "ओटीपी भेजें",
      "Enter OTP": "ओटीपी दर्ज करें",
      "Verify OTP": "ओटीपी सत्यापित करें"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
