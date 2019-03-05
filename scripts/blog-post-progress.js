/**
 * blog-post-progress.js
 * Blog post progress bar generation
 * Written by Eli Howey
 * Copyright 2019
 */

let articleProgressBar;

/**
 * Configures a progress bar to indicate the user's
 * progress within a blog post
 */
function setupArticleProgressBar() {
  const documentEl = document.documentElement;
  const main = document.getElementsByTagName('main')[0];

  const setMaxValue = () => {
    const maxHeight = documentEl.scrollHeight - documentEl.clientHeight;
    articleProgressBar.setAttribute('max', maxHeight);
  };

  const updateValue = () => {
    const scrollPosition = documentEl.scrollTop || document.body.scrollTop || window.scrollY;
    articleProgressBar.setAttribute('value', scrollPosition);
  };

  articleProgressBar = document.createElement('progress');
  articleProgressBar.id = 'article-progress-bar';

  // Set initial boundaries
  setMaxValue();
  updateValue();

  main.appendChild(articleProgressBar);
  window.addEventListener('resize', setMaxValue);
  document.addEventListener('scroll', updateValue);
}

window.addEventListener('load', setupArticleProgressBar);
