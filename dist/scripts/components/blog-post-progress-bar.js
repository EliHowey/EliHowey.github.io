export class BlogPostProgressBar extends HTMLProgressElement {
    constructor() {
        super();
        document.addEventListener('scroll', () => {
            this.updateProgress();
        });
    }
    connectedCallback() {
        this.updateMaxValue();
        this.updateProgress();
    }
    updateMaxValue() {
        const docEl = document.documentElement;
        const scrollablePostHeight = docEl.scrollHeight - docEl.clientHeight;
        this.setAttribute('max', scrollablePostHeight.toString());
    }
    updateProgress() {
        const scrollPosition = document.documentElement.scrollTop ||
            document.body.scrollTop ||
            window.scrollY;
        this.setAttribute('value', scrollPosition.toString());
    }
}
//# sourceMappingURL=blog-post-progress-bar.js.map