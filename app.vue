<script setup lang="ts">
const route = useRoute();

const isWallpaper = computed(() => route.query.wallpaper === "1");

const state = reactive({
	scrollPosition: 0,
	viewportHeight: 0,
	threshold: 0,
	showDevName: false
});

const handleScroll = () => {
	state.scrollPosition = window.scrollY;

	if (state.scrollPosition > state.threshold) {
		state.showDevName = true;
	} else {
		state.showDevName = false;
	}
};

onMounted(() => {
	state.viewportHeight = window.innerHeight;
	state.threshold = state.viewportHeight;
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
	<div v-if="isWallpaper">
		<div class="section one">
			<Backdrop />
			<div style="position: relative; z-index: 2">
				<DevIntro :is-wallpaper="true" />
			</div>
		</div>
	</div>
	<div v-else>
		<TopDevName :show="state.showDevName" />

		<ClientOnly>
			<div>
				<div class="section one">
					<Backdrop />
					<div style="position: relative; z-index: 2">
						<DevIntro @scrolled-down="handleScroll" />
					</div>
				</div>
				<div class="section two">
					<div style="position: relative; z-index: 2"></div>
				</div>
				<div class="section three">
					<div style="position: relative; z-index: 2"></div>
				</div>
				<div class="section four">
					<div style="position: relative; z-index: 2"></div>
				</div>
				<div class="section five">
					<div style="position: relative; z-index: 2"></div>
				</div>
				<div class="section six">
					<div style="position: relative; z-index: 2"></div>
				</div>
			</div>
		</ClientOnly>

		<ClientOnly>
			<Forwarder />
		</ClientOnly>
	</div>
</template>

<style lang="scss">
.section {
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	height: 100vh;
	width: 100vw;

	/* &.one {
		background-image: url("/images/background-visiwig-one.svg");
	}

	&.two {
		background-image: url("/images/background-visiwig-two.svg");
	}

	&.three {
		background-image: url("/images/background-visiwig-three.svg");
	}

	&.four {
		background-image: url("/images/background-visiwig-four.svg");
	}

	&.five {
		background-image: url("/images/background-visiwig-five.svg");
	}

	&.six {
		background-image: url("/images/background-visiwig-six.svg");
	} */
}
</style>
