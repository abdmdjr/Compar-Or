<template>
	<section
		class="container mx-auto h-screen flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center px-5 pt-5 sm:px-10"
	>
		<div class="text-content flex flex-col">
			<h1 class="text-2xl md:text-5xl lg:text-4xl mt-4 text-gray-800">
				Les plus belles pièces, au meilleur prix.
			</h1>
			<p
				class="iphone6 text-indigo-200 text-xs md:text-1xl lg:text-base font-light text-justify my-2 md:my-6"
			>
				Nous comparons les offres pour vous aider dans votre quête d’achat d’or
				: de la prime à la livraison, tout est calculé pour vous faire gagner du
				temps... et de l’argent !
			</p>
			<nuxt-link to="/coins"
				><button
					class="w-28 mt-2 p-4 rounded-lg text-sm font-medium bg-yellow-400"
				>
					Trouvez votre pièce
				</button>
			</nuxt-link>
		</div>
		<img
			src="~/assets/img/catch-gold.png"
			class="catch-gold md:w-479 lg:w-820 z-0"
			alt=""
		/>
	</section>
</template>

<script>
export default {}
</script>

<style scoped>
/* iPhone 6, 6S, 7 and 8 */
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
	.iphone6 {
		color: aqua;
	}
}
/* iPhone 6/7/8 + */
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
	.iphone6 {
		color: rgb(0, 255, 21);
	}
}
/* iPhone XS */
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
	.iphone6 {
		color: rgb(180, 13, 116);
	}
}
/* iPhone XR */
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
	.iphone6 {
		color: rgb(6, 49, 59);
	}
}
/* iPhone XS Max */
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
	.iphone6 {
		color: rgb(255, 153, 0);
	}
}
</style>
