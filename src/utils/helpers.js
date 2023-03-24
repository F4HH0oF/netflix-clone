export function debounce(func, timeout = 300) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}

export const truncate = (string, chars) =>
	string?.length > chars ? string.slice(0, chars) + "..." : string;
