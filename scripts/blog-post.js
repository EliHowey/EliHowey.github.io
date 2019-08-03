/*
  blog-post.js
  Behavior of a blog post page
  Written by Eli Howey
  Copyright 2019
*/

import { BlogPostTimestamp } from './components/blog-post-timestamp.component.mjs';
import { BlogPostLengthMessage } from "./modules/blog-post-length.mjs";
import { BlogPostProgressBar } from "./modules/blog-post-progress.mjs";
import { debounce } from "./modules/debounce.mjs";

customElements.define(
	'blog-post-timestamp',
	BlogPostTimestamp,
	{ extends: 'time' }
);

window.addEventListener("load", () => {
	addBlogPostLength();
	addProgressBar();
});

/**
 * Calculates a blog post's length and adds an element
 * to its header indicating how long it will take to read
 *
 */
function addBlogPostLength() {
	const articleElement = document.getElementById("blog-post");
	const postLengthMessage = new BlogPostLengthMessage(articleElement);

	const articleHeader = document.getElementById("blog-post-header");
	articleHeader.appendChild(postLengthMessage.element);
}

/**
 * Adds a progress bar to the blog post's page to indicate
 * to the reader how much of the post they have read
 *
 */
function addProgressBar() {
	const progressBar = new BlogPostProgressBar("article-progress-bar");

	const main = document.getElementsByTagName("main")[0];
	main.appendChild(progressBar.progressElement);

	window.addEventListener("resize", () => {
		debounce(progressBar.updateMaxValue());
	});

	document.addEventListener("scroll", () => {
		debounce(progressBar.updateProgress());
	});
}