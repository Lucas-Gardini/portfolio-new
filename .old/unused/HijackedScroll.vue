<!-- <script setup lang="ts">
const currentSection = useCurrentSection();

onMounted(() => {
	if (window.innerWidth < 800) return;

	const sections = document.querySelectorAll(".section") as unknown as HTMLElement[];

	const scroll = reactive({
		sectionCount: sections.length - 1,
		isThrottled: false,
		throttleDuration: 1000,
		target: sections[0].offsetTop
	});

	function setSizes() {
		for (let i = 0; i < sections.length; i++) {
			sections[i].setAttribute("style", `top: ${window.innerHeight * i}px; height: 100vh; width: 100vw`);
		}
	}

	function downSection() {
		if (currentSection.value >= sections.length) return false;

		const positionFromTop = sections[currentSection.value + 1].offsetTop;
		// $("body, html").animate({ scrollTop: positionFromTop }, 300);

		scrollToPosition(positionFromTop, 300);

		currentSection.value = currentSection.value + 1;
	}

	function upSection() {
		if (currentSection.value <= 0) return false;

		const positionFromTop = sections[currentSection.value - 1].offsetTop;
		// $("body, html").animate({ scrollTop: positionFromTop }, 300);

		scrollToPosition(positionFromTop, 300);

		currentSection.value = currentSection.value - 1;
	}

	setSizes();

	const body = document.querySelector("body");

	if (body !== null) {
		let startY = -1;

		body!.onresize = setSizes;

		body.addEventListener(
			"touchstart",
			(event) => {
				// Prevent default touch behavior
				event.preventDefault();

				// Record the starting position of the touch
				startY = event.touches[0].clientY;
			},
			{ passive: false }
		);

		body.addEventListener(
			"touchmove",
			(event) => {
				// Prevent default touch behavior
				event.preventDefault();

				// Calculate the distance between the starting position and the current position
				const deltaY = event.touches[0].clientY - startY;

				// If the distance is greater than a threshold, scroll to the next section
				if (deltaY > 50 && currentSection.value != 0) {
					upSection();
				} else if (deltaY < -50 && currentSection.value != sections.length - 1) {
					downSection();
				}
			},
			{ passive: false }
		);
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
				if (currentSection.value === 0) return false;
				upSection();
			} else {
				if (currentSection.value >= scroll.sectionCount) return false;
				downSection();
			}
		},
		{ passive: false }
	);

	window.addEventListener("keydown", (event) => {
		if (event.keyCode == 40 && currentSection.value != sections.length - 1) {
			downSection();
		} else if (event.keyCode == 38 && currentSection.value != 0) {
			upSection();
		}
	});
});
</script>

<template>
	<slot />
</template> -->
