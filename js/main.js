document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menuClose = document.querySelector('.header-menu-close');
  const menuList = document.querySelector('.header-menu-list');

  menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu-list-open');
  });

  if (menuClose) {
    menuClose.addEventListener('click', () => {
      menuList.classList.remove('menu-list-open');
    });
  }
});
