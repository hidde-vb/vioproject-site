// header utility scripts

var headerIcon = document.getElementById('header-icon'),
    hamburger  = document.getElementById('hamburger'),
    headerNav  = document.getElementById('navigation'),
    active = false;

// Show icon on Scroll
var showOnScroll = function() {
    var y = window.scrollY;
    if (y >= 50) {
        headerIcon.className = 'header-icon';
    } else {
        headerIcon.className = 'header-icon hide';
    }
};
window.addEventListener('scroll', showOnScroll);

hamburger.onclick =  function() {
    active = !active;
    if(active)  {
        hamburger.className = 'hamburger active';
        headerNav.className = 'vertical';
    } else {
        hamburger.className = 'hamburger';
        headerNav.className = '';
    }
};
