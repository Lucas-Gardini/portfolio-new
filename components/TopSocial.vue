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

function redirect(url: string) {
	window.open(url, "_blank");
}
</script>

<template>
	<div :class="currentClass" style="z-index: 2">
		<div class="flex flex-row gap-5 socials">
			<Icon title="Github redirect" name="logos:github-icon" size="24" class="github-logo" @click="redirect('https://github.gardini.dev')" />
			<Icon title="Youtube redirect" name="logos:youtube-icon" size="24" class="hide-small-screen" @click="redirect('https://youtube.gardini.dev')" />
		</div>
	</div>
</template>

<style lang="scss">
.hidden {
	display: none !important;
}

.top-right {
	position: fixed;
	top: 40 px;
	right: 40px;
}

.socials {
	& > * {
		cursor: pointer;
	}
}

.github-logo {
	& > * {
		fill: white !important;
	}
}
</style>
