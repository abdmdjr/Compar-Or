<template>
	<section
		class="container mx-auto h-screen flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center px-9 pt-5 sm:px-16"
	>
		<div class="text-content flex flex-col">
			<h1 class="title text-2xl md:text-5xl lg:text-4xl mt-5 text-gray-800">
				Les plus belles pièces, <br />
				au meilleur prix
			</h1>
			<p
				class="content text-gray-700 text-sm md:text-1xl lg:text-base font-light text-justify mt-2 md:my-4"
			>
				Nous comparons les offres pour vous aider dans
				<strong>votre quête d’achat d’or.</strong>
			</p>
			<button
				class="btn mt-5 lg:mt-2 rounded-lg text-sm text-white font-medium"
			>
				<nuxt-link to="/coins"> Trouvez votre pièce </nuxt-link>
			</button>
		</div>
		<img
			src="~/assets/img/catch-gold1.png"
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
.btn {
	width: 180px;
	padding: 0.7rem 1.3rem;
	background: linear-gradient(180deg, #f7c298 0%, #f2a68b 100%);
	box-shadow: 0px 0px 4px #dfdfdf;
	border-radius: 7px;
}
/* mini mobile */
@media only screen and (min-device-width: 240px) and (max-device-width: 260px) {
	.title {
		font-size: 0.8rem;
	}
	.content {
		font-size: 0.6rem;
	}
	.btn {
		width: 120px;
		font-size: 0.5rem;
	}
	img {
		width: 100px;
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
	.btn {
		width: 190px;
		font-size: 1rem;
	}
}
/* iPhone 6/7/8 + */
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
	.title {
		font-size: 2.098rem;
	}
	.content {
		font-size: 1.15rem;
	}
	.btn {
		width: 232px;
		padding: 0.9rem 1.5rem;
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
	.btn {
		width: 230px;
		padding: 1rem 1.6rem;
		font-size: 1.15rem;
	}
}
/* iPhone XR */
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
	.title {
		font-size: 2.098rem;
	}
	.content {
		font-size: 1.15rem;
	}
	.btn {
		width: 232px;
		padding: 0.9rem 1.5rem;
		font-size: 1.15rem;
	}
}
/* Ipad */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
	.title {
		font-size: 3.9rem;
		line-height: 1.3;
		@apply mt-8;
	}
	.content {
		font-size: 1.5rem;
	}
	.btn {
		width: 232px;
		padding: 0.9rem 1.5rem;
		font-size: 1.15rem;
	}
	img {
		width: 510px;
	}
}
/* Ipad Pro */
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
	.container {
		@apply px-5;
	}
	.title {
		font-size: 4.4rem;
		line-height: 1.3;
		@apply mt-8;
	}
	.content {
		font-size: 2rem;
	}
	.btn {
		width: 402px;
		padding: 1.4rem 3.7rem;
		font-size: 2rem;
	}
	img {
		width: 730px;
	}
}

@media only screen and (min-width: 1224px) {
	.text-content {
		width: 400px;
	}
	.title {
		font-size: 2.454rem;
		line-height: 1.3;
		@apply mt-0;
	}
	.content {
		font-size: 1.15rem;
	}
	.btn {
		width: 200px;
		padding: 1rem 1rem;
		font-size: 1rem;
	}
	img {
		position: relative;
		width: 680px;
	}
}
</style>
