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

/* Generate the list of blog posts from the data in posts.json */
window.addEventListener("load", async () => {
	try {
		const postJson = await fetch("../blog/posts.json");
		const postData = await postJson.json();

		const blogPosts = new BlogPostList(postData);
		const mainEl = document.getElementById("content");
		if (mainEl) {			
			mainEl.appendChild(blogPosts.createElement());
		}
	} catch (err) {
		alert(`Error fetching blog posts: ${err}`);
	}
});

interface PostMetadata {
	href: string,
	title: string,
	description: string,
	datePosted: string,
	timePosted: string,
	isHidden?: boolean
}

interface PostJSON extends JSON {
	posts: PostMetadata[];
}

class BlogPostList {
	private posts: BlogPostLink[];

	constructor(json: PostJSON) {
		this.posts = json.posts.map((postData) => {
			return new BlogPostLink(postData);
		});
	}

	createElement() {
		const listEl = document.createElement("ul");
		listEl.classList.add("blog-posts");

		this.posts.forEach(post => {
			const postEl = post.createElement();
			if (postEl) {
				listEl.appendChild(postEl);
			}
		});

		return listEl;
	}
}

class BlogPostLink {
	private title: string;
	private href: string;
	private description: string;
	private isHidden: boolean;

	private dateTime?: string;
	private formattedDate?: string;

	constructor(postObj: PostMetadata) {
		this.title = postObj.title || "<No title>";
		this.href = postObj.href || "";
		this.description = postObj.description || "";
		this.isHidden = postObj.isHidden ? postObj.isHidden : false;

		const dateTimeString = postObj.timePosted
			? `${postObj.datePosted}T${postObj.timePosted}`
			: postObj.datePosted;
		const datePosted = new Date(dateTimeString);
		if (datePosted instanceof Date) {
			this.dateTime = dateTimeString;
			this.formattedDate = datePosted.toLocaleDateString();
		}
	}

	createElement() {
		if (this.isHidden) {
			return null;
		}

		const listEl = document.createElement("li");
		listEl.classList.add("blog-post");
		listEl.innerHTML = `
			<h3>
				${this.href ? `<a href=${this.href}>${this.title}</a>` : this.title}
			</h3>`;
		
		if (this.description) {
			listEl.innerHTML += `<p>${this.description}</p>`;
		}

		if (this.dateTime) {
			listEl.innerHTML += `<time is='blog-post-timestamp' datetime='${this.dateTime}' class='label'>${this.formattedDate}</time>`;
		}

		return listEl;
	}
}
