/**
 * blog-post-length.mjs
 * Blog post length estimation
 * Written by Eli Howey
 * Copyright 2019
 */

export class BlogPostLengthMessage {
	constructor(articleElement) {
		this.element = document.createElement("span");
		this.element.id = "blog-post-length-estimate";
		this.element.classList.add("label");

		const timeToRead = this.getEstimatedTimeToRead(articleElement);
		if (timeToRead && !Number.isNaN(timeToRead)) {
			this.element.innerText = `${
				timeToRead < 1 ? "<1" : timeToRead
			} minute read`;
		}
	}

	getEstimatedTimeToRead(articleElement) {
		const WORDS_PER_MINUTE = 200; // Average adult reading speed
		const numWords = articleElement.innerText.split(" ").length;
		return Math.round(numWords / WORDS_PER_MINUTE);
	}
}