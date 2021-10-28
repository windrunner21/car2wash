import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          navbar: {
            business: "Business",
            pricing: "Pricing",
            beta: "Free Beta Access 🍾",
            features: "Features",
            download: "Download",
            language: "Language",
            logIn: "Log in",
            signUp: "Sign up",
            soon: "Coming Soon 🔜",
          },
          footer: {
            copyright: "Copyright © 2021 Dummy Tech LLC.",
          },
          hero: {
            caption: "β Testing free trial",
            title: "Life Should",
            title2: "Be Easy.",
            subtitle:
              "book a place at any car wash using a mobile device and save time.",
            button: "I'm interested",
          },
          feature: {
            title: "How it works",
            subtitle:
              "We value your time and comfort highly and believe in simplicity of routines",
            booking: "Booking",
            bookingText:
              "Choose a car wash, comfortable time, date and you are good to go!",
            tracking: "Tracking",
            trackingText:
              "Get updated on any booking changes or updates immediately.",
            washing: "Washing",
            washingText:
              "Drive to the booked place and time, have your car washed instantly.",
          },
          cta: {
            title1: "Download",
            subtitle1:
              "Download Car 2 Wash mobile app for iOS and Android. It helps you washing your car smartly and removes unnecessary routine.",
            title2: "Connecting you to all car washes",
            subtitle2:
              "Explore new places to wash a car remotely. Filter by rating. Book a slot. Everything from your smartphone.",
            button2: "Get Started",
          },
          newsletter: {
            title: "Request β Access",
            subtitle: "online reservation system for car washes",
            prompt: "Enter your email",
            error: "Enter valid email address.",
            button: "Get Invitation",
          },
        },
      },
      az: {
        translation: {
          navbar: {
            business: "Biznes",
            pricing: "Qiymətlər",
            beta: "Pulsuz Beta Versiya 🍾",
            features: "Xüsusiyyətlər",
            download: "Download",
            language: "Yüklə",
            logIn: "Daxil ol",
            signUp: "Qeydiyyat",
            soon: "Tezliklə 🔜",
          },
          footer: {
            copyright: "Müəllif Hüququ © 2021 Dummy Tech MMC.",
          },
          hero: {
            caption: "β Test pulsuz sınaq",
            title: "Həyatınız",
            title2: "Asanlaşdı.",
            subtitle:
              "mobil cihazdan istifadə edərək istənilən avtomobil yuma məntəqəsində yer bron edin və vaxtınıza qənaət edin.",
            button: "Xoşuma gəldi",
          },
          feature: {
            title: "Bu necə işləyir",
            subtitle:
              "Biz sizin vaxtınızı və rahatlığını yüksək qiymətləndiririk və gündəlik işlərin sadəliyinə inanırıq",
            booking: "Rezervasyon",
            bookingText:
              "Avtoyumanı, rahat vaxtınızı, tarixi seçin və getməyə hazırsınız!",
            tracking: "İzləmə",
            trackingText:
              "Rezervasiya dəyişikliyi və ya yeniləmələri barədə dərhal xəbərdar olun.",
            washing: "Yuma",
            washingText:
              "Sifariş etdiyiniz yerə vaxtınızda sürün, avtomobilinizi dərhal yuyun.",
          },
          cta: {
            title1: "Yüklə",
            subtitle1:
              "iOS və Android üçün Car 2 Wash mobil proqramını yükləyin. Bu, avtomobilinizi ağıllı şəkildə yumağa kömək edir və lazımsız rutinləri aradan qaldırır.",
            title2: "Sizi bütün avtoyuma məntəqələrinə bağlayır",
            subtitle2:
              "Avtomobili yumaq üçün yeni yerləri araşdırın. Reytinq üzrə süzün. Slot sifariş edin. Hər şey smartfonunuzdan.",
            button2: "Başlamaq",
          },
          newsletter: {
            title: "β Girişi Tələb Edin",
            subtitle: "avtomobil yuma üçün onlayn rezervasiya sistemi",
            prompt: "E-poçtunuzu daxil edin",
            error: "Etibarlı e-poçt ünvanını daxil edin.",
            button: "Dəvətinizi alın",
          },
        },
      },
      ru: {
        translation: {
          navbar: {
            business: "Бизнес",
            pricing: "Цены",
            beta: "Бесплатная Бета Версия 🍾",
            features: "Особенности",
            download: "Скачать",
            language: "Язык",
            logIn: "Вход",
            signUp: "Регистрация",
            soon: "Скоро 🔜",
          },
          footer: {
            copyright: "Авторское Право © 2021 Dummy Tech ООО.",
          },
          hero: {
            caption: "Бесплатный период β Тестирования",
            title: "Жизнь Должна",
            title2: "Быть Проще.",
            subtitle:
              "Забронируйте место на любой автомойке с помощью мобильного устройства и сэкономьте время.",
            button: "Я заинтерисован(а)",
          },
          feature: {
            title: "Как это работает",
            subtitle:
              "Мы высоко ценим ваше время и комфорт и верим в простоту распорядка дня",
            booking: "Бронирование",
            bookingText: "Выберите автомойку, удобное время, дату и вы готовы!",
            tracking: "Отслеживание",
            trackingText:
              "Немедленно узнавайте о любых изменениях или обновлениях в бронировании.",
            washing: "Мытье",
            washingText:
              "Езжайте в забронированное место и время, и мгновенно помойте машину.",
          },
          cta: {
            title1: "Скачать",
            subtitle1:
              "Скачайте мобильное приложение Car 2 Wash для iOS и Android. Это поможет вам избавиться от лишних рутинных действий.",
            title2: "Соединяем вас со всеми автомойками",
            subtitle2:
              "Исследуйте новые места, где можно помыть машину. Фильтруйте по рейтингу. Забронируйте время. Все с вашего смартфона.",
            button2: "Приступить",
          },
          newsletter: {
            title: "Запросить β доступ",
            subtitle: "система онлайн бронирования автомоек",
            prompt: "Введите адрес электронной почты",
            error: "Введите действующий адрес электронной почты.",
            button: "Получить приглашение",
          },
        },
      },
    },
  });

export default i18n;
