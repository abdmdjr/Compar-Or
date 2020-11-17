<template>
	<div class="w-full absolute top-0 z-10 bg-blue-900 text-white">
		<nav
			class="container mx-auto relative flex items-center justify-between flex-wrap px-8 md:px-16 lg:px-8"
		>
			<h1 class="font-medium text-xl tracking-tight text-white">Compar'Or</h1>
			<div class="block sm:hidden">
				<button class="flex items-center text-teal-lighter" @click="toggle">
					<i class="material-icons text-white">double_arrow</i>
				</button>
			</div>
			<div
				:class="open ? 'block' : 'hidden'"
				class="burger w-full flex-grow sm:flex sm:items-center sm:w-auto py-5 rounded-md"
			>
				<ul
					class="list flex flex-col sm:flex-row sm:justify-end text-sm sm:flex-grow sm:items-center sm:space-x-8"
				>
					<li>
						<button class="btn-price py-2 px-4 text-white rounded-md">
							<a
								href="#"
								class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter"
							>
								Trouvez votre pièce
							</a>
						</button>
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
		<div class="base h-1"></div>
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
.base {
	background: linear-gradient(90deg, #ffe2e2 0%, #f5b592 46.88%, #f2a68b 100%);
}
.btn-price {
	background: linear-gradient(180deg, #f7c298 0%, #f5b592 46.88%, #f2a68b 100%);
}
</style>
