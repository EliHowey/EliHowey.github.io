export class BlogPostTimestamp extends HTMLTimeElement {
    constructor() {
        super();
        this.absoluteDateFormatter = new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        this.relativeDateFormatter = new Intl.RelativeTimeFormat("en-US", {
            numeric: "auto"
        });
    }
    connectedCallback() {
        const postDate = Date.parse(this.dateTime);
        this.textContent = this.getRelativeDate(postDate);
        this.title = this.absoluteDateFormatter.format(new Date(postDate));
    }
    getRelativeDate(timestamp) {
        const relativeDateInMinutes = (timestamp - Date.now()) / (1000 * 60);
        if (Math.abs(relativeDateInMinutes) < 60) {
            return this.relativeDateFormatter.format(Math.round(relativeDateInMinutes), "minutes");
        }
        const relativeDateInHours = relativeDateInMinutes / 60;
        if (Math.abs(relativeDateInHours) < 24) {
            return this.relativeDateFormatter.format(Math.round(relativeDateInHours), "hours");
        }
        const relativeDateInDays = relativeDateInHours / 24;
        if (Math.abs(relativeDateInDays) < 30) {
            return this.relativeDateFormatter.format(Math.round(relativeDateInDays), "days");
        }
        const relativeDateInMonths = relativeDateInDays / 30;
        if (Math.abs(relativeDateInMonths) < 12) {
            return this.relativeDateFormatter.format(Math.round(relativeDateInMonths), "months");
        }
        const relativeDateInYears = relativeDateInMonths / 12;
        return this.relativeDateFormatter.format(Math.round(relativeDateInYears), "years");
    }
}
//# sourceMappingURL=blog-post-timestamp.js.map