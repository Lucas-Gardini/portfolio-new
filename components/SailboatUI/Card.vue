<script setup lang="ts">
const props = defineProps<{ link?: string; icon?: string; image?: string; imageTitle?: string; title: string; content?: string; badges?: { color: string; text: string }[] }>();

function redirectTo() {
	if (props.link) {
		window.open(props.link, "_blank");
	}
}
</script>

<template>
	<div :class="link ? 'cursor-pointer hover:scale-105 transition-all' : 'cursor-default'" class="relative mx-auto max-w-md overflow-hidden rounded-lg shadow" @click="redirectTo">
		<div class="relative">
			<div v-if="imageTitle" class="flex flex-col img-backdrop">
				<Icon v-if="icon" :name="icon" size="48" class="mb-1 text-white" />
				<h1 class="text-4xl font-bold text-white text-center" v-html="imageTitle"></h1>
			</div>
			<img v-if="image" :src="image" class="aspect-video w-full object-cover" :alt="imageTitle" />
		</div>
		<div v-if="content" class="p-4 bg-white">
			<!-- <h3 class="text-xl font-medium text-gray-900 align-middle"><Icon v-if="icon" :name="icon" size="24" class="mb-1" />&nbsp;{{ title }}</h3> -->
			<p class="mt-1 text-gray-500" v-html="content"></p>
			<div class="mt-4 flex gap-2">
				<span v-for="(badge, i) in badges" :key="i" class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold" :class="badge.color"> {{ badge.text }} </span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.img-backdrop {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%);

	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;
}
</style>
