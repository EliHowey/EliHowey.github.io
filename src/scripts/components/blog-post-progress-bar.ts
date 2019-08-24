export class BlogPostProgressBar extends HTMLProgressElement {
	constructor() {
		super();

		document.addEventListener("scroll", () => {
			this._updateProgress();
		});
	}

	connectedCallback() {
		this._updateMaxValue();
		this._updateProgress();		
	}

	_updateMaxValue() {
		const docEl = document.documentElement;
		const scrollablePostHeight = docEl.scrollHeight - docEl.clientHeight;
		this.setAttribute("max", scrollablePostHeight.toString());
	}

	_updateProgress() {
		const scrollPosition =
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			window.scrollY;
		this.setAttribute("value", scrollPosition.toString());
	}
}
