/**
 * debounce.mjs
 * Handles debouncing function calls
 * Written by Eli Howey
 * Copyright 2019
 */

export const debounce = (fn) => {
	let frame;

	return (...params) => {
		if (frame) {
			cancelAnimationFrame(frame);
		}

		frame = requestAnimationFrame(() => {
			fn(...params);
		});
	};
};