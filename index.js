var isTrue = false;
function changeTheme() {
  if (isTrue === false) {
    isTrue = true;
    document.querySelector('.toggler').classList.remove('fa-toggle-off');
    document.querySelector('.toggler').classList.add('fa-toggle-on')
    document.querySelector('.body').classList.add('dark-theme');
    document.querySelectorAll('.icon').forEach(el => el.classList.add('icon-white'));
    document.querySelectorAll('.coder').forEach(el => el.classList.add('pre'));
    document.querySelectorAll('.menu-item').forEach(el => el.classList.add('menus-item'));
  } else {
    isTrue = false;
    document.querySelector('.toggler').classList.remove('fa-toggle-on');
    document.querySelector('.toggler').classList.add('fa-toggle-off');
    document.querySelector('.body').classList.remove('dark-theme');
    document.querySelectorAll('.icon').forEach(el => el.classList.remove('icon-white'));
    document.querySelectorAll('.coder').forEach(el => el.classList.remove('pre'));
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('menus-item'));
  }
}