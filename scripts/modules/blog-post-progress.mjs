/**
 * blog-post-progress.mjs
 * Blog post progress bar generation
 * Written by Eli Howey
 * Copyright 2019
 */

export class BlogPostProgressBar {	
	constructor(id) {
		this.progressElement = document.createElement("progress");

		if (id) {
			this.progressElement.id = id;
		}

		this.updateMaxValue();
		this.updateProgress();
	}

	updateMaxValue() {
		const scrollablePostHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		this.progressElement.setAttribute("max", scrollablePostHeight);
	}

	updateProgress() {
		const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
		this.progressElement.setAttribute("value", scrollPosition);
	}
}