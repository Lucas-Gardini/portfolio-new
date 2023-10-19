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

const { copy } = useCopyToClipboard();
function copyUrl(id: string) {
	copy(`${window.location.origin}${window.location.pathname}${id}`);
}

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
	meta: [
		{ name: "description", content: "My amazing minimalist portfolio website!" },
		{ name: "icon", content: "/favicon.ico" }
	]
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

		<div>
			<div class="section one" style="padding: 0; height: 110vh">
				<div class="background-first">
					<DevIntro @scrolled-down="handleScroll" />
				</div>
			</div>
			<div class="section two flex">
				<div class="container mx-auto max-w-[768px]">
					<div class="flex flex-col gap-5 p-5 text-left">
						<img class="mx-2 mb-4 h-[144px] w-[144px] select-none rounded-full" alt="wiidede" src="/images/logo.jpeg" />
						<h1 class="text-white text-[26px] md:text-[32px] font-bold">Hello! I'm <span class="text-primary">Lucas Gardini</span>, a Fullstack developer from Brazil!</h1>

						<div class="flex flex-wrap">
							<UButton class="btn-social" href="mailto:contato@lucasgardini.com" target="_blank"><Icon name="vscode-icons:file-type-outlook" /></UButton>
							<UButton class="btn-social" href="https://www.facebook.com/lucasgardini.dias" target="_blank"><Icon name="logos:facebook" /></UButton>
							<UButton class="btn-social" href="https://www.youtube.com/@kowalskijr." target="_blank"><Icon name="logos:youtube-icon" /></UButton>
							<UButton class="btn-social" href="https://www.linkedin.com/in/lucas-gardini-dias-4b20681b3/" target="_blank"><Icon name="logos:linkedin-icon" /></UButton>
							<UButton class="btn-social" href="https://github.com/Lucas-Gardini" target="_blank"><Icon name="mdi:github" color="white" /></UButton>
						</div>
						<!-- 
						<h2 class="text-white text-3xl">
							Currently working at <a href="https://integrativa.com.br/" target="_blank" class="text-blue-500">Integrativa</a>, developing solutions with <span class="text-blue-400">Typescript</span> and
							<span class="text-purple-500">C#</span>
						</h2> -->

						<Divider />

						<h1 class="text-white text-4xl font-bold">About me</h1>
						<p class="text-white">
							Graduated in Computer Networks from the <a href="https://ctd.ifsp.edu.br/" target="_blank" class="text-blue-500 underline">Federal Institute of São Paulo, Catanduva Campus</a>, I started programming in
							2019 at the beginning of the course and have been learning more every day since. I started with Python and then PHP, but I ended up finding my passion in Javascript.
						</p>

						<p class="text-white">
							Since then, my focus has been on enhancing my skills both in front-end development using VueJs with NuxtJs and Electron, and in back-end development using NodeJs and Express, along with MongoDB and
							PostgreSQL.
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
						<Divider />
					</div>
				</div>
			</div>

			<div class="section three">
				<div class="container mx-auto max-w-[768px]">
					<div class="flex flex-col gap-5 p-5">
						<h1 @click="copyUrl('#experiences')" id="experiences" class="link text-white text-4xl font-bold">My Experiences</h1>

						<h2 class="text-white text-2xl font-bold">Integrativa (2022 - )</h2>

						<h3 class="text-white font-bold">Web Developer</h3>

						<p class="text-white">I primarily work with TypeScript, using the NestJS framework for creating REST APIs and Nuxt for developing web applications.</p>

						<p class="text-white">I leverage Docker, cloud computing with AWS, and employ C# and Python for developing certain applications. I also make use of queue/messaging tools such as RabbitMQ, BullJS, etc.</p>

						<p class="text-white">Additionally, I work with MongoDB, Postgres, and Redis databases. My role involves integrating with various internet services through APIs.</p>
					</div>
					<Divider />
				</div>
			</div>

			<div class="section four">
				<div class="container mx-auto max-w-[768px]">
					<div class="flex flex-col gap-5 p-5">
						<h1 @click="copyUrl('#skills')" id="skills" class="link text-white text-4xl font-bold">My Skills</h1>

						<h2 class="text-white text-2xl font-bold">Programming Languages</h2>

						<ul class="text-white">
							<li>• JavaScript/TypeScript</li>
							<li>• C#</li>
							<li>• Python</li>
						</ul>

						<h2 class="text-white text-2xl font-bold mt-5">Frameworks</h2>

						<ul class="text-white">
							<li>• NestJS</li>
							<li>• Nuxt</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.btn-social {
	transition: all 0.1s ease-in-out;

	background-color: transparent !important;
	border: 1px solid transparent;

	font-size: 32px;

	margin-right: 10px;
}

.btn-social:hover {
	background-color: #ffffff11 !important;
}

.section {
	position: relative;
	z-index: 1;

	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	/* min-height: 100vh; */
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
			pointer-events: none;
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

.link {
	cursor: pointer;
	transition: all 0.1s ease-in-out;

	border-bottom: 1px dotted #ffffff55;

	&:hover {
		color: #ffffffdd;
		border-bottom: 1px solid #ffffff55;

		// add # to the beginning of the url
		&::before {
			content: "# ";
		}
	}
}
</style>
