/*
  blog-post.mjs
  Blog post relative date handling
  Written by Eli Howey
  Copyright 2019
*/

export function updateBlogPostTimestamps() {
	const timestamps = document.getElementsByTagName("time");
	const timestampElements = Array.prototype.slice.call(timestamps);
	timestampElements.forEach((el) => {
		getBlogPostDate(el);
	})
}

/**
 * Sets the date of a blog post based on its <time>
 * element's datetime attribute
 *
 * @param {HTMLTimeElement} timeElement HTML element containing the time a blog post was posted
 */
function getBlogPostDate(timeElement) {
	if (timeElement.dateTime !== undefined) {
		const date = new Date(timeElement.dateTime);
		timeElement.innerText = date.toLocaleDateString();
	}
}
