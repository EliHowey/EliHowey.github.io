/*
  blog-post.js
  Blog post relative date handling
  Written by Eli Howey
  Copyright 2019
*/

function getBlogPostDate(timeElement) {
  if (timeElement.dateTime !== undefined) {
    const date = new Date(timeElement.dateTime);
    // eslint-disable-next-line no-param-reassign
    timeElement.innerText = date.toLocaleDateString();
  }
}

window.onload = () => {
  const timestamps = document.getElementsByTagName('time');
  const timestampElements = Array.prototype.slice.call(timestamps);
  timestampElements.forEach((element) => { getBlogPostDate(element); });
};
