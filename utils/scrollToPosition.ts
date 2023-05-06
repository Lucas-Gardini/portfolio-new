export default function scrollToPosition(position: number, duration: number) {
	const start = window.pageYOffset;
	const distance = position - start;
	let startTime: any = null;

	function animate(currentTime: any) {
		if (startTime === null) {
			startTime = currentTime;
		}
		const timeElapsed = currentTime - startTime;
		const scroll = easeInOutQuad(timeElapsed, start, distance, duration);
		window.scrollTo(0, scroll);
		if (timeElapsed < duration) {
			requestAnimationFrame(animate);
		}
	}

	function easeInOutQuad(t: number, b: number, c: number, d: number) {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animate);
}
