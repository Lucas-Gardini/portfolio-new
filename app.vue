<script setup lang="ts">
const currentSection = useCurrentSection();
</script>

<template>
	<div>
		<TopDevName v-if="currentSection !== 0" />

		<ClientOnly>
			<HijackedScroll>
				<div>
					<div class="section one">
						<Backdrop />
						<div style="position: relative; z-index: 2">
							<DevIntro />
						</div>
					</div>
					<div class="section two">
						<div style="position: relative; z-index: 2">
							<DevIntro />
						</div>
					</div>
					<div class="section three">
						<div style="position: relative; z-index: 2">
							<DevIntro />
						</div>
					</div>
					<div class="section four">
						<div style="position: relative; z-index: 2">
							<DevIntro />
						</div>
					</div>
					<div class="section five">
						<div style="position: relative; z-index: 2">
							<DevIntro />
						</div>
					</div>
					<div class="section six">
						<div style="position: relative; z-index: 2">
							<DevIntro />
						</div>
					</div>
				</div>
			</HijackedScroll>
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

	&.one {
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
	}
}
</style>
