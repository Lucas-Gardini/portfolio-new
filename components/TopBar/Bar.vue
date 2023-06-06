<script setup lang="ts">
const props = defineProps<{ show: boolean }>();

const firstLoad = ref(true);
const currentClass = computed(() => {
	if (firstLoad.value) return "hidden animate__fadeOutUp";
	return "animate__animated " + (props.show ? "animate__fadeInDown" : "animate__fadeOutUp");
});

watch(
	() => props.show,
	() => {
		firstLoad.value = false;
	}
);
</script>

<template>
	<div :class="currentClass" class="fixed top-0 flex justify-between w-full z-10 top-bar brand">
		<TopBarTopDevName :show="show" />
		<TopBarTopSocial :show="show" />
	</div>
</template>

<style lang="scss" scoped>
.top-bar {
	padding: 25px;

	/* From https://css.glass */
	background: rgba(35, 35, 35, 0.2);
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(35, 35, 35, 0.3);
}
</style>
