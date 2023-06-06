<template>
	<div class="brand cursor-pointer" @click="scrollToPosition(0, 500)">
		<h1 class="no-animation">Lucas Gardini<span class="no-animation"></span></h1>
	</div>
</template>

<style lang="scss">
.hidden {
	display: none !important;
}

.brand {
	h1 {
		/* font-family: "Poppins"; */
		font-weight: bold;
		color: #fff;
		font-size: 32px;
		opacity: 1;
		display: flex;
		align-items: baseline;
		position: relative;

		@media (max-width: 768px) {
			font-size: 24px;
		}

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
</style>
