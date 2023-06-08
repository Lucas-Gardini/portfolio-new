<script setup lang="ts">
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";

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

useHead({
	title: "Portfolio - Lucas Gardini Dias",
	meta: [{ name: "description", content: "My amazing minimalist portfolio website!" }]
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
			<div class="section one" style="padding: 0; height: 110vh">
				<div class="background-first">
					<DevIntro @scrolled-down="handleScroll" />
				</div>
			</div>
			<div class="section two">
				<div class="grid grid-flow-row-dense">
					<div class="flex flex-col gap-5 p-5 text-center">
						<h1 class="text-white text-4xl font-bold">Hello! I'm <span class="text-primary">Lucas Gardini</span>, a <span>Fullstack</span> developer from Brazil!</h1>

						<hr class="w-[25px] ml-auto mr-auto" />

						<h2 class="text-white text-3xl">
							Currently working at <a href="https://integrativa.com.br/" target="_blank" class="text-blue-500">Integrativa</a>, developing solutions with <span class="text-blue-400">Typescript</span> and
							<span class="text-purple-500">C#</span>
						</h2>

						<Divider />

						<h1 class="text-white text-4xl font-bold">About me</h1>
						<p class="text-white">
							Graduated in Computer Networks from the <a href="https://ctd.ifsp.edu.br/" target="_blank" class="text-blue-500 underline">Federal Institute of São Paulo, Catanduva Campus</a>, I started programming in
							2019 at the beginning of the course and have been learning more every day since then. I started with Python and then PHP, but I ended up finding my passion in Javascript. Since then, my focus has been
							on enhancing my skills both in front-end development using VueJs with NuxtJs and Electron, and in back-end development using NodeJs and Express, along with MongoDB and PostgreSQL.
						</p>

						<p class="text-white">
							I have experience developing mobile applications for <span class="text-green-500">Android</span> and <span class="text-blue-500">iOS</span> using React-Native and Expo, creating cross-platform apps.
						</p>

						<p class="text-white">Additionally, I have expertise in web scraping using Puppeteer and Playwright, as well as automation using Python.</p>
					</div>

					<div class="w-full mt-10 ml-auto mr-auto p-5 pt-0 pb-0">
						<iframe
							style="border-radius: 12px"
							src="https://open.spotify.com/embed/playlist/1HOkicCnoebesus1oiHE91?utm_source=generator"
							width="100%"
							height="152"
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

					<div class="flex flex-wrap justify-center gap-10 flex-row mt-10">
						<SailboatUICard
							image="/images/typescript.jpg"
							image-title="Languages"
							title="Languages"
							icon="ph:code-bold"
							content="I have experience with markup languages HTML, CSS, and XML, as well as programming languages Typescript, C#, and Python."
							:badges="[
								{
									text: 'Typescript',
									color: 'bg-blue-100 text-blue-500'
								},
								{
									text: 'C#',
									color: 'bg-purple-100 text-purple-500'
								},
								{
									text: 'Python',
									color: 'bg-yellow-100 text-yellow-500'
								}
							]"
						/>

						<SailboatUICard
							image="/images/nestjs.jpg"
							image-title="Frameworks"
							title="Frameworks"
							icon="material-symbols:deployed-code"
							content="I have knowledge of front-end frameworks such as Vue and Nuxt, React, React-Native, and Next, and back-end frameworks like NestJS and Express."
							:badges="[
								{
									text: 'Vue & Nuxt',
									color: 'bg-green-100 text-green-500'
								},
								{
									text: 'React, React-Native & Next',
									color: 'bg-blue-100 text-blue-600'
								},
								{
									text: 'NestJS & Express',
									color: 'bg-red-100 text-red-500'
								}
							]"
						/>

						<SailboatUICard
							image="/images/mongodb.jpg"
							image-title="Databases"
							title="Databases"
							icon="material-symbols:database"
							content="I have experience working with databases such as PostgreSQL, MongoDB, and MySQL.<br/> Note: MongoDB holds a special place in my heart ❤️."
							:badges="[
								{
									text: 'PostgreSQL',
									color: 'bg-blue-100 text-blue-400'
								},
								{
									text: 'MongoDB',
									color: 'bg-green-100 text-green-600'
								},
								{
									text: 'MySQL',
									color: 'bg-yellow-100 text-yellow-600'
								}
							]"
						/>

						<SailboatUICard
							image="/images/vscode.jpg"
							image-title="Tools & Platforms"
							title="Tools & Platforms"
							icon="material-symbols:terminal"
							content="The main tools and platforms I use are Visual Studio Code, Beekeeper, and AWS. Along with Windows and Linux"
							:badges="[
								{
									text: 'VS Code',
									color: 'bg-blue-100 text-blue-500'
								},
								{
									text: 'Beekeeper',
									color: 'bg-yellow-100 text-yellow-500'
								},
								{
									text: 'AWS',
									color: 'bg-orange-100 text-orange-500'
								},
								{
									text: 'Windows',
									color: 'bg-blue-100 text-blue-500'
								},
								{
									text: 'Linux',
									color: 'bg-gray-100 bg-black-500'
								}
							]"
						/>
					</div>
				</div>
			</div>
			<div class="section four">
				<div class="p-5">
					<Divider />
					<h1 class="text-white text-4xl mb-10 font-bold">I'm currently working on</h1>

					<div class="flex flex-wrap justify-center gap-10 flex-row mt-10">
						<SailboatUICard link="https://www.youtube.com/@kowalskijr." image="/images/youtube.jpg" image-title="Youtube Channel" title="Tools & Platforms" />
						<SailboatUICard link="https://tauri.app/" image="/images/tauri.jpg" image-title="Learning Tauri" title="Tools & Platforms" />
					</div>
				</div>
			</div>
			<!-- <div class="section five">
				<div style="position: relative; z-index: 2"></div>
			</div> -->
			<div class="section six">
				<div class="flex flex-col items-center">
					<h1 class="text-white text-4xl mb-10 font-bold">Contact me</h1>

					<div class="flex flex-row flex-wrap items-center justify-center mt-10 gap-10">
						<a href="https://web.facebook.com/lucasgardini.dias/" target="_blank" class="no-underline"><Icon name="logos:facebook" size="48" /></a>
						<a href="https://github.com/Lucas-Gardini" target="_blank" class="no-underline"><Icon class="github-logo" name="logos:github-icon" size="48" /></a>
						<a href="mailto:contato@gardini.dev" target="_blank" class="no-underline"><Icon name="bxs:envelope" size="50" color="white" /></a>
						<a href="https://www.youtube.com/channel/UC9sswQK24QFRMSA7NNzEtww" target="_blank" class="no-underline"><Icon name="logos:youtube-icon" size="50" /></a>
						<a href="https://www.linkedin.com/in/lucasgardini/" target="_blank" class="no-underline"><Icon name="logos:linkedin-icon" size="48" /></a>
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
/* body {
	background-image: url("/images/background-maksim.jpg");
	background-repeat: no-repeat;
	background-position: top;
	background-size: 100vw 100vh;
} */

.section {
	position: relative;
	z-index: 1;

	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	min-height: 100vh;
	width: 100vw;

	padding: 15px;

	background-color: #222222;

	&.one {
		/* backdrop */
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			height: 110vh;
			width: 100%;
			background: linear-gradient(45deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%);
			z-index: 0;
		}
	}

	&.one .background-first {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		transform: translateZ(0);

		background-image: url("/images/background-maksim.jpg");
		background-repeat: repeat-y;
		background-position: center;
		background-size: cover;
	}

	&.two {
		position: relative;
		z-index: 2;
		transform: translateZ(0);
	}
	/* 
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

.github-logo {
	& > * {
		fill: white !important;
	}
}
</style>
