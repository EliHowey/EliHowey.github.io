export class BlogPostLength extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const timeToRead = this.getEstimatedTimeToRead();
		if (timeToRead && !isNaN(timeToRead)) {
			this.textContent = `${timeToRead < 1 ? "<1" : timeToRead} minute read`;
		}
	}

	private getEstimatedTimeToRead() {
		const articleElement = document.getElementsByTagName("article")[0];
		if (articleElement?.textContent) {
			const WORDS_PER_MINUTE = 200;
			const numWordsInArticle = articleElement.textContent.split(" ").length;
			return Math.round(numWordsInArticle / WORDS_PER_MINUTE);
		}
	}
}