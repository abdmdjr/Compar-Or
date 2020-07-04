<template>
	<section
		class="container flex flex-col-reverse md:flex-row justify-center items-center mx-auto mt-4 md:mt-24"
	>
		<div class="text-content flex flex-col mx-auto md:w-310 px-6 md:p-0 z-10">
			<h1 class="text-2xl lg:text-4xl mt-4 text-gray-800">
				Les plus belles pièces,<br />
				au meilleur prix.
			</h1>
			<p class="text-xs md:text-sm font-light text-justify w-208 my-2">
				Nous comparons les offres pour vous aider dans votre quête d’achat d’or
				: de la prime à la livraison, tout est calculé pour vous faire gagner du
				temps... et de l’argent !
			</p>
			<nuxt-link to="/coin"
				><button
					class="w-40 mt-2 p-4 rounded-lg text-sm font-medium bg-yellow-400"
				>
					Trouvez votre pièce
				</button>
			</nuxt-link>
		</div>
		<div class="catch-gold mx-auto w-249 md:w-700 z-0">
			<img src="~/assets/img/catch-gold.png" class="" alt="" />
		</div>
	</section>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
	font-family: 'Dosis', sans-serif;
	font-weight: 600;
}
p,
button {
	font-family: 'Exo', sans-serif;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
	h1 {
		font-size: 1.8rem;
	}
	p {
		width: 248px;
	}
}
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
	h1 {
		font-size: 2.2rem;
	}
	p {
		@apply text-sm;
		@apply my-4;
		width: 302px;
	}
	.catch-gold {
		width: 300px;
	}
}
</style>
