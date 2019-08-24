var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BlogPostTimestamp } from "./components/blog-post-timestamp.js";
customElements.define("blog-post-timestamp", BlogPostTimestamp, {
    extends: "time"
});
window.addEventListener("load", () => __awaiter(this, void 0, void 0, function* () {
    try {
        const postJson = yield fetch("../blog/posts.json");
        const postData = yield postJson.json();
        const blogPosts = new BlogPostList(postData);
        const mainEl = document.getElementById("content");
        if (mainEl) {
            mainEl.appendChild(blogPosts.createElement());
        }
    }
    catch (err) {
        alert(`Error fetching blog posts: ${err}`);
    }
}));
class BlogPostList {
    constructor(json) {
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
    constructor(postObj) {
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
//# sourceMappingURL=blog.js.map