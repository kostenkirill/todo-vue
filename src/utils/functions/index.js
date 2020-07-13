"use strict";

export const generateRandomColor = () => {
	const colors = [];
	for (let i = 0; i < 3; i++) {
		const color = Math.floor(Math.random() * 56) + 200;
		colors.push(color);
	}
	return `rgb(${colors[0]},${colors[1]},${colors[2]})`;
};

export const getItemFromLocalStorage = (key) => {
	return JSON.parse(localStorage.getItem(key));
};

export const setItemToLocalStorage = (key, item) => {
	localStorage.setItem(key, JSON.stringify(item));
};
