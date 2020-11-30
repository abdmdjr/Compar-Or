<template>
	<main class="">
		<section
			class="container mx-auto h-screen flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center pt-12 px-5 sm:px-16 lg:pt-0 lg:px-8"
		>
			<div class="text-content flex flex-col self-start lg:self-auto">
				<h1 class="title title-first text-2xl md:text-5xl lg:text-4xl mt-5">
					Les plus belles <span class="title-third">pièces</span>, <br />
					au meilleur prix
				</h1>
				<p
					class="content text-sm md:text-lg font-light text-justify mt-2 md:my-4"
				>
					Nous comparons les offres pour vous aider dans
					<strong>votre quête d’achat d’or.</strong>
				</p>
				<nuxt-link class="mt-5 lg:mt-3 self-start" to="/coins">
					<button
						class="btn flex items-center align-center px-4 py-3 text-sm rounded"
					>
						Trouvez votre pièce
					</button>
				</nuxt-link>
			</div>
			<img
				class=""
				src="~/assets/img/catch-gold.png"
				alt="homme qui est en train d'attraper une pièce d'or avec un filet à papillons"
			/>
		</section>
		<section class="container mx-auto  px-5 sm:px-16 lg:pt-0 lg:px-8">
			<div class="flex flex-col">
				<h2 class="title-first text-xl md:text-5xl lg:text-4xl">
					Pourquoi Compar'Or ?
				</h2>
				<div class="flex flex-row mt-18 mb-10 items-center">
					<img
						class="h-32 sm:h-auto sm:flex-1"
						src="~/assets/img/first-guy-list.png"
						alt="homme qui est en train d'attraper une pièce d'or avec un filet à papillons"
					/>
					<p class="text-sm md:text-lg font-light text-justify md:my-4 pl-5">
						L’achat d’or en ligne est <strong>une solution sûre</strong> de nos
						jours : du paiement à la livraison,
						<strong>tout est sécurisé</strong> pour nous garantir
						<strong>les meilleurs services et des produits de qualité</strong>.
					</p>
				</div>
			</div>
			<div class="flex flex-col">
				<h2 class="title-first text-xl md:text-5xl lg:text-4xl">
					Quelle boutique de pièce d’or en ligne fait les meilleurs prix ?
				</h2>
				<div class="flex flex-row-reverse mt-18 items-center">
					<img
						class="h-32 sm:h-auto sm:flex-1"
						src="~/assets/img/second-guy-list.png"
						alt="homme qui est en train d'attraper une pièce d'or avec un filet à papillons"
					/>
					<p class="text-sm md:text-lg font-light text-justify md:my-4 pr-5">
						<strong>Grâce à Compar’Or</strong>, faites votre choix en toute
						sérénité ! Le tableau comparatif vous aidera à
						<strong>trouver le meilleur prix</strong> pour votre futur pièce !
					</p>
				</div>
			</div>
			<nuxt-link class="flex mt-5 lg:mt-3" to="/coins">
				<button class="btn mx-auto px-4 py-3 text-sm rounded">
					Trouvez votre pièce
				</button>
			</nuxt-link>
		</section>
		<footer class="h-24 w-full mt-32 bg-blue-900"></footer>
	</main>
</template>

<script>
export default {
	head() {
		return {
			title: "Compar'Or - Trouver votre pièce"
		}
	}
}
</script>

<style scoped>
/* mini mobile */
@media only screen and (min-device-width: 100px) and (max-device-width: 260px) {
	.title {
		font-size: 0.8rem;
	}
	.content {
		font-size: 0.6rem;
	}
	img {
		width: 100px;
	}
}
/* iPhone 5 */
@media only screen and (max-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
	.title {
		font-size: 1.75rem;
	}
	.content {
		font-size: 1rem;
	}
	img {
		width: 75%;
	}
}
/* iPhone 6, 6S, 7 and 8 */
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
	.title {
		font-size: 1.85rem;
	}
	.content {
		font-size: 1rem;
	}
}
/* iPhone 6/7/8 + */
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) {
	.title {
		font-size: 2.098rem;
	}
	.content {
		font-size: 1.15rem;
	}
}
/* iPhone XS */
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
	.title {
		font-size: 1.85rem;
		@apply mt-10;
	}
	.content {
		font-size: 1.15rem;
	}
}
/* iPhone XR */
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
	.title {
		font-size: 2.098rem;
		@apply mt-10;
	}
	.content {
		font-size: 1.15rem;
	}
}

/* XS MAX */
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
	.title {
		@apply mt-10;
	}
}
/* Ipad */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
	.container {
		@apply pt-18;
	}
	.title {
		font-size: 3.1rem;
		line-height: 1.3;
		@apply mt-8;
	}
	.content {
		font-size: 1.6rem;
	}
	.btn {
		font-size: 1.3rem;
		@apply px-6 py-4;
	}
	img,
	.text-content {
		width: 510px;
	}
}
/* Ipad Pro */
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
	.container {
		@apply px-8;
	}
	.title {
		font-size: 4.2rem;
		line-height: 1.3;
		@apply mt-8;
	}
	.content {
		font-size: 2rem;
	}
	.btn {
		font-size: 1.55rem;
		@apply px-10 py-6;
	}
	img,
	.text-content {
		width: 710px;
	}
}

@media only screen and (min-width: 1025px) {
	.text-content {
		width: 400px;
	}
	.title {
		font-size: 2.454rem;
		line-height: 1.3;
		@apply mt-0;
	}
	.content {
		width: 390px;
		font-size: 1.125rem;
	}
	.btn {
		font-size: 1rem;
		@apply px-5 py-3;
	}
	img {
		position: relative;
		width: 60%;
	}
}
</style>
