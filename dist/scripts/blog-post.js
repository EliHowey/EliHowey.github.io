import { BlogPostLength } from './components/blog-post-length.js';
import { BlogPostTimestamp } from './components/blog-post-timestamp.js';
function renderHeadingLinks() {
    const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
    for (const heading of headings) {
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.classList.add('icon-link', 'heading-permalink');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 457.03 457.03');
        svg.setAttribute('aria-hidden', 'true');
        const useEl = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        useEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '/src/assets/icons.svg#link');
        useEl.setAttribute('href', '/src/assets/icons.svg#link');
        const linkLabel = document.createElement('span');
        linkLabel.className = 'visually-hidden';
        linkLabel.textContent = 'Permalink to this heading';
        svg.appendChild(useEl);
        link.appendChild(svg);
        link.appendChild(linkLabel);
        heading.appendChild(link);
    }
}
function addCodeLanguages() {
    const codeElements = [...document.querySelectorAll('[class*="language"]')];
    for (const el of codeElements) {
        for (const className of el.classList) {
            if (className.startsWith('language-')) {
                const language = className.split('language-')[1];
                el.dataset.language = language;
            }
        }
    }
}
customElements.define('blog-post-timestamp', BlogPostTimestamp, {
    extends: 'time'
});
customElements.define('blog-post-length', BlogPostLength);
renderHeadingLinks();
addCodeLanguages();
//# sourceMappingURL=blog-post.js.map