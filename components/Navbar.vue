<template>
	<div class="navbar w-full absolute lg:static top-0 z-10 text-white">
		<nav class="container mx-auto relative px-5 py-3 sm:py-4 md:px-16 lg:px-8">
			<ul class="flex flex-row justify-between items-center">
				<li>
					<nuxt-link to="/" class="flex flex-row items-center">
						<img src="~assets/img/compar.png" class="h-5 sm:h-8 mr-1 sm:mr-3" />
						<h1 class="title-first text-1xl sm:text-3xl font-normal">
							Compar'<span class="title-second">Or</span>
						</h1>
					</nuxt-link>
				</li>
				<li class="h-6">
					<nuxt-link
						class="msg text-white no-underline block material-icons"
						to="/contact"
					>
						sms
					</nuxt-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Ipad Pro */
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
	nav {
		@apply px-8;
	}
}
/* .bg-navbar {
	background: linear-gradient(220.01deg, #94d5ff -300%, #1a4269 70%);
} */
.navbar::after {
	content: '';
	background: -webkit-linear-gradient(220.01deg, #ffcc2f 0%, #ef9834 100%);
	@apply block w-screen h-1;
}

.msg {
	font-size: 24px;
}
@screen lg {
	.msg {
		font-size: 30px;
	}
}
</style>
