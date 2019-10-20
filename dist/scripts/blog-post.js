import { BlogPostLength } from './components/blog-post-length.js';
import { BlogPostProgressBar } from './components/blog-post-progress-bar.js';
import { BlogPostTimestamp } from './components/blog-post-timestamp.js';
customElements.define('blog-post-timestamp', BlogPostTimestamp, {
    extends: 'time'
});
customElements.define('blog-post-progress-bar', BlogPostProgressBar, {
    extends: 'progress'
});
customElements.define('blog-post-length', BlogPostLength);
//# sourceMappingURL=blog-post.js.map