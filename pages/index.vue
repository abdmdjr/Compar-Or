<template>
	<main>
		<section
			class="container mx-auto h-screen flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center pt-12 px-5 sm:px-16 lg:pt-0 lg:px-8 lg:pb-20"
		>
			<div class="text-content flex flex-col self-start lg:self-auto">
				<h1 class="title title-first text-2xl md:text-5xl lg:text-4xl mt-5">
					Les plus belles <span class="title-third">pièces</span>, <br />
					au meilleur prix
				</h1>
				<div
					class="content text-sm md:text-lg font-light text-justify mt-2 md:my-4"
				>
					Nous comparons les offres pour vous aider dans votre quête
					<h2 class="inline">d’achat d’or.</h2>
				</div>
				<nuxt-link class="mt-5 lg:mt-3 self-start" to="/coins">
					<button
						class="btn-detail flex items-center align-center px-4 py-3 text-sm rounded"
					>
						Trouvez votre pièce
					</button>
				</nuxt-link>
			</div>
			<img
				class="catch-gold"
				src="~/assets/img/catch-gold.png"
				alt="homme qui est en train d'attraper une pièce d'or avec un filet à papillons"
			/>
		</section>
		<section class="relative">
			<img
				class="absolute w-screen h-104 md:h-900 lg:h-96 z-0"
				src="~/assets/img/union.png"
				alt=""
			/>
			<div
				class="container mx-auto px-5 sm:px-16 lg:pt-0 lg:px-32 relative flex flex-wrap"
			>
				<div
					class="flex flex-col justify-center lg:flex-row mt-20 mb-32 md:mt-15 lg:mt-16 lg:mb-32"
				>
					<img
						class="mb-5 lg:mb-0 w-auto lg:w-1/3 lg:h-full"
						src="~/assets/img/first-guy-list.png"
						alt="homme qui est en train d'attraper une pièce d'or avec un filet à papillons"
					/>
					<div class="flex flex-col lg:w-96 lg:ml-20">
						<h2
							class="title-first text-xl md:text-3xl lg:text-4xl mb-4 md:mb-3"
						>
							Acheter de l'or en ligne ?
						</h2>
						<p class="text-sm md:text-lg font-light text-justify">
							L’achat d’or en ligne est <strong>une solution sûre</strong> de
							nos jours : du paiement à la livraison,
							<strong>tout est sécurisé</strong> pour nous garantir
							<strong>les meilleurs services et des produits de qualité</strong
							>.
						</p>
					</div>
				</div>
				<div class="flex flex-col lg:flex-row-reverse justify-center">
					<img
						class="mb-5 lg:mb-0 w-auto lg:w-1/3 lg:h-full"
						src="~/assets/img/second-guy-list.png"
						alt="homme qui est en train d'attraper une pièce d'or avec un filet à papillons"
					/>
					<div class="flex flex-col lg:w-96 lg:mr-20">
						<h2
							class="title-first text-xl md:text-3xl lg:text-4xl mb-4 md:mb-3"
						>
							Pourquoi Compar'Or ?
						</h2>
						<p class="text-sm md:text-lg font-light text-justify">
							<strong>Grâce à Compar’Or</strong>, faites votre choix en toute
							sérénité ! Le tableau comparatif vous aidera à
							<strong>trouver le meilleur prix</strong> pour votre futur pièce !
						</p>
					</div>
				</div>
			</div>
		</section>
		<nuxt-link class="flex mt-10 mb-12 md:mt-15 md:mb-20" to="/coins">
			<button class="btn-detail mx-auto px-4 py-3 text-sm rounded">
				Trouvez votre pièce
			</button>
		</nuxt-link>
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
.content {
	font-family: 'Open Sans', sans-serif;
	color: #1d3c5a;
}
/* mini mobile */
@media only screen and (min-device-width: 100px) and (max-device-width: 260px) {
	.title {
		font-size: 0.8rem;
	}
	.content {
		font-size: 0.6rem;
	}
	.catch-gold {
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
	.catch-gold {
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
	.btn-detail {
		font-size: 1.3rem;
		@apply px-6 py-4;
	}
	.catch-gold,
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
	.btn-detail {
		font-size: 1.55rem;
		@apply px-10 py-6;
	}
	.catch-gold,
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
	.btn-detail {
		font-size: 1rem;
		@apply px-5 py-3;
	}
	.catch-gold {
		position: relative;
		width: 60%;
	}
}
</style>
