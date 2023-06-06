<script setup lang="ts">
import { computed, onMounted, onUnmounted } from "vue";

const scrollPercentage = ref(0);
const progressBarStyle = computed(() => {
	return {
		width: `${scrollPercentage.value}%`
	};
});

function handleScroll() {
	const windowHeight = window.innerHeight;
	const documentHeight = document.documentElement.scrollHeight;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	const scrollDistance = documentHeight - windowHeight;
	scrollPercentage.value = (scrollTop / scrollDistance) * 100;
}

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
	<div class="scroll-progress-bar" :style="progressBarStyle"></div>
</template>

<style scoped>
.scroll-progress-bar {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 3px;
	background-color: #14a44d;
	z-index: 9999;

	@media (max-width: 768px) {
		display: none;
	}
}
</style>
