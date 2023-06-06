<script setup lang="ts">
const REDIRECTS = {
	github: "https://github.com/Lucas-Gardini",
	youtube: "https://www.youtube.com/@kowalskijr.",
	notFound: "https://lucas.gardini.dev"
};

const url = ref(window.location.href);
const redirectingTo = reactive({ text: "", link: "" });

const canShow = ref(false);
onMounted(() => {
	if (!url.value.includes("lucas.gardini.dev") && !url.value.includes("localhost")) {
		if (url.value.includes("github")) {
			redirectingTo.text = "Github";
			redirectingTo.link = REDIRECTS.github;
		} else if (url.value.includes("youtube")) {
			redirectingTo.text = "Youtube";
			redirectingTo.link = REDIRECTS.youtube;
		} else {
			redirectingTo.text = "Redirect not found...";
			redirectingTo.link = REDIRECTS.notFound;
		}

		canShow.value = true;
	}
});

watch(redirectingTo, () => {
	if (redirectingTo.link !== "") setTimeout(() => (window.location.href = redirectingTo.link), 5000);
});
</script>

<template>
	<div v-if="redirectingTo.text !== '' && canShow" class="animate__animated animate__fadeIn forwarder">
		<LottieView animation-link="/paperplane.json" :height="200" :width="200" />
		<ClientOnly> Traveling to: {{ redirectingTo.text }} </ClientOnly>
	</div>
</template>

<style scoped lang="scss">
.forwarder {
	position: fixed;
	bottom: 100px;
	left: 45%;
	transform: translateX(-50%);
	z-index: 999;
	height: 100px;
	display: flex;
	flex-direction: row;
	align-items: center;

	color: white;
	font-weight: bold;

	@media (max-width: 700px) {
		bottom: 20px;
	}

	@media (min-width: 1400px) {
		left: 47%;
	}

	@media (min-width: 1600px) {
		left: 47.5%;
	}
}
</style>
