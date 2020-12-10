<template>
	<main
		class="container mx-auto h-screen flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center px-8 pt-5 sm:px-16 lg:px-8"
	>
		<div class="flex flex-col mt-8">
			<h1
				v-if="error.statusCode === 404"
				class="text-2xl md:text-5xl lg:text-5xl"
			>
				Erreur 404.
			</h1>
			<p class="text-sm md:text-1xl lg:text-base font-light text-justify">
				La page "{{ this.$route.path }}" n'existe pas.
			</p>
			<nuxt-link to="/coins" class="flex self-start mt-5 lg:mt-5"
				><button class="btn-detail px-4 py-3 text-sm rounded">
					Retour aux pièces
				</button>
			</nuxt-link>
		</div>
		<img src="~/assets/img/404.png" alt="homme qui regarde ses poches vides" />
	</main>
</template>
<script>
export default {
	// eslint-disable-next-line vue/require-prop-types
	props: ['error']
}
</script>
<style scoped>
img {
	width: 650px;
}
</style>
