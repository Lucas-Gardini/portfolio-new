<script setup lang="ts">
const props = defineProps<{ show: boolean }>();

const firstLoad = ref(true);
const currentClass = computed(() => {
	if (firstLoad.value) return "hidden animate__fadeOutUp";
	return "top-right animate__animated " + (props.show ? "animate__fadeInDown" : "animate__fadeOutUp");
});

watch(
	() => props.show,
	() => {
		firstLoad.value = false;
	}
);
</script>

<template>
	<div :class="currentClass" style="z-index: 2">
		<div class="title cursor-pointer" @click="scrollToPosition(0, 500)">
			<h1 class="no-animation">Lucas Gardini<span class="no-animation"></span></h1>
		</div>
	</div>
</template>

<style lang="scss">
.hidden {
	display: none !important;
}

.top-right {
	position: fixed;
	top: 30px;
	right: 40px;
}
</style>
