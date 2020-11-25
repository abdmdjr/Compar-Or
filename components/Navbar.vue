<template>
	<div class="w-full absolute top-0 z-10">
		<nav
			class="container mx-auto relative flex items-center justify-between flex-wrap px-5 py-5 md:px-16 lg:px-8"
		>
			<h1 class="logo-title-first text-1xl sm:text-4xl font-normal">
				Compar'<span class="logo-title-second">Or</span>
			</h1>
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
					class="absolute w-full pb-4 flex flex-col text-lg bg-white bg-opacity-75 rounded-lg sm:pb-0 sm:static sm:flex-row sm:justify-end sm:flex-grow sm:items-center sm:space-x-8 sm:bg-transparent sm:rounded-none sm:text-xl"
				>
					<li>
						<a href="#" class="no-underline block pt-4 sm:pt-0 sm:inline-block">
							Blog
						</a>
					</li>
					<li>
						<a href="#" class="no-underline block pt-4 sm:pt-0 sm:inline-block">
							Contact
						</a>
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
nav {
	color: rgba(71, 87, 103, 1);
}
.logo-title-first {
	font-family: 'Ubuntu', sans-serif;
}
.logo-title-second {
	font-family: 'Overlock SC', cursive;
	background: -webkit-linear-gradient(#ffe985 0%, #fa742b 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
.btn-price {
	background: linear-gradient(180deg, #f7c298 0%, #f5b592 46.88%, #f2a68b 100%);
}
</style>
