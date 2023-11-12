var isTrue = false;
function changeTheme() {
  if (isTrue === false) {
    isTrue = true;
    document.querySelector('.toggler').classList.remove('fa-toggle-off');
    document.querySelector('.toggler').classList.add('fa-toggle-on');
    document.querySelector('.body').classList.add('dark-theme');
    document.querySelector('.sidebar').classList.add('darker-side');
    document.querySelectorAll('.icon').forEach(el => el.classList.add('icon-white'));
    document.querySelectorAll('.coder').forEach(el => el.classList.add('pre'));
    document.querySelectorAll('.menu-item').forEach(el => el.classList.add('menus-item'));
  } else {
    isTrue = false;
    document.querySelector('.toggler').classList.remove('fa-toggle-on');
    document.querySelector('.toggler').classList.add('fa-toggle-off');
    document.querySelector('.body').classList.remove('dark-theme');
    document.querySelector('.sidebar').classList.remove('darker-side');
    document.querySelectorAll('.icon').forEach(el => el.classList.remove('icon-white'));
    document.querySelectorAll('.coder').forEach(el => el.classList.remove('pre'));
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('menus-item'));
  }
}
var isOpen = false;
function openSearch() {
  if (isOpen === false) {
    // close icon and open input bar
    isOpen = true;
    document.querySelector('.search-container-responsive').classList.remove('no-display');
  } else {
    // close input bar and open icon
    isOpen = false;
    document.querySelector('.search-container-responsive').classList.add('no-display');
  }
}

function openMenu() {
  // opens the menu 
  document.querySelector('.sidebar').classList.remove('no-display');
}

function closeMenu() {
  // close the menu
  document.querySelector('.sidebar').classList.add('no-display');
}