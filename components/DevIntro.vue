<script setup lang="ts">
defineProps<{ isWallpaper?: boolean }>();
const emit = defineEmits(["scrolledDown"]);

const section = ref<HTMLElement>();
const showMouse = ref(false);

function scrollDown() {
	if (section.value) {
		scrollToPosition(section.value.offsetTop + 10, 300);

		emit("scrolledDown");
	}
}

onMounted(() => {
	const url = new URL(window.location.href);
	const subdomain = url.hostname.split(".")[0];

	if (subdomain && (subdomain === "lucas" || subdomain === "gardini" || subdomain === "localhost")) {
		showMouse.value = true;
	}

	section.value = document.querySelectorAll(".section")[1] as unknown as HTMLElement;
});
</script>

<template>
	<div>
		<ClientOnly>
			<div style="position: absolute; left: 50%; transform: translateX(-50%); top: -24px">
				<LottieView class="animate__animated animate__fadeInDown" animationLink="/party-penguin.json" :height="200" :width="200" />
			</div>
		</ClientOnly>
		<div class="dev-intro ml-auto mr-auto">
			<div class="box">
				<div class="animate__animated animate__fadeIn title">
					<h1 class="bold">Lucas Gardini<span class="no-animation"></span></h1>
				</div>

				<div class="animate__animated animate__fadeInUp text-center text-white text-xl bg-green-600">
					<p>Fullstack Developer</p>
				</div>
			</div>
		</div>

		<div class="scroll-down-indicator z-50" @click="scrollDown" v-if="!isWallpaper && showMouse">
			<LottieView animation-link="/scroll-down.json" class="animate__animated animate__fadeInUp" :height="50" :width="50" />
		</div>
	</div>
</template>

<style lang="scss">
.scroll-down-indicator {
	position: absolute;
	bottom: 50px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 999;
	height: 100px;
	display: flex;
	flex-direction: row;
	align-items: center;

	color: white;
	font-weight: bold;

	cursor: pointer;
}

.dev-intro {
	/* width: 100vh;	 */
	height: 100vh;
	background: transparent;

	display: flex;
	justify-content: center;
	align-items: center;
}

.box {
	/* width: 250px; */
	height: 250px;
	position: relative;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.title {
	display: flex;
	align-items: center;
	height: 50px;

	h1 {
		/* font-family: "Poppins"; */
		font-weight: bold;
		color: #fff;
		font-size: 48px;
		opacity: 1;
		display: flex;
		align-items: baseline;
		position: relative;

		@media (max-width: 768px) {
			font-size: 24px;
		}

		span {
			width: 10px;
			height: 10px;

			-webkit-border-radius: 50%;
			-moz-border-radius: 50%;
			border-radius: 50%;

			background: #14a44d;

			margin-left: 5px;
			margin-top: -10px;
			position: absolute;
			bottom: 18px;
			right: -12px;

			@media (max-width: 768px) {
				position: static;
			}

			&:not(.no-animation) {
				width: 0px;
				height: 0px;
				-webkit-animation: load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
				animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
				animation-delay: 2s;
			}
		}
	}
}

.role {
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	height: 30px;
	margin-top: -10px;

	.block {
		width: 0%;
		height: inherit;
		background: #0f783c;
		position: absolute;
		animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
		animation-delay: 2s;
		display: flex;
	}

	p {
		animation: secFadeIn 2s forwards;
		animation-delay: 3.2s;
		opacity: 0;
		font-weight: 400;
		font-family: "Lato";
		color: #ffffff;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 5px;
	}
}

@keyframes mainBlock {
	0% {
		width: 0%;
		left: 0;
	}
	50% {
		width: 100%;
		left: 0;
	}
	100% {
		width: 0;
		left: 100%;
	}
}

@keyframes secBlock {
	0% {
		width: 0%;
		left: 0;
	}
	50% {
		width: 100%;
		left: 0;
	}
	100% {
		width: 0;
		left: 100%;
	}
}

@keyframes mainFadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes popIn {
	0% {
		width: 0px;
		height: 0px;
		background: #14a44d;
		border: 0px solid #ddd;
		opacity: 0;
	}
	50% {
		width: 10px;
		height: 10px;
		background: #14a44d;
		opacity: 1;
		bottom: 45px;
	}
	65% {
		width: 7px;
		height: 7px;
		bottom: 0px;
		width: 15px;
	}
	80% {
		width: 10px;
		height: 10px;
		bottom: 20px;
	}
	100% {
		width: 7px;
		height: 7px;
		background: #14a44d;
		border: 0px solid #222;
		bottom: 13px;
	}
}

@keyframes secFadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 0.5;
	}
}

@keyframes top {
	0% {
		opacity: 0;
		bottom: -80px;
	}
	100% {
		opacity: 1;
		bottom: 0px;
	}
}

@keyframes icon {
	0% {
		opacity: 0;
		transform: scale(0);
	}
	50% {
		opacity: 1;
		transform: scale(1.3) rotate(-02deg);
	}
	100% {
		opacity: 1;
		bottom: 0px;
	}
}
</style>
