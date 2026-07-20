import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Home":"Home",
          "Products":"Products",
          "Categories":"Categories",
          "logout":"logout",
          "Login":"Login",
          "Register":"Register",
          "Dont have an account":"Don't have an account",
          "Cart":"Cart"
        }
      },
      ar: {
        translation: {
          "Home": "الرئيسية",
          "Categories": "التصنيفات",
          "Products": "المنتجات",
          "Login": "تسجيل الدخول",
          "logout": "تسجيل الخروج",
          "Dont have an account": "ليس لديك حساب؟",
          "Register": "إنشاء حساب",
          "Cart": "سلة التسوق"
        }
      }
   
    },
    lng: i18n.language, // if you're using a language detector, do not define the lng option
    
  });

  export default i18n;
  