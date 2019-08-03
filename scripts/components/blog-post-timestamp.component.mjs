export class BlogPostTimestamp extends HTMLTimeElement {
	constructor() {
		super();
		this.absoluteDateFormatter = new Intl.DateTimeFormat('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
		this.relativeDateFormatter = new Intl.RelativeTimeFormat('en-US', { numeric: 'auto' });
	}

	connectedCallback() {
		let relativeDateString;

		const postDate = Date.parse(this.dateTime);

		const relativeDateInMinutes = (postDate - Date.now()) / (1000 * 60);
		if (Math.abs(relativeDateInMinutes) < 60) {
			relativeDateString = this.relativeDateFormatter.format(
				Math.round(relativeDateInMinutes),
				'minutes'
			);
		}
		else {
			const relativeDateInHours = relativeDateInMinutes / 60;
			if (Math.abs(relativeDateInHours) < 24) {
				relativeDateString = this.relativeDateFormatter.format(
					Math.round(relativeDateInHours),
					'hours'
				);
			}
			else {
				const relativeDateInDays = relativeDateInHours / 24;
				if (Math.abs(relativeDateInDays) < 30) {
					relativeDateString = this.relativeDateFormatter.format(
						Math.round(relativeDateInDays),
						'days'
					);
				}
				else {
					const relativeDateInMonths = relativeDateInDays / 30;
					if (Math.abs(relativeDateInMonths) < 12) {
						relativeDateString = this.relativeDateFormatter.format(
							Math.round(relativeDateInMonths),
							'months'
						);
					}
					else {
						const relativeDateInYears = relativeDateInMonths / 12;
						relativeDateString = this.relativeDateFormatter.format(
							Math.round(relativeDateInYears),
							'years'
						);
					}
				}
			}
		}

		this.textContent = relativeDateString;
		this.title = this.absoluteDateFormatter.format(new Date(postDate));
	}
}