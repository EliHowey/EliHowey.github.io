/**
 * blog-post-length.js
 * Blog post length estimation
 * Written by Eli Howey
 * Copyright 2019
 */

/**
 * Estimates the length of time it will take the average
 * adult to read a page's article
 */
function getEstimatedTimeToRead() {
  const WORDS_PER_MINUTE = 200; // Average adult reading speed
  const article = document.getElementsByTagName('article')[0];
  const numWords = article.innerText.split(' ').length;
  return Math.round(numWords / WORDS_PER_MINUTE);
}

window.addEventListener('load', () => {
  const lengthEl = document.getElementById('blog-post-length-estimate');

  if (lengthEl) {
    const timeToRead = getEstimatedTimeToRead();
    if (timeToRead === undefined || timeToRead === null || Number.isNaN(timeToRead)) {
      lengthEl.remove();
    } else {
      lengthEl.innerText = `${timeToRead < 1 ? '<1' : timeToRead} minute read`;
    }
  }
});
