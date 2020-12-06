<template>
	<div class="navbar w-full absolute lg:static top-0 z-10 text-white">
		<nav
			class="container mx-auto relative flex items-center justify-between flex-wrap px-5 py-3 sm:py-4 md:px-16 lg:px-8"
		>
			<nuxt-link to="/">
				<h1 class="title-first text-1xl sm:text-3xl font-normal">
					Compar'<span class="title-second">Or</span>
				</h1>
			</nuxt-link>

			<div class="block sm:hidden">
				<button class="flex items-center" @click="toggle">
					<i class="material-icons">menu</i>
				</button>
			</div>
			<div
				:class="open ? 'block' : 'hidden'"
				class="w-full relative flex-grow sm:flex sm:items-center sm:w-auto"
			>
				<ul
					class="absolute w-screen shadow-lg mt-3 -mx-5 pt-4 pb-8 pl-5 flex flex-col text-lg bg-navbar sm:pl-0 sm:pt-0 sm:mx-0 sm:mt-0 sm:shadow-none sm:w-auto sm:pb-0 sm:static sm:flex-row sm:justify-end sm:flex-grow sm:items-center sm:space-x-8 sm:bg-transparent sm:rounded-none sm:text-lg"
				>
					<li>
						<a
							href="#"
							class="text-white  no-underline block sm:pt-0 sm:inline-block"
						>
							Blog
						</a>
					</li>
					<li>
						<nuxt-link
							class="text-white  no-underline block pt-4 sm:pt-0 sm:inline-block"
							to="/contact"
						>
							Contact
						</nuxt-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	data() {
		return {
			open: false
		}
	},
	methods: {
		toggle() {
			this.open = !this.open
		}
	}
}
</script>

<style scoped>
/* Ipad Pro */
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
	nav {
		@apply px-8;
	}
}
.bg-navbar {
	background: linear-gradient(220.01deg, #94d5ff -300%, #1a4269 70%);
}
.navbar::after {
	content: '';
	background: -webkit-linear-gradient(220.01deg, #ffcc2f 0%, #ef9834 100%);
	@apply block w-screen h-1;
}
</style>
