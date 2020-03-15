"use strict";
const navLinks = document.querySelectorAll('.page-header__nav a');
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page');
    }
});
//# sourceMappingURL=main.js.map