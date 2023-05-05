<script setup lang="ts">
defineProps<{
	animationLink: string;
	height: number;
	width: number;
}>();
</script>

<template>
	<lottie :animation-link="animationLink" :height="height" :width="width" />
</template>
