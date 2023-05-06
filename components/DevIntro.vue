<script setup lang="ts">
defineProps<{ isWallpaper?: boolean }>();

const section = ref<HTMLElement>();

function scrollDown() {
	if (section.value) {
		scrollToPosition(section.value.offsetTop, 300);
		currentSection.value = 1;
	}
}

const currentSection = useCurrentSection();

onMounted(() => {
	section.value = document.querySelectorAll(".section")[1] as unknown as HTMLElement;
	// currentSection.value = 1;
});
</script>

<template>
	<div>
		<LottieView class="animate__animated animate__fadeIn" style="position: absolute; left: 50%; transform: translateX(-50%)" :style="`top: -24px;`" animationLink="/party-penguin.json" :height="200" :width="200" />
		<div class="container">
			<div class="box">
				<div class="title">
					<span class="block"></span>
					<h1>Lucas Gardini<span></span></h1>
				</div>

				<div class="role">
					<div class="block"></div>
					<p>Fullstack Developer</p>
				</div>
			</div>
		</div>

		<div class="scroll-down-indicator" @click="scrollDown" v-if="!isWallpaper">
			<LottieView animation-link="/scroll-down.json" :height="50" :width="50" />
		</div>
	</div>
</template>

<style lang="scss">
.scroll-down-indicator {
	position: fixed;
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

.container {
	width: 100%;
	height: 100vh;
	background: transparent;

	display: flex;
	justify-content: center;
	align-items: center;
}

.box {
	width: 250px;
	height: 250px;
	position: relative;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.title {
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	height: 50px;

	.block {
		width: 0%;
		height: inherit;
		background: #14a44d;
		position: absolute;

		display: flex;

		&:not(.no-animation) {
			animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
		}
	}

	h1 {
		font-family: "Poppins";
		color: #fff;
		font-size: 32px;
		opacity: 1;
		display: flex;
		align-items: baseline;
		position: relative;

		&:not(.no-animation) {
			-webkit-animation: mainFadeIn 2s forwards;
			-o-animation: mainFadeIn 2s forwards;
			animation: mainFadeIn 2s forwards;
			animation-delay: 1.6s;
			opacity: 0;
		}

		span {
			width: 7px;
			height: 7px;

			-webkit-border-radius: 50%;
			-moz-border-radius: 50%;
			border-radius: 50%;

			background: #14a44d;

			margin-left: 5px;
			margin-top: -10px;
			position: absolute;
			bottom: 13px;
			right: -12px;

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
