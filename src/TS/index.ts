import "../scss/index.scss";


const home = document.querySelector('.home') as HTMLDivElement;
const navigation = document.querySelector('.overlay-navigation') as HTMLDivElement;
const openOverlay = document.querySelector('.open-overlay') as HTMLDivElement;

home?.addEventListener('click', () => {
  if (navigation) {
    navigation.style.display = navigation.style.display === 'block' ? 'none' : 'block';
  }
  openOverlay?.classList.toggle('open');
});
