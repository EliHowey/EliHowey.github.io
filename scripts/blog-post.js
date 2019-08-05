/*
  blog-post.js
  Behavior of a blog post page
  Written by Eli Howey
  Copyright 2019
*/

import { BlogPostLength } from "./components/blog-post-length.component.mjs";
import { BlogPostProgressBar } from "./components/blog-post-progress-bar.component.mjs";
import { BlogPostTimestamp } from "./components/blog-post-timestamp.component.mjs";

customElements.define("blog-post-timestamp", BlogPostTimestamp, {
	extends: "time"
});
customElements.define("blog-post-progress-bar", BlogPostProgressBar, {
	extends: "progress"
});
customElements.define("blog-post-length", BlogPostLength);
