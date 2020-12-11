<template>
	<div
		class="container h-screen mx-auto mt-16 sm:mt-24 lg:mt-0 px-5 sm:px-16 lg:px-8 pt-8 mb-12"
	>
		<span class="block md:mb-4 text-xs text-black opacity-75"
			><nuxt-link to="/"> > Retour à l'accueil</nuxt-link></span
		>
		<p class="title-first text-xl md:text-3xl lg:text-4xl mt-5 mb-2">
			Mentions légales
		</p>
		<p class="font-light">
			Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
			la confiance en l'économie numérique, il est précisé aux utilisateurs du
			Site l'identité des différents intervenants dans le cadre de sa
			réalisation et de son suivi.
		</p>
		<p class="title-first text-lg md:text-3xl lg:text-4xl mt-5 mb-2">
			Hébergeur
		</p>
		<p class="font-light">
			Le site compar-or.fr est hébergé par la société Heroku Inc., 650 7th
			Street, San Francisco, CA (tel : +33 1 (877) 563-4311).
		</p>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: "Compar'Or - Mentions légales"
		}
	}
}
</script>

<style></style>
