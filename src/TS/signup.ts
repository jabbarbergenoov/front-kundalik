import i18n from './i18';
import "../scss/signup.scss";

const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng); 
    await i18n.loadNamespaces('translation');  // Загружаем пространство имен
    updateContent();  // Обновляем контент после загрузки переводов
  };

const updateContent = () => {
  const welcomeElement = document.getElementById('welcome') as HTMLDivElement;
  const welcomeMessageElement = document.getElementById('welcomeMessage') as HTMLDivElement;

  if (welcomeElement) {
    welcomeElement.textContent = i18n.t('welcome');  // Используем ключ 'welcome'
  }

  if (welcomeMessageElement) {
    welcomeMessageElement.textContent = i18n.t('welcomeMessage');  // Используем ключ 'welcomeMessage'
  }
};

// Добавление обработчиков событий для кнопок
(document.getElementById('btn-en') as HTMLDivElement)?.addEventListener('click', () => changeLanguage('en'));
(document.getElementById('btn-kz') as HTMLDivElement)?.addEventListener('click', () => changeLanguage('kz'));

// Обновление контента при загрузке страницы
updateContent();
