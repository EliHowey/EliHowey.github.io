/*
  blog.js
  Behavior of the blog page
  Written by Eli Howey
  Copyright 2019
*/

import { BlogPostTimestamp } from "./components/blog-post-timestamp.js";

customElements.define("blog-post-timestamp", BlogPostTimestamp, {
	extends: "time"
});
