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
          "Featured Categories":"Featured Categories",
          "View All  Categories":"View All  Categories",
          "A Seasonal Shift.":"A Seasonal Shift.",
          "Exclusive early access to our Autumn/Winter pre-collection. Tailored for the transition.":"Exclusive early access to our Autumn/Winter pre-collection. Tailored for the transition.",
          "Explore Pre-Collection":"Explore Pre-Collection",
          "THE COMMUNITY":"THE COMMUNITY",
          "Trusted by the Discerning.":"Trusted by the Discerning.",
          "EXPLORE":"EXPLORE",
          "The Archive Series":"The Archive Series",
          "Elevated Basics":"Elevated Basics",
          "Object & Form":"Object & Form",
          "Join the Collective.":"Join the Collective.",
          "Subscribe to receive early access to new arrivals, private sales, and curated lifestyle editorials.":"Subscribe to receive early access to new arrivals, private sales, and curated lifestyle editorials.",
          "By subscribing, you agree to our Privacy Policy and Terms of Service.":"By subscribing, you agree to our Privacy Policy and Terms of Service.",
          "Elevating the everyday through curated luxury and architectural design.":"Elevating the everyday through curated luxury and architectural design.",
          "Track Order":"Track Order",
          "Shipping & Returns":"Shipping & Returns",
          "Size Guide":"Size Guide",
          "Contact Us":"Contact Us",
          "CLIENT SERVICE":"CLIENT SERVICE",
          "ABOUT KASHOP":"ABOUT KASHOP",
          "Our Story":"Our Story",
          "Sustainability":"Sustainability",
          "Retail Locations":"Retail Locations",
          "Careers":"Careers",
          "LEGAL":"LEGAL",
          "Privacy Policy":"Privacy Policy",
          "Terms of Service":"Terms of Service",
          "Cookie Settings":"Cookie Settings",
          "© 2026 KaShop Luxury Retail. All rights reserved.":"© 2026 KaShop Luxury Retail. All rights reserved.",
          "THE EXCLUSIVE 2026 COLLECTION":"THE EXCLUSIVE 2026 COLLECTION",
          "Premium Collection":"Premium Collection",
          "Discover the perfect balance between architectural innovation and minimalist aesthetics. Premium appliances designed to elevate every moment in your home.":"Discover the perfect balance between architectural innovation and minimalist aesthetics. Premium appliances designed to elevate every moment in your home.",
          "Explore Now":"Explore Now",
          "Watch Video":"Watch Video",


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
          "Featured Categories":"التصنيفات المميزة",
          "View All  Categories":"عرض جميع الفئات",
          "A Seasonal Shift.":"تحوّل موسمي.",
          "Exclusive early access to our Autumn/Winter pre-collection. Tailored for the transition.":"وصول حصري مبكر إلى مجموعتنا التمهيدية لخريف/شتاء. مصمّمة بعناية لتناسب مرحلة الانتقال.",
          "Explore Pre-Collection":"استكشف المجموعة التمهيدية",
          "THE COMMUNITY":"المجتمع",
          "Trusted by the Discerning.":"اختيار موثوق لمن يقدّرون التميز",
          "EXPLORE":"استكشف",
          "The Archive Series":"مجموعة الأرشيف",
          "Elevated Basics":"القطع الأساسية الفاخرة",
          "Object & Form":"الشكل والمادة",
          "Join the Collective.":"انضم إلى المجتمع",
          "Subscribe to receive early access to new arrivals, private sales, and curated lifestyle editorials.":"اشترك للحصول على وصول مبكر إلى المنتجات الجديدة، والعروض الخاصة، والمقالات المختارة بعناية حول أسلوب الحياة.",
          "By subscribing, you agree to our Privacy Policy and Terms of Service.":"بالاشتراك، فإنك توافق على سياسة الخصوصية وشروط الخدمة الخاصة بنا.",
          "Elevating the everyday through curated luxury and architectural design.":"نرتقي بتفاصيل الحياة اليومية عبر فخامةٍ منتقاة بعناية وتصميمٍ معماري راقٍ.",
          "Track Order":"تتبع الطلب",
          "Shipping & Returns":"الشحن والإرجاع",
          "Size Guide":"دليل المقاسات",
          "Contact Us":"اتصل بنا",
          "CLIENT SERVICE":"خدمة العملاء",
          "ABOUT KASHOP":"عن KASHOP",
          "Our Story":"قصتنا",
          "Sustainability":"الاستدامة",
          "Retail Locations":"مواقع البيع بالتجزئة",
          "Careers":"الوظائف",
          "LEGAL":"قانوني",
          "Privacy Policy":"سياسة الخصوصية",
          "Terms of Service":"شروط الخدمة",
          "Cookie Settings":"إعدادات ملفات تعريف الارتباط",
          "© 2026 KaShop Luxury Retail. All rights reserved.":"© 2026 KaShop لتجارة التجزئة الفاخرة. جميع الحقوق محفوظة.",
          "THE EXCLUSIVE 2026 COLLECTION": "المجموعة الحصرية لعام 2026",
          "Discover the perfect balance between architectural innovation and minimalist aesthetics. Premium appliances designed to elevate every moment in your home.": "اكتشف التوازن المثالي بين الابتكار المعماري والجماليات البسيطة. أجهزة منزلية فاخرة صُممت لترتقي بكل لحظة في منزلك.",
          "Explore Now": "استكشف الآن",
          "Premium Collection": "المجموعة الفاخرة",
          "Watch Video": "شاهد الفيديو",




        }
      }
   
    },
    lng: i18n.language, // if you're using a language detector, do not define the lng option
    
  });

  export default i18n;
  