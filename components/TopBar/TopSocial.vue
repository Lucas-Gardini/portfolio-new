<script setup lang="ts">
function redirect(url: string) {
	window.open(url, "_blank");
}
</script>

<template>
	<div class="flex flex-row gap-5 socials mt-auto mb-auto">
		<Icon title="Github redirect" name="logos:github-icon" size="24" class="github-logo" @click="redirect('https://github.gardini.dev')" />
		<Icon title="Linkedin redirect" name="logos:linkedin-icon" size="24" class="hide-small-screen" @click="redirect('https://linkedin.gardini.dev')" />
		<Icon title="Youtube redirect" name="logos:youtube-icon" size="24" class="hide-small-screen" @click="redirect('https://youtube.gardini.dev')" />
	</div>
</template>

<style lang="scss">
.hidden {
	display: none !important;
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
