<template>
	<div>
		<ClientOnly>
			<HijackedScroll>
				<div>
					<div class="section one">
						<DevIntro />
					</div>
					<div class="section two" style="height: 8000px"></div>
				</div>
			</HijackedScroll>
		</ClientOnly>

		<ClientOnly>
			<Forwarder />
		</ClientOnly>
	</div>
</template>
