import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // Отключаем экранирование
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Убедитесь, что путь правильный
    },
    initAsync: true, // Убедитесь, что инициализация асинхронная
  });

export default i18n;
