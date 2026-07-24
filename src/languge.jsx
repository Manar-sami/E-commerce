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
          "The Art of Technical Precision":"The Art of Technical Precision",
          "A meticulously curated selection of world-class designers and timeless pieces engineered for the modern aesthetic":"A meticulously curated selection of world-class designers and timeless pieces engineered for the modern aesthetic",
          "Shop the Collection":"Shop the Collection",
          "View Archive":"View Archive",
          "COLLECTION 2026":"COLLECTION 2026",
          "Logout":"Logout",
          "Curated Essentials":"Curated Essentials",
          "Refined silhouettes and premium materials, curated for the discerning individual":"Refined silhouettes and premium materials, curated for the discerning individual",
          "View All Products":"View All Products",


        }
      },
      ar: {
        translation: {
          "Home": "الرئيسية",
          "Categories": "التصنيفات",
          "Products": "المنتجات",
          "The Art of Technical Precision":"فن الدقة التقنية",
          "A meticulously curated selection of world-class designers and timeless pieces engineered for the modern aesthetic":"تشكيلة مختارة بعناية من تصاميم نخبة المصممين العالميين وقطع خالدة، صُمِّمت بإتقان لتجسد الجماليات العصرية",
          "Shop the Collection":"تسوّق المجموعة",
          "View Archive":"استعرض الأرشيف",
          "COLLECTION 2026":"مجموعة 2026",
          "Logout":"تسجيل الخروج",
          "Curated Essentials":"الأساسيات المختارة بعناية",
          "Refined silhouettes and premium materials, curated for the discerning individual":"تصاميم أنيقة بخطوط انسيابية ومواد فاخرة، مختارة بعناية لتناسب أصحاب الذوق الرفيع",
          "View All Products":"عرض جميع المنتجات",
          

        }
      }
   
    },
    lng: i18n.language, // if you're using a language detector, do not define the lng option
    
  });

  export default i18n;
  