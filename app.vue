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
			<DevIntro :is-wallpaper="true" />
		</div>
	</div>
	<div v-else>
		<ScrollIndicator />
		<!-- <TopDevName :show="state.showTop" />
		<TopSocial :show="state.showTop" /> -->

		<!-- <TopBar :show="state.showTop" /> -->

		<div>
			<!-- <Backdrop /> -->
			<div class="section one" style="padding: 0">
				<div class="background-first">
					<DevIntro @scrolled-down="handleScroll" />
				</div>
			</div>
			<div class="section two">
				<div class="grid grid-flow-row-dense">
					<div class="flex flex-col gap-5 p-5">
						<h1 class="text-white text-4xl">Hello! I'm <span class="text-primary">Lucas Gardini</span>, a <span>Fullstack</span> developer from Brazil!</h1>
						<h2 class="text-white text-3xl">
							Currently working at <a href="https://integrativa.com.br/" target="_blank" class="text-blue-500">Integrativa</a>, developing solutions with <span class="text-blue-400">Typescript</span> and
							<span class="text-purple-500">C#</span>
						</h2>

						<Divider />

						<h1 class="text-white text-4xl font-bold">About me</h1>
						<p class="text-white">
							Graduated in Computer Networks from the Federal Institute of São Paulo, Catanduva Campus, I started programming in 2019 at the beginning of the course and have been learning more every day since then. I
							started with Python and then PHP, but I ended up finding my passion in Javascript. Since then, my focus has been on enhancing my skills both in front-end development using VueJs with NuxtJs and
							Electron, and in back-end development using NodeJs and Express, along with MongoDB and MySql.
						</p>

						<p class="text-white">
							I have experience developing mobile applications for <span class="text-green-500">Android</span> and <span class="text-blue-500">iOS</span> using React-Native and Expo, creating cross-platform apps.
						</p>

						<p class="text-white">Additionally, I have expertise in web scraping using Puppeteer and Playwright, as well as automation using Python.</p>
					</div>

					<div class="w-full mt-10 ml-auto mr-auto p-5 pt-0 pb-0">
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
				<div class="p-5">
					<Divider />
					<h1 class="text-white text-4xl mb-10 font-bold">Tecnologies</h1>

					<div class="flex flex-wrap justify-center gap-10 flex-row card mt-20">
						<div class="relative w-3/12 text-center">
							<h2 class="absolute top-[-50px] left-[50%] translate-x-[-50%] p-5 rounded bg-primary text-lg font-bold align-middle items-center justify-center flex">
								<Icon name="ph:code-bold" size="24" />&nbsp;Languages
							</h2>

							<div class="flex flex-row justify-evenly w-full mb-5 mt-16">
								<Icon name="devicon:html5" size="32" />
								<Icon name="devicon:css3" size="32" />
							</div>

							<div class="flex flex-row justify-evenly w-full mb-5">
								<Icon name="devicon:typescript" size="32" />
								<Icon name="devicon:csharp" size="32" />
							</div>

							<div class="flex flex-row justify-evenly w-full mb-5">
								<Icon name="devicon:python" size="32" />
								<Icon name="devicon:php" size="32" />
							</div>
						</div>
						<div class="relative w-3/12 text-center">
							<h2 class="absolute top-[-50px] left-[50%] translate-x-[-50%] p-5 rounded bg-primary text-lg font-bold align-middle items-center justify-center flex">
								<Icon name="material-symbols:deployed-code" size="24" />&nbsp;Frameworks
							</h2>

							<div class="flex flex-row justify-evenly w-full mb-5 mt-16">
								<Icon name="devicon:html5" size="32" />
								<Icon name="devicon:css3" size="32" />
							</div>

							<div class="flex flex-row justify-evenly w-full mb-5">
								<Icon name="devicon:typescript" size="32" />
								<Icon name="devicon:csharp" size="32" />
							</div>

							<div class="flex flex-row justify-evenly w-full mb-5">
								<Icon name="devicon:python" size="32" />
								<Icon name="devicon:php" size="32" />
							</div>
						</div>
						<div class="relative w-3/12 text-center">
							<h2 class="absolute top-[-50px] left-[50%] translate-x-[-50%] p-5 rounded bg-primary text-lg font-bold align-middle items-center justify-center flex">
								<Icon name="material-symbols:terminal" size="24" />Tools
							</h2>

							<div class="flex flex-row justify-evenly w-full mb-5 mt-16">
								<Icon name="devicon:html5" size="32" />
								<Icon name="devicon:css3" size="32" />
							</div>

							<div class="flex flex-row justify-evenly w-full mb-5">
								<Icon name="devicon:typescript" size="32" />
								<Icon name="devicon:csharp" size="32" />
							</div>

							<div class="flex flex-row justify-evenly w-full mb-5">
								<Icon name="devicon:python" size="32" />
								<Icon name="devicon:php" size="32" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="section four">
				<div style="position: relative; z-index: 2"></div>
			</div>
			<div class="section five">
				<div style="position: relative; z-index: 2"></div>
			</div>
			<div class="section six">
				<div class="flex flex-col items-center">
					<h1 class="text-white text-4xl mb-10 font-bold">Contact me</h1>

					<div class="flex flex-row mt-10 gap-10">
						<a href="TODO" target="_blank" class="no-underline"><Icon name="logos:facebook" size="48" /></a>
						<a href="TODO" target="_blank" class="no-underline"><Icon class="github-logo" name="logos:github-icon" size="48" /></a>
						<a href="mailto:contato@gardini.dev" target="_blank" class="no-underline"><Icon name="bxs:envelope" size="50" color="white" /></a>
						<a href="TODO" target="_blank" class="no-underline"><Icon name="logos:youtube-icon" size="50" /></a>
						<a href="TODO" target="_blank" class="no-underline"><Icon name="logos:linkedin-icon" size="48" /></a>
					</div>
				</div>
			</div>
		</div>

		<ClientOnly>
			<Forwarder />
		</ClientOnly>
	</div>
</template>

<style lang="scss">
.background-first {
	background-image: url("/images/background-maksim.jpg");
	background-repeat: repeat-y;
	background-position: center;
	background-size: cover;

	/* backdrop */
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(45deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%);
		z-index: 0;
	}
}

.section {
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	min-height: 100vh;
	width: 100vw;

	padding: 15px;

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

.card {
	background-color: whitesmoke;
	border-radius: 5px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

.github-logo {
	& > * {
		fill: white !important;
	}
}
</style>
