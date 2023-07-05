document.querySelector('.navigation__burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__top-navigation').classList.toggle('open');

})