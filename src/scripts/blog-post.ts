import { BlogPostLength } from './components/blog-post-length.js';
import { BlogPostProgressBar } from './components/blog-post-progress-bar.js';
import { BlogPostTimestamp } from './components/blog-post-timestamp.js';

function renderHeadingLinks(): void {
	const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
	// eslint-disable-next-line
	console.log(headings);

	for (const heading of headings) {
		const link = document.createElement('a');
		link.href = `#${heading.id}`;
		link.className = 'heading-permalink';
		link.setAttribute('aria-label', 'Permalink');

		const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svg.setAttribute('viewBox', '0 0 457.03 457.03');

		const useEl = document.createElementNS('http://www.w3.org/2000/svg', 'use');
		useEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#icon--link');
		useEl.setAttribute('href', '#icon--link');


		svg.appendChild(useEl);
		link.appendChild(svg);
		heading.appendChild(link);
	}
}

customElements.define('blog-post-timestamp', BlogPostTimestamp, {
	extends: 'time'
});
customElements.define('blog-post-progress-bar', BlogPostProgressBar, {
	extends: 'progress'
});
customElements.define('blog-post-length', BlogPostLength);

renderHeadingLinks();
