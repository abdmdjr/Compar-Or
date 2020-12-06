<template>
	<footer class="navbar text-white">
		<div class="flex flex-col items-center justify-center h-32">
			<nuxt-link to="/">
				<h2 class="title-first text-lg sm:text-1xl font-normal">
					Compar'<span class="title-second">Or</span>
				</h2>
			</nuxt-link>
			<ul class="flex flex-row text-xs md:text-sm font-light text-justify mt-2">
				<nuxt-link to="/coins">
					<li>
						Trouver votre pièce
					</li>
				</nuxt-link>
				<nuxt-link to="/contact">
					<li class="mx-1">
						- Contact -
					</li>
				</nuxt-link>
				<nuxt-link to="/mention-legales">
					<li>
						Mentions légales
					</li>
				</nuxt-link>
			</ul>
			<p class="copy mt-3 font-light text-white">
				Copyright &copy; 2020. Compar'Or. Tous droits réservés.
			</p>
		</div>
	</footer>
</template>

<script>
export default {}
</script>

<style>
.copy {
	font-size: 0.6em;
}
</style>
