const navLinks = document.querySelectorAll<HTMLAnchorElement>(
	'.page-header__nav a'
);
navLinks.forEach(link => {
	if (link.href === window.location.href) {
		link.setAttribute('aria-current', 'page');
	}
});
