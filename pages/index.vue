<template>
	<section
		class="container mx-auto h-screen lg:h-auto flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center px-5 pt-12 sm:px-16 lg:pt-0 lg:px-8 lg:mt-20"
	>
		<div class="text-content flex flex-col self-start lg:self-auto">
			<h1 class="title title-first text-2xl md:text-5xl lg:text-4xl mt-5">
				Les plus belles <span class="title-third">pièces</span>, <br />
				au meilleur prix
			</h1>
			<p
				class="content text-gray-700 text-sm md:text-1xl lg:text-base font-light text-justify mt-2 md:my-4"
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
			src="~/assets/img/catch-goldfinal.png"
			alt="homme qui est en train d'attraper une pièce d'or avec un filet à papillons"
		/>
	</section>
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
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
	.title {
		font-size: 1.75rem;
	}
	.content {
		font-size: 1rem;
	}
	img {
		width: 80%;
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
	img {
		width: 100%;
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
		font-size: 1.15rem;
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
