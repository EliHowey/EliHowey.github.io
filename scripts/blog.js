/*
  blog.js
  Behavior of the blog page
  Written by Eli Howey
  Copyright 2019
*/

/* Generate the list of blog posts from the data in posts.json */
window.addEventListener("load", () => {
	fetch("../blog/posts.json")
		.then((response) => { return response.json(); })
		.then((data) => {
			const blogPosts = new BlogPostList(data);
			const mainEl = document.getElementById("content");
			mainEl.appendChild(blogPosts.createElement());
		})
		.catch((err) => {
			alert(err);
		});

});

class BlogPostList {
	constructor(json) {
		this.posts = [];

		const postData = json.posts;

		postData.forEach((postMetadata) => {
			const post = new BlogPostLink(postMetadata);
			this.posts.push(post);
		});
	}

	createElement() {
		const listEl = document.createElement("ul");
		listEl.classList.add("blog-posts");

		this.posts.forEach((post) => {
			const postEl = post.createElement();
			if (postEl) {
				listEl.appendChild(postEl);
			}
		})

		return listEl;
	}
}

class BlogPostLink {
	constructor(postObj) {
		this.title = postObj.title || "<No title>";
		this.href = postObj.href || "";
		this.description = postObj.description || "";
		this.isHidden = postObj.isHidden ? postObj.isHidden : false;

		const dateTimeString = postObj.timePosted ? `${postObj.datePosted}T${postObj.timePosted}` : postObj.datePosted;
		const datePosted = new Date(dateTimeString);
		if (datePosted instanceof Date && !isNaN(datePosted)) {
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

		const titleEl = document.createElement("h3");
		if (this.href) {
			const linkEl = document.createElement("a");
			linkEl.href = this.href;
			linkEl.innerText = this.title;
			titleEl.appendChild(linkEl);
		}
		else {
			titleEl.innerText = this.title;
		}
		listEl.appendChild(titleEl);

		if (this.description) {
			const descriptionEl = document.createElement("p");
			descriptionEl.innerText = this.description;
			listEl.appendChild(descriptionEl);
		}

		if (this.dateTime) {
			const timestampEl = document.createElement("time");
			timestampEl.dateTime = this.dateTime;
			timestampEl.classList.add("label");
			timestampEl.innerText = this.formattedDate;
			listEl.appendChild(timestampEl);
		}
		
		return listEl;
	}
}
