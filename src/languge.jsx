import React from "react";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
          Home: "Home",
          Products: "Products",
          Categories: "Categories",
          "The Art of Technical Precision": "The Art of Technical Precision",
          "A meticulously curated selection of world-class designers and timeless pieces engineered for the modern aesthetic":
            "A meticulously curated selection of world-class designers and timeless pieces engineered for the modern aesthetic",
          "Shop the Collection": "Shop the Collection",
          "View Archive": "View Archive",
          "COLLECTION 2026": "COLLECTION 2026",
          Logout: "Logout",

          "A Seasonal Shift.": "A Seasonal Shift.",
          "Exclusive early access to our Autumn/Winter pre-collection. Tailored for the transition.":
            "Exclusive early access to our Autumn/Winter pre-collection. Tailored for the transition.",
          "Explore Pre-Collection": "Explore Pre-Collection",
          "THE COMMUNITY": "THE COMMUNITY",
          "Trusted by the Discerning.": "Trusted by the Discerning.",
          EXPLORE: "EXPLORE",
          "The Archive Series": "The Archive Series",
          "Elevated Basics": "Elevated Basics",

          "Contact Us": "Contact Us",
          "CLIENT SERVICE": "CLIENT SERVICE",
          "ABOUT KASHOP": "ABOUT KASHOP",
          "Our Story": "Our Story",
          Sustainability: "Sustainability",
          "Retail Locations": "Retail Locations",
          Careers: "Careers",
          LEGAL: "LEGAL",
          "Privacy Policy": "Privacy Policy",
          "Terms of Service": "Terms of Service",
          "Cookie Settings": "Cookie Settings",
          "© 2026 KaShop Luxury Retail. All rights reserved.":
            "© 2026 KaShop Luxury Retail. All rights reserved.",
          "THE EXCLUSIVE 2026 COLLECTION": "THE EXCLUSIVE 2026 COLLECTION",
          "Premium Collection": "Premium Collection",
          "Discover the perfect balance between architectural innovation and minimalist aesthetics. Premium appliances designed to elevate every moment in your home.":
            "Discover the perfect balance between architectural innovation and minimalist aesthetics. Premium appliances designed to elevate every moment in your home.",
          "Explore Now": "Explore Now",
          "Watch Video": "Watch Video",
          "All Appliances": "All Appliances",
          items: "items",
          "Sort by: Price Low to High": "Sort by: Price Low to High",
          "Sort by: Price High to Low": "Sort by: Price High to Low",
          Filter: "Filter",

          "Product ID": "Product ID",
          reviews: "reviews",
          "Read more": "Read more",
          "Read less": "Read less",
          "Add to Cart": "Add to Cart",
          "Add to Wishlist": "Add to Wishlist",
          "Customer Reviews": "Customer Reviews",
          "Write Review": "Write Review",
          "Your comment": "Your comment",
          Submit: "Submit",
          About: "About",

          "Shop All Products": "Shop All Products",
          "Elevate your daily rituals with our curated collection of architectural appliances and refined home technology.":
            "Elevate your daily rituals with our curated collection of architectural appliances and refined home technology.",
          All: "All",
          MIN: "MIN",
          MAX: "MAX",
          "Sort Order": "Sort Order",
          Ascending: "Ascending",
          Descending: "Descending",
          "SORT BY:": "SORT BY:",
          Price: "Price",
          Name: "Name",
          Rate: "Rate",
          Shop: "Shop",
          "Welcome Back": "Welcome Back",
          "Access your curated wardrobe and exclusive collections.":
            "Access your curated wardrobe and exclusive collections.",
          "Email Address": "Email Address",
          Password: "Password",
          "Sign In": "Sign In",
          "OR CONTINUE WITH": "OR CONTINUE WITH",
          Google: "Google",
          Apple: "Apple",
          "Forgot Password?": "Forgot Password?",
          "Experience retail engineered for precision.Members get early access to limited archives and personalized styling services.":
            "Experience retail engineered for precision.Members get early access to limited archives and personalized styling services.",
          "Create Account": "Create Account",
          "Learn More": "Learn More",
          "Join our community and start your shopping journey.":
            "Join our community and start your shopping journey.",
          "Full Name": "Full Name",
          Username: "Username",
          Email: "Email",
          "Phone Number": "Phone Number",
          "Already have an account? Sign In":
            "Already have an account? Sign In",
          "Welcome!": "Welcome!",
          "Create your account to explore exclusive collections,personalized recommendations, and a premium shopping experience.":
            "Create your account to explore exclusive collections,personalized recommendations, and a premium shopping experience.",
          "SPRING SUMMER 2026": "SPRING SUMMER 2026",
          "Curated Collections of Timeless Elegance":
            "Curated Collections of Timeless Elegance",
          "Explore our meticulously chosen categories, where high-end craftsmanship meets contemporary design for the discerning lifestyle.":
            "Explore our meticulously chosen categories, where high-end craftsmanship meets contemporary design for the discerning lifestyle.",
          "Browse products in this category":
            "Browse products in this category",
          "Join the Circle": "Join the Circle",
          "Be the first to experience private seasonal drops, designer interviews, and member-only benefits.":
            "Be the first to experience private seasonal drops, designer interviews, and member-only benefits.",
          "Your email address": "Your email address",
          Subscribe: "Subscribe",
          "By joining, you agree to our Privacy Policy and Terms of Service.":
            "By joining, you agree to our Privacy Policy and Terms of Service.",
          "Your Shopping Bag": "Your Shopping Bag",
          "Items ready for delivery": "Items ready for delivery",
          "Clear Cart": "Clear Cart",
          "Order Summary": "Order Summary",
          Subtotal: "Subtotal",
          Shipping: "Shipping",
          Free: "Free",
          "Estimated Taxes": "Estimated Taxes",
          Total: "Total",
          "Secure Checkout": "Secure Checkout",
          "Complimentary luxury shipping & returns included.":
            "Complimentary luxury shipping & returns included.",
          "Matte Black / 5.5L Capacity": "Matte Black / 5.5L Capacity",
          Remove: "Remove",
          "Payment Methods": "Payment Methods",
          "Cash on Delivery": "Cash on Delivery",
          "Credit Card": "Credit Card",
          "Pay Now": "Pay Now",
          "Member since 2026": "Member since 2026",
          "Personal Details": "Personal Details",
          "FULL NAME": "FULL NAME",
          "EMAIL ADDRESS": "EMAIL ADDRESS",
          "PHONE NUMBER": "PHONE NUMBER",
          City: "City",
          "Order History": "Order History",
          "View and track your previous luxury appliance purchases.":
            "View and track your previous luxury appliance purchases.",
          "You have no previous orders.": "You have no previous orders.",
          "Account Settings": "Account Settings",
          "Log Out": "Log Out",

          // home

          "FLAGSHIP RELEASE": "FLAGSHIP RELEASE",
          "The Zenith Horizon": "The Zenith Horizon",
          "Uncompromising acoustic precision encased in aerospace-grade titanium. Experience silence reimagined.":
            "Uncompromising acoustic precision encased in aerospace-grade titanium. Experience silence reimagined.",
          "Shop Now": "Shop Now",
          Ecosystems: "Ecosystems",
          Audio: "Audio",
          Visual: "Visual",
          Mobile: "Mobile",
          Computing: "Computing",
          "VIEW ALL": "VIEW ALL",
          "Curated Excellence": "Curated Excellence",
          "Aura Chronograph": "Aura Chronograph",
          "ADD TO CART": "ADD TO CART",
          "Nova IEMs": "Nova IEMs",
          "Core DAC": "Core DAC",
          "Apex Type-01": "Apex Type-01",
          "Masterpiece Collection": "Masterpiece Collection",
          "Omnis Tower": "Omnis Tower",
          "Room-filling presence meets microscopic detail. The Omnis Tower is an architectural statement that redefines reference audio.":
            "Room-filling presence meets microscopic detail. The Omnis Tower is an architectural statement that redefines reference audio.",
          "FREQUENCY RESPONSE": "FREQUENCY RESPONSE",
          "18Hz - 40kHz (±3dB)": "18Hz - 40kHz (±3dB)",
          "DRIVER MATERIAL": "DRIVER MATERIAL",
          "Beryllium Tweeter, Kevlar Bass": "Beryllium Tweeter, Kevlar Bass",
          "Acquire Now": "Acquire Now",
          "Complimentary Courier": "Complimentary Courier",
          "Insured global delivery.": "Insured global delivery.",
          "5-Year Warranty": "5-Year Warranty",
          "Comprehensive protection plan.": "Comprehensive protection plan.",
          "Secure Transaction": "Secure Transaction",
          "Encrypted payment gateway.": "Encrypted payment gateway.",

          "Join the Inner Circle": "Join the Inner Circle",
          "Gain early access to limited releases and private viewing events.":
            "Gain early access to limited releases and private viewing events.",
          "Precision Engineering. Uncompromising Quality.":
            "Precision Engineering. Uncompromising Quality.",
          "Customer Service": "Customer Service",

          Filters: "Filters",
          "Refine your selection": "Refine your selection",
          "Clear All Filters": "Clear All Filters",
          "All Products": "All Products",
          "Price: High to Low": "Price: High to Low",
          "Price: Low to High": "Price: Low to High",
          "Name:A-Z": "Name:A-Z",
          "No Products Found": "No Products Found",
          "There are no products available at the moment.":
            "There are no products available at the moment.",
          "Crafting the Future of": "Crafting the Future of",
          Technology: "Technology",
          "ENGINEERING PRECISION SINCE 2004.":
            "ENGINEERING PRECISION SINCE 2004.",
          "The Atelier of Sound & Silicon": "The Atelier of Sound & Silicon",
          aboutStory:
            "Born from a relentless pursuit of acoustic and computational perfection, Noir Excellence began in a small Swiss workshop. Our founders, a horologist and an acoustic engineer, sought to merge the timeless precision of mechanical craftsmanship with the bleeding edge of modern technology.",
          aboutDescription2:
            "Every piece we create is not merely assembled; it is orchestrated. From the tactile feedback of a solid brass dial to the imperceptible latency of our wireless protocols, we engineer emotional resonance into every interaction.",
          "Our Core Tenets": "Our Core Tenets",
          Innovation: "Innovation",
          "Pushing boundaries beyond the visible spectrum of technology.":
            "Pushing boundaries beyond the visible spectrum of technology.",
          Quality: "Quality",
          "Uncompromising materials sourced globally, engineered locally.":
            "Uncompromising materials sourced globally, engineered locally.",
          Trust: "Trust",
          "A lifetime guarantee on the mechanical soul of our products.":
            "A lifetime guarantee on the mechanical soul of our products.",
          "Client First": "Client First",
          "White-glove service, ensuring your experience matches our engineering.":
            "White-glove service, ensuring your experience matches our engineering.",
          "YEARS OF EXCELLENCE": "YEARS OF EXCELLENCE",
          "PRODUCTS DELIVERED": "PRODUCTS DELIVERED",
          "SATISFIED CLIENTS": "SATISFIED CLIENTS",
          "COUNTRIES SERVED": "COUNTRIES SERVED",
          "Discover Our Signature Collection":
            "Discover Our Signature Collection",
          "Experience the synthesis of high-fidelity audio and horological precision.":
            "Experience the synthesis of high-fidelity audio and horological precision.",
          "SHOP NOW": "SHOP NOW",
          "Get in Touch": "Get in Touch",
          "Experience unparalleled support. Our dedicated concierge team is ready to assist you with inquiries regarding our precision-engineered collection.":
            "Experience unparalleled support. Our dedicated concierge team is ready to assist you with inquiries regarding our precision-engineered collection.",
          "Send a Message": "Send a Message",
          NAME: "NAME",
          "John Doe": "John Doe",
          SUBJECT: "SUBJECT",
          MESSAGE: "MESSAGE",
          "SEND MESSAGE": "SEND MESSAGE",
          "How can we help you?": "How can we help you?",
          Headquarters: "Headquarters",
          "1200 Aureate Boulevard": "1200 Aureate Boulevard",
          "Suite 500": "Suite 500",
          "San Francisco, CA 94107": "San Francisco, CA 94107",
          "Direct Line": "Direct Line",
          "View FAQ": "View FAQ",
          EMAIL: "EMAIL",
        },
      },
      ar: {
        translation: {
          Home: "الرئيسية",
          Categories: "التصنيفات",
          Products: "المنتجات",
          "The Art of Technical Precision": "فن الدقة التقنية",
          "A meticulously curated selection of world-class designers and timeless pieces engineered for the modern aesthetic":
            "تشكيلة مختارة بعناية من تصاميم نخبة المصممين العالميين وقطع خالدة، صُمِّمت بإتقان لتجسد الجماليات العصرية",
          "Shop the Collection": "تسوّق المجموعة",
          "View Archive": "استعرض الأرشيف",
          "COLLECTION 2026": "مجموعة 2026",
          Logout: "تسجيل الخروج",
          "Curated Essentials": "الأساسيات المختارة بعناية",
          "Refined silhouettes and premium materials, curated for the discerning individual":
            "تصاميم أنيقة بخطوط انسيابية ومواد فاخرة، مختارة بعناية لتناسب أصحاب الذوق الرفيع",
          "View All Products": "عرض جميع المنتجات",
          "Featured Categories": "التصنيفات المميزة",
          "View All  Categories": "عرض جميع الفئات",
          "A Seasonal Shift.": "تحوّل موسمي.",
          "Exclusive early access to our Autumn/Winter pre-collection. Tailored for the transition.":
            "وصول حصري مبكر إلى مجموعتنا التمهيدية لخريف/شتاء. مصمّمة بعناية لتناسب مرحلة الانتقال.",
          "Explore Pre-Collection": "استكشف المجموعة التمهيدية",
          "THE COMMUNITY": "المجتمع",
          "Trusted by the Discerning.": "اختيار موثوق لمن يقدّرون التميز",
          EXPLORE: "استكشف",
          "The Archive Series": "مجموعة الأرشيف",
          "Elevated Basics": "القطع الأساسية الفاخرة",
          "Object & Form": "الشكل والمادة",
          "Join the Collective.": "انضم إلى المجتمع",
          "Subscribe to receive early access to new arrivals, private sales, and curated lifestyle editorials.":
            "اشترك للحصول على وصول مبكر إلى المنتجات الجديدة، والعروض الخاصة، والمقالات المختارة بعناية حول أسلوب الحياة.",
          "By subscribing, you agree to our Privacy Policy and Terms of Service.":
            "بالاشتراك، فإنك توافق على سياسة الخصوصية وشروط الخدمة الخاصة بنا.",
          "Elevating the everyday through curated luxury and architectural design.":
            "نرتقي بتفاصيل الحياة اليومية عبر فخامةٍ منتقاة بعناية وتصميمٍ معماري راقٍ.",
          "Track Order": "تتبع الطلب",
          "Shipping & Returns": "الشحن والإرجاع",
          "Size Guide": "دليل المقاسات",
          Contact: "اتصل بنا",
          "CLIENT SERVICE": "خدمة العملاء",
          "ABOUT KASHOP": "عن KASHOP",
          "Our Story": "قصتنا",
          Sustainability: "الاستدامة",
          "Retail Locations": "مواقع البيع بالتجزئة",
          Careers: "الوظائف",
          LEGAL: "قانوني",
          "Privacy Policy": "سياسة الخصوصية",
          "Terms of Service": "شروط الخدمة",
          "Cookie Settings": "إعدادات ملفات تعريف الارتباط",
          "© 2026 KaShop Luxury Retail. All rights reserved.":
            "© 2026 KaShop لتجارة التجزئة الفاخرة. جميع الحقوق محفوظة.",
          "THE EXCLUSIVE 2026 COLLECTION": "المجموعة الحصرية لعام 2026",
          "Discover the perfect balance between architectural innovation and minimalist aesthetics. Premium appliances designed to elevate every moment in your home.":
            "اكتشف التوازن المثالي بين الابتكار المعماري والجماليات البسيطة. أجهزة منزلية فاخرة صُممت لترتقي بكل لحظة في منزلك.",
          "Explore Now": "استكشف الآن",
          "Premium Collection": "المجموعة الفاخرة",
          "Watch Video": "شاهد الفيديو",
          "All Appliances": "جميع الأجهزة",
          items: "العناصر",
          "Sort by: Price Low to High":
            "الترتيب حسب: السعر من الأقل إلى الأعلى",
          "Sort by: Price High to Low":
            "الترتيب حسب: السعر من الأعلى إلى الأقل",
          Filter: "تصفية",
          "Precision technology meets modern luxury design for every morning.":
            "تلتقي التكنولوجيا الدقيقة مع التصميم الفاخر العصري في كل صباح.",
          "DESIGN PHILOSOPHY": "فلسفة التصميم",
          "Innovation Beyond": "الابتكار يتجاوز",
          "the Familiar": "المألوف",
          " We don't just sell tools; we offer artistic pieces that elevate the quality of your daily experience in the heart of your home.":
            "نحن لا نبيع الأدوات فقط؛ بل نقدم قطعًا فنية ترتقي بجودة تجربتك اليومية في قلب منزلك.",
          "Explore Full Collection": "استكشف المجموعة الكاملة",
          "Product added to cart": "تمت إضافة المنتج إلى السلة",
          "Product ID": "معرف المنتج",
          reviews: "المراجعات",
          "Read more": "اقرأ المزيد",
          "Read less": "اقرأ أقل",
          "Add to Cart": "أضف إلى السلة",
          "Add to Wishlist": "أضف إلى قائمة الرغبات",
          "Customer Reviews": "مراجعات العملاء",
          "Write Review": "اكتب مراجعة",
          "Your comment": "تعليقك",
          Submit: "إرسال",
          About: "من نحن",
          "OUR HERITAGE": "تراثنا",
          "Redefining the Modern Home": "إعادة تعريف المنزل العصري",
          descriptionabout:
            "تأسست على مبدأ أن الأشياء اليومية يجب أن تكون عملية ومتجاوزة في الوقت نفسه، بدأت KaShop كورشة صغيرة مكرسة للسعي نحو الكمال. اليوم، نحن الرائدون في مجال الأجهزة الفاخرة التي تندمج بسلاسة في أرقى الديكورات الداخلية في العالم. كل منحنى، وكل استجابة لمسية، وكل آلية صامتة هي نتيجة لآلاف الساعات من التحسين. نحن لا نصنع الأجهزة فقط؛ بل ننسق البيئات.",
          "The Art of Living Well": "فن العيش بشكل جيد",
          "Where precision engineering meets timeless design. We craft the tools for a life lived with intentionality.":
            "حيث يلتقي الهندسة الدقيقة بالتصميم الخالد. نحن نصنع الأدوات لحياة عاشت بنية.",
          "Our Mission": "مهمتنا",
          "To elevate the human experience by infusing daily rituals with beauty, silence, and unparalleled performance.":
            "لرفع تجربة الإنسان من خلال دمج الطقوس اليومية بالجمال، الصمت، والأداء الذي لا مثيل له.",
          MASTERY: "الإتقان",
          "Obsessive Craftsmanship": "الحرفية المهووسة",
          "Every component is measured to the micron, ensuring a flawless fit and finish that lasts generations.We design for the ears as much as the eyes, utilizing advanced acoustic dampening for near-silent operation.":
            "يتم قياس كل مكون إلى الميكرون، مما يضمن ملاءمة وتشطيبًا لا تشوبه شائبة يدوم لأجيال. نحن نصمم للأذنين بقدر ما نصمم للعيون، باستخدام تقنيات متقدمة لتخفيف الصوت لضمان تشغيل شبه صامت.",
          "Circular Life": "الحياة الدائرية",
          "Our products are 98% recyclable and designed to be repaired, not replaced.":
            "منتجاتنا قابلة لإعادة التدوير بنسبة 98٪ ومصممة لتكون قابلة للإصلاح، وليس للاستبدال.",
          "Efficiency Max": "الكفاءة القصوى",
          "A-rated energy consumption across our entire catalog without compromising performance.":
            "استهلاك الطاقة بدرجة A عبر مجموعتنا بأكملها دون التأثير على الأداء.",
          "Carbon Neutral": "محايد للكربون",
          "Our logistics and manufacturing centers operate on 100% renewable energy.":
            "تعمل مراكزنا اللوجستية والتصنيعية على طاقة متجددة بنسبة 100٪.",
          "Sustainability by Design": "الاستدامة من خلال التصميم",
          "True luxury is responsible. Our commitment to the planet is woven into the very fabric of our manufacturing processes.":
            "الفخامة الحقيقية مسؤولة. التزامنا بالكوكب منسوج في نسيج عمليات التصنيع لدينا.",
          "Experience Excellence": "تجربة التميز",
          "EXPLORE COLLECTIONS": "استكشاف المجموعات",
          "VISIT A SHOWROOM": "زيارة صالة العرض",
          "Shop All Products": "تسوق جميع المنتجات",
          "Elevate your daily rituals with our curated collection of architectural appliances and refined home technology.":
            "ارتقِ بطقوسك اليومية مع تشكيلتنا المختارة بعناية من الأجهزة ذات التصاميم المعمارية المبتكرة وتقنيات المنزل المتطورة.",
          All: "الكل",
          MIN: "الحد الأدنى",
          MAX: "الحد الأقصى",
          "Sort Order": "ترتيب الفرز",
          Ascending: "تصاعدي",
          Descending: "تنازلي",
          "SORT BY:": "الفرز حسب:",
          Price: "السعر",
          Name: "الاسم",
          Rate: "التقييم",
          Shop: "المتجر",
          "Welcome Back": "مرحبًا بعودتك",
          "Access your curated wardrobe and exclusive collections.":
            "استمتع بالوصول إلى خزانتك المختارة بعناية والمجموعات الحصرية.",
          "Email Address": "البريد الإلكتروني",
          Password: "كلمة المرور",
          "Sign In": "تسجيل الدخول",
          "OR CONTINUE WITH": "أو المتابعة باستخدام",
          Google: "جوجل",
          Apple: "آبل",
          "Forgot Password?": "هل نسيت كلمة المرور؟",
          "Experience retail engineered for precision.Members get early access to limited archives and personalized styling services.":
            "اختبر تجربة تسوق مصممة بأعلى درجات الدقة. يحصل الأعضاء على وصول مبكر إلى المجموعات المحدودة وخدمات تنسيق الأزياء الشخصية.",
          "Create Account": "إنشاء حساب",
          "Learn More": "اعرف المزيد",
          "Join our community and start your shopping journey.":
            "انضم إلى مجتمعنا وابدأ رحلة التسوق الخاصة بك.",
          "Full Name": "الاسم الكامل",
          Username: "اسم المستخدم",
          Email: "البريد الإلكتروني",
          "Phone Number": "رقم الهاتف",
          "Already have an account? Sign In": "هل لديك حساب بالفعل؟ سجل الدخول",
          "Welcome!": "مرحبًا!",
          "Create your account to explore exclusive collections,personalized recommendations, and a premium shopping experience.":
            "أنشئ حسابك لاستكشاف المجموعات الحصرية، والحصول على توصيات مخصصة، والاستمتاع بتجربة تسوق مميزة.",
          "SPRING SUMMER 2026": "ربيع / صيف 2026",
          "Curated Collections of Timeless Elegance":
            "مجموعات مختارة بعناية تجمع بين الأناقة الخالدة",
          "Explore our meticulously chosen categories, where high-end craftsmanship meets contemporary design for the discerning lifestyle.":
            "استكشف فئاتنا المختارة بعناية، حيث تلتقي الحرفية الراقية بالتصميم العصري لتناسب أصحاب الذوق الرفيع.",
          "Browse products in this category": "تصفح منتجات هذه الفئة",
          "Join the Circle": "انضم إلى الدائرة",
          "Be the first to experience private seasonal drops, designer interviews, and member-only benefits.":
            "كن أول من يطّلع على الإصدارات الموسمية الحصرية، ومقابلات المصممين، والمزايا المخصصة للأعضاء.",
          "Your email address": "عنوان بريدك الإلكتروني",
          Subscribe: "اشترك",
          "By joining, you agree to our Privacy Policy and Terms of Service.":
            "بانضمامك، فإنك توافق على سياسة الخصوصية وشروط الخدمة.",
          "Your Shopping Bag": "سلة التسوق",
          "Items ready for delivery": "العناصر الجاهزة للتوصيل",
          "Clear Cart": "إفراغ السلة",
          "Order Summary": "ملخص الطلب",
          Subtotal: "المجموع الفرعي",
          Shipping: "الشحن",
          Free: "مجاني",
          "Estimated Taxes": "الضرائب التقديرية",
          Total: "الإجمالي",
          "Secure Checkout": "إتمام الشراء الآمن",
          "Complimentary luxury shipping & returns included.":
            "يشمل شحنًا فاخرًا مجانيًا وإرجاعًا مجانيًا.",
          "Matte Black / 5.5L Capacity": "أسود مطفي / سعة 5.5 لتر",
          Remove: "إزالة",
          "Payment Methods": "طرق الدفع",
          "Cash on Delivery": "الدفع عند الاستلام",
          "Credit Card": "بطاقة ائتمانية",
          "Pay Now": "ادفع الآن",
          "Member since 2026": "عضو منذ عام 2026",
          "Personal Details": "البيانات الشخصية",
          "FULL NAME": "الاسم الكامل",
          "EMAIL ADDRESS": "عنوان البريد الإلكتروني",
          "PHONE NUMBER": "رقم الهاتف",
          City: "المدينة",
          "Order History": "سجل الطلبات",
          "View and track your previous luxury appliance purchases.":
            "اعرض وتتبع مشترياتك السابقة من الأجهزة الفاخرة.",
          "You have no previous orders.": "ليس لديك أي طلبات سابقة.",
          "Account Settings": "إعدادات الحساب",
          "Log Out": "تسجيل الخروج",
          // home

          "FLAGSHIP RELEASE": "الإصدار الرائد",
          "The Zenith Horizon": "زينيث هورايزن",
          "Uncompromising acoustic precision encased in aerospace-grade titanium. Experience silence reimagined.":
            "دقة صوتية لا مثيل لها، مغلّفة بالتيتانيوم المستخدم في صناعة الطيران. اختبر مفهومًا جديدًا للصمت.",
          "Shop Now": "تسوّق الآن",
          Ecosystems: "المنظومات",

          Audio: "الصوتيات",

          Visual: "المرئيات",

          Mobile: "الهواتف والأجهزة المحمولة",

          Computing: "الحوسبة",

          "VIEW ALL": "عرض الكل",

          "Curated Excellence": "روائع مختارة",

          "Aura Chronograph": "أورا كرونوغراف",

          "ADD TO CART": "أضف إلى السلة",

          "Nova IEMs": "نوفا IEMs",

          "Core DAC": "كور DAC",

          "Apex Type-01": "أبيكس Type-01",

          "Masterpiece Collection": "مجموعة التحف الفنية",

          "Omnis Tower": "برج أومنيس",

          "Room-filling presence meets microscopic detail. The Omnis Tower is an architectural statement that redefines reference audio.":
            "حضور صوتي يملأ المكان يلتقي مع أدق التفاصيل. برج أومنيس هو تحفة معمارية تعيد تعريف مفهوم الصوت المرجعي.",

          "FREQUENCY RESPONSE": "استجابة التردد",

          "18Hz - 40kHz (±3dB)": "18 هرتز - 40 كيلوهرتز (±3 ديسيبل)",

          "DRIVER MATERIAL": "مادة المحركات الصوتية",

          "Beryllium Tweeter, Kevlar Bass":
            "مكبر ترددات عالية من البيريليوم، ومكبر جهير من الكيفلار",

          "Acquire Now": "اقتنه الآن",

          "Complimentary Courier": "توصيل مجاني",

          "Insured global delivery.": "توصيل عالمي مؤمّن.",

          "5-Year Warranty": "ضمان لمدة 5 سنوات",

          "Comprehensive protection plan.": "خطة حماية شاملة.",

          "Secure Transaction": "معاملة آمنة",

          "Encrypted payment gateway.": "بوابة دفع مشفّرة.",
          "Join the Inner Circle": "انضم إلى الدائرة الخاصة",

          "Gain early access to limited releases and private viewing events.":
            "احصل على وصول مبكر إلى الإصدارات المحدودة وفعاليات العرض الخاصة.",
          "Precision Engineering. Uncompromising Quality.":
            "هندسة دقيقة. جودة لا تقبل المساومة.",

          "Customer Service": "خدمة العملاء",

          Filters: "الفلاتر",
          "Refine your selection": "تخصيص اختياراتك",
          "Clear All Filters": "مسح جميع الفلاتر",
          "All Products": "جميع المنتجات",
          "Price: High to Low": "السعر: من الأعلى إلى الأقل",
          "Price: Low to High": "السعر: من الأقل إلى الأعلى",
          "Name:A-Z": "الاسم: من A إلى Z",
          "No Products Found": "لم يتم العثور على منتجات",
          "There are no products available at the moment.":
            "لا توجد منتجات متاحة في الوقت الحالي.",
          "Crafting the Future of": "نصنع مستقبل",
          Technology: "التكنولوجيا",
          "ENGINEERING PRECISION SINCE 2004.": "هندسة دقيقة منذ عام 2004.",
          "The Atelier of Sound & Silicon": "مشغل الصوت والسيليكون",
          aboutStory:
            "وُلدت Noir Excellence من سعيٍ لا هوادة فيه نحو الكمال الصوتي والحوسبي، وبدأت رحلتها في ورشة صغيرة في سويسرا. سعى مؤسسانا، صانع ساعات ومهندس صوتيات، إلى الجمع بين الدقة الخالدة للحرفية الميكانيكية وأحدث ما توصلت إليه التكنولوجيا الحديثة.",
          aboutDescription2:
            "كل قطعة نصنعها لا يتم تجميعها فحسب؛ بل يتم تنسيقها بإتقان. بدءًا من الإحساس الملموس لقرص نحاسي صلب، وصولًا إلى زمن الاستجابة غير الملحوظ لبروتوكولات الاتصال اللاسلكي لدينا، نحن نصمم صدىً عاطفيًا في كل تفاعل.",
          "Our Core Tenets": "مبادئنا الأساسية",
          Innovation: "الابتكار",
          "Pushing boundaries beyond the visible spectrum of technology.":
            "تجاوز الحدود إلى ما هو أبعد من الطيف المرئي للتكنولوجيا.",
          Quality: "الجودة",
          "Uncompromising materials sourced globally, engineered locally.":
            "مواد لا تقبل المساومة، يتم اختيارها عالميًا وهندستها محليًا.",
          Trust: "الثقة",
          "A lifetime guarantee on the mechanical soul of our products.":
            "ضمان مدى الحياة على الجوهر الميكانيكي لمنتجاتنا.",
          "Client First": "العميل أولًا",
          "White-glove service, ensuring your experience matches our engineering.":
            "خدمة استثنائية تضمن أن تجربتك تضاهي مستوى هندستنا.",
          "YEARS OF EXCELLENCE": "سنوات من التميز",
          "PRODUCTS DELIVERED": "المنتجات التي تم تسليمها",
          "SATISFIED CLIENTS": "العملاء الراضون",
          "COUNTRIES SERVED": "الدول التي نخدمها",
          "Discover Our Signature Collection": "اكتشف مجموعتنا المميزة",
          "Experience the synthesis of high-fidelity audio and horological precision.":
            "اختبر مزيجًا متكاملًا من الصوت عالي الدقة ودقة صناعة الساعات.",
          "SHOP NOW": "تسوق الآن",
          "Get in Touch": "تواصل معنا",
          "Experience unparalleled support. Our dedicated concierge team is ready to assist you with inquiries regarding our precision-engineered collection.":
            "استمتع بدعم لا مثيل له. فريق خدمة العملاء المتخصص لدينا مستعد لمساعدتك والإجابة عن استفساراتك حول مجموعتنا المصممة بدقة هندسية.",
          "Send a Message": "إرسال رسالة",
          NAME: "الاسم",
          "John Doe": "الاسم الكامل",
          SUBJECT: "الموضوع",
          MESSAGE: "الرسالة",
          "SEND MESSAGE": "إرسال الرسالة",
          "How can we help you?": "كيف يمكننا مساعدتك؟",
          Headquarters: "المقر الرئيسي",
          "1200 Aureate Boulevard": "1200 شارع Aureate",
          "Suite 500": "الجناح 500",
          "San Francisco, CA 94107": "سان فرانسيسكو، كاليفورنيا 94107",
          "Direct Line": "الخط المباشر",
          "View FAQ": "عرض الأسئلة الشائعة",
          EMAIL: "البريد الالكتروني",
        },
      },
    },
    lng: i18n.language, // if you're using a language detector, do not define the lng option
  });

export default i18n;
