export class BlogPostLength extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const timeToRead = this._getEstimatedTimeToRead();
        if (timeToRead && !isNaN(timeToRead)) {
            this.textContent = `${timeToRead < 1 ? "<1" : timeToRead} minute read`;
        }
    }
    _getEstimatedTimeToRead() {
        var _a;
        const articleElement = document.getElementsByTagName("article")[0];
        if ((_a = articleElement) === null || _a === void 0 ? void 0 : _a.textContent) {
            const WORDS_PER_MINUTE = 200;
            const numWordsInArticle = articleElement.textContent.split(" ").length;
            return Math.round(numWordsInArticle / WORDS_PER_MINUTE);
        }
    }
}
//# sourceMappingURL=blog-post-length.js.map