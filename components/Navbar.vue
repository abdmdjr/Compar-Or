<template>
	<div class="py-3 w-full absolute top-0 z-10">
		<nav
			class="container mx-auto relative flex items-center justify-between flex-wrap px-8 sm:px-16 lg:px-8"
		>
			<h1 class="font-medium text-xl tracking-tight">Compar'Or</h1>
			<div class="block sm:hidden">
				<button class="flex items-center text-teal-lighter" @click="toggle">
					<i class="material-icons text-black">menu</i>
				</button>
			</div>
			<div
				:class="open ? 'block' : 'hidden'"
				class="burger w-full flex-grow sm:flex sm:items-center sm:w-auto py-5 rounded-md bg-white bg-opacity-50"
			>
				<ul
					class="list flex flex-col sm:flex-row sm:justify-end text-sm sm:flex-grow sm:space-x-8"
				>
					<li>
						<a
							href="#"
							class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter"
						>
							Trouvez votre pièce
						</a>
					</li>
					<li>
						<a
							href="#"
							class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter"
						>
							Cours de l'or
						</a>
					</li>
					<li>
						<a
							href="#"
							class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter"
						>
							Blog
						</a>
					</li>
					<li>
						<a
							href="#"
							class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter"
						>
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
	.container {
		@apply px-5;
	}
}
</style>
