const switchContainer = document.querySelector('.switch-container');
const switchContainerBtn = document.querySelector('.switch-container--box');
const pricePro = document.querySelector('.price-pro');
const priceTeam = document.querySelector('.price-team');
const priceText = document.querySelectorAll('.price-text');

switchContainer.addEventListener('click', () => {
  switchContainerBtn.classList.toggle('switch-container--box--move');
  if (switchContainerBtn.classList.contains('switch-container--box--move')) {
    pricePro.textContent = '99';
    priceTeam.textContent = '199';
   
  } else {
    pricePro.textContent = '10';
    priceTeam.textContent = '30';
   
  }
  priceTextChange();
});

function priceTextChange() {
  priceText.forEach(price => {
    if (switchContainerBtn.classList.contains('switch-container--box--move')) {
      price.textContent = '/Anual';
    } else {
      price.textContent = '/Mensual';
    }
  });
}