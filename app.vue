<script setup lang="ts">
const route = useRoute();

const isWallpaper = computed(() => route.query.wallpaper === "1");

const state = reactive({
	scrollPosition: 0,
	viewportHeight: 0,
	threshold: 0,
	showTop: false
});

const handleScroll = () => {
	state.scrollPosition = window.scrollY;

	if (state.scrollPosition > state.threshold) {
		state.showTop = true;
	} else {
		state.showTop = false;
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
		<ScrollIndicator />
		<!-- <TopDevName :show="state.showTop" />
		<TopSocial :show="state.showTop" /> -->

		<TopBar :show="state.showTop" />

		<ClientOnly>
			<div>
				<!-- <Backdrop /> -->
				<div class="section one">
					<div style="position: relative; z-index: 2">
						<DevIntro @scrolled-down="handleScroll" />
					</div>
				</div>
				<div class="section two">
					<div class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3 grid-rows-1 pl-5 pr-5 mt-[200px]">
						<div class="flex flex-col gap-5 col-span-2 bg-glass border-primary p-5">
							<h1 class="text-white text-4xl">Hello! I'm <span class="text-primary">Lucas Gardini</span>, a <span>Fullstack</span> developer from Brazil!</h1>
							<h2 class="text-white text-3xl">
								Currently working at <a href="https://integrativa.com.br/" target="_blank" class="text-blue-500">Integrativa</a>, developing solutions with <span class="text-blue-400">Typescript</span> and
								<span class="text-purple-500">C#</span>
							</h2>

							<div class="flex flex-row justify-center items-center mt-10 mb-10">
								<hr class="w-6/12" />
								<span class="text-xl">🐧</span>
								<hr class="w-6/12" />
							</div>

							<h1 class="text-white text-4xl">About me</h1>
							<p class="text-white">
								Graduated in Computer Networks from the Federal Institute of São Paulo, Catanduva Campus, I started programming in 2019 at the beginning of the course and have been learning more every day since
								then. I started with Python and then PHP, but I ended up finding my passion in Javascript. Since then, my focus has been on enhancing my skills both in front-end development using VueJs with NuxtJs
								and Electron, and in back-end development using NodeJs and Express, along with MongoDB and MySql.
							</p>

							<p class="text-white">
								I have experience developing mobile applications for <span class="text-green-500">Android</span> and <span class="text-blue-500">iOS</span> using React-Native and Expo, creating cross-platform apps.
							</p>

							<p class="text-white">Additionally, I have expertise in web scraping using Puppeteer and Playwright, as well as automation using Python.</p>
						</div>

						<div class="lg:w-[300px] w-full bg-glass border-primary mt-10 lg:mt-0">
							<iframe
								style="border-radius: 12px"
								src="https://open.spotify.com/embed/playlist/1HOkicCnoebesus1oiHE91?utm_source=generator&theme=1"
								width="100%"
								height="352"
								frameBorder="0"
								allowfullscreen="false"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							></iframe>
						</div>
					</div>
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
