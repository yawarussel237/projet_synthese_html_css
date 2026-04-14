const moreCards = document.getElementById('speaker_more_cards');
const moreBtn = document.getElementById('more_btn');
moreBtn.addEventListener('click', () => {
    moreCards.classList.toggle('active');
    moreBtn.innerHTML = 'SEE LESS';
});
const mobileMenu = document.getElementById('mobile_menu');
const bottomNav = document.getElementById('bottom_nav');
mobileMenu.addEventListener('click', () => {
    bottomNav.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});