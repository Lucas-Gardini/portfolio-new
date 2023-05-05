<script setup lang="ts">
function scrollToPosition(position: number, duration: number) {
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

onMounted(() => {
	if (window.innerWidth < 800) return;

	const sections = document.querySelectorAll(".section") as unknown as HTMLElement[];

	const scroll = reactive({
		activeSection: 0,
		sectionCount: sections.length - 1,
		isThrottled: false,
		throttleDuration: 1000,
		target: sections[0].offsetTop
	});

	function setSizes() {
		for (let i = 0; i < sections.length; i++) {
			sections[i].setAttribute("style", `top: ${window.innerHeight * i}px; height: ${window.innerHeight}px; width: ${window.innerWidth}px`);
		}
	}

	function downSection() {
		if (scroll.activeSection >= sections.length) return false;

		const positionFromTop = sections[scroll.activeSection + 1].offsetTop;
		// $("body, html").animate({ scrollTop: positionFromTop }, 300);

		console.log(positionFromTop);

		scrollToPosition(positionFromTop, 300);

		scroll.activeSection = scroll.activeSection + 1;
	}

	function upSection() {
		if (scroll.activeSection <= 0) return false;

		const positionFromTop = sections[scroll.activeSection - 1].offsetTop;
		// $("body, html").animate({ scrollTop: positionFromTop }, 300);

		scrollToPosition(positionFromTop, 300);

		scroll.activeSection = scroll.activeSection - 1;
	}

	setSizes();

	const body = document.querySelector("body");

	if (body !== null) {
		let startY = -1;

		body!.onresize = setSizes;

		body.addEventListener("touchstart", (event) => {
			// Prevent default touch behavior
			event.preventDefault();

			// Record the starting position of the touch
			startY = event.touches[0].clientY;
		});

		body.addEventListener("touchmove", (event) => {
			// Prevent default touch behavior
			event.preventDefault();

			// Calculate the distance between the starting position and the current position
			const deltaY = event.touches[0].clientY - startY;

			// If the distance is greater than a threshold, scroll to the next section
			if (deltaY > 50 && scroll.activeSection != 0) {
				upSection();
			} else if (deltaY < -50 && scroll.activeSection != sections.length - 1) {
				downSection();
			}
		});
	}

	window.onscroll = (e) => e.preventDefault();

	let isThrottled = false;

	window.addEventListener(
		"wheel",
		(event) => {
			event.preventDefault();

			if (isThrottled) {
				return;
			}

			isThrottled = true;

			setTimeout(function () {
				isThrottled = false;
			}, scroll.throttleDuration);

			if (event.deltaY < 0) {
				if (scroll.activeSection === 0) return false;
				upSection();
				console.log("WHEELED UP");
			} else {
				if (scroll.activeSection >= scroll.sectionCount) return false;
				downSection();
				console.log("WHEELED DOWN");
			}
		},
		{ passive: false }
	);

	window.addEventListener("keydown", (event) => {
		if (event.keyCode == 40 && scroll.activeSection != sections.length - 1) {
			downSection();
		} else if (event.keyCode == 38 && scroll.activeSection != 0) {
			upSection();
		}
	});
});
</script>

<template>
	<slot />
</template>
