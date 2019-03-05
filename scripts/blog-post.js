/*
  blog-post.js
  Blog post relative date handling
  Written by Eli Howey
  Copyright 2019
*/

/**
 * Sets the date of a blog post based on its <time>
 * element's datetime attribute
 *
 * @param {HTMLTimeElement} timeElement HTML element containing the time a blog post was posted
 */
function getBlogPostDate(timeElement) {
  if (timeElement.dateTime !== undefined) {
    const date = new Date(timeElement.dateTime);
    // eslint-disable-next-line no-param-reassign
    timeElement.innerText = date.toLocaleDateString();
  }
}

/* Update all blog post timestamps */
window.addEventListener('load', () => {
  const timestamps = document.getElementsByTagName('time');
  const timestampElements = Array.prototype.slice.call(timestamps);
  timestampElements.forEach((element) => { getBlogPostDate(element); });
});
