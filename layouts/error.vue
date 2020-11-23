<template>
	<main
		class="container mx-auto h-screen flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center px-8 pt-5 sm:px-16 lg:px-8"
	>
		<div class="flex flex-col">
			<h1
				v-if="error.statusCode === 404"
				class="text-2xl md:text-5xl lg:text-5xl text-gray-800"
			>
				Erreur 404.
			</h1>
			<p
				class="content text-gray-700 text-sm md:text-1xl lg:text-base font-light text-justify"
			>
				La page "{{ this.$route.path }}" n'existe pas.
			</p>
			<nuxt-link to="/coins" class="mt-4"
				><button class="btn mt-5 lg:mt-2 rounded text-sm font-medium">
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
.btn {
	width: auto;
	padding: 0.7rem 1.3rem;
	background: linear-gradient(180deg, #f7c298 0%, #f5b592 46.88%, #f2a68b 100%);
	border-radius: 7px;
	font-family: 'Ubuntu';
	color: white;
}
img {
	width: 650px;
}
</style>
