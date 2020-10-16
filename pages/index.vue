<template>
	<section
		class="container mx-auto h-screen flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center px-8 pt-5 sm:px-16 lg:px-8"
	>
		<div class="text-content flex flex-col">
			<h1 class="title text-2xl md:text-5xl lg:text-4xl mt-5 text-gray-800">
				Les plus belles <span class="important-word">pièces</span>, <br />
				au meilleur prix
			</h1>
			<p
				class="content text-gray-700 text-sm md:text-1xl lg:text-base font-light text-justify mt-2 md:my-4"
			>
				Nous comparons les offres pour vous aider dans
				<strong>votre quête d’achat d’or.</strong>
			</p>
			<nuxt-link to="/coins">
				<button
					class="btn mt-5 lg:mt-2 shadow-sm hover:shadow-lg rounded-lg text-sm text-gray-800 font-medium"
				>
					Trouvez votre pièce
				</button>
			</nuxt-link>
		</div>
		<img
			src="~/assets/img/catch-gold1min.png"
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
.important-word {
	background: linear-gradient(90deg, #9f6cad 0%, #7b5392 100%);
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
.btn {
	width: auto;
	padding: 0.7rem 1.3rem;
	background: #ab81b6;
	border-radius: 7px;
	font-family: 'Ubuntu';
	color: white;
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
	.btn {
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
		padding: 1rem 1.6rem;
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
	.btn {
		padding: 0.9rem 1.5rem;
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
	.title {
		font-size: 3.1rem;
		line-height: 1.3;
		@apply mt-8;
	}
	.content {
		font-size: 1.6rem;
	}
	.btn {
		padding: 1.2rem;
		font-size: 1.6rem;
	}
	img,
	.text-content {
		width: 510px;
	}
}
/* Ipad Pro */
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
	.title {
		font-size: 4.2rem;
		line-height: 1.3;
		@apply mt-8;
	}
	.content {
		font-size: 2rem;
	}
	.btn {
		padding: 1.75rem;
		font-size: 2.15rem;
	}
	img,
	.text-content {
		width: 710px;
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
		width: 222px;
		padding: 1rem 1rem;
		font-size: 1rem;
	}
	img {
		position: relative;
		width: 680px;
	}
}
</style>
