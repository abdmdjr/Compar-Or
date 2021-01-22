<template>
	<nav class="container mx-auto px-5 sm:px-16 lg:px-8 sm:mt-5">
		<div class="">
			<div class="relative flex items-center justify-between h-16 lg:h-24">
				<div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
					<!-- Mobile menu button-->
					<button
						v-click-outside="hideMenu"
						class="inline-flex items-center justify-center py-2 rounded-md text-blue-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						aria-expanded="false"
						@click="showMenu = !showMenu"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							v-if="!showMenu"
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
						<svg
							v-if="showMenu"
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<div
					class="flex-1 flex items-center justify-center lg:items-stretch lg:justify-between"
				>
					<nuxt-link to="/">
						<div class="flex-shrink-0 flex items-center space-x-2 sm:space-x-3">
							<img
								class="h-5 sm:h-6 w-auto"
								src="~/assets/img/compar.png"
								alt="Workflow"
							/>
							<h1 class="font-bold tracking-tight text-lg sm:text-2xl">
								Compar'<span class="title-second">Or</span>
							</h1>
						</div>
					</nuxt-link>
					<div class="hidden lg:block sm:ml-6">
						<div class="flex space-x-4">
							<nuxt-link
								to="/pieces"
								class="btn-detail px-4 py-3 rounded-md text-sm font-medium"
								>Trouvez votre pièce</nuxt-link
							>
							<nuxt-link to="" class="px-4 py-3 rounded-md text-sm font-medium"
								>Cours de l'or</nuxt-link
							>
							<nuxt-link
								to="inscription"
								class="px-4 py-3 rounded-md text-sm font-medium"
								>S'inscrire</nuxt-link
							>
							<nuxt-link
								to="connexion"
								class="px-4 py-3 rounded-md text-sm font-medium"
								>Se connecter</nuxt-link
							>
						</div>
					</div>
				</div>
				<div
					class="absolute inset-y-0 right-0 flex items-center lg:inset-auto lg:ml-6 lg:pr-0"
				>
					<!-- Profile dropdown -->
					<div class="lg:hidden ml-3 relative">
						<div>
							<button
								id="user-menu"
								v-click-outside="hideDropDown"
								class="flex"
								aria-haspopup="true"
								@click="showDropDown = !showDropDown"
							>
								<span class="sr-only">Open user menu</span>
								<span class="material-icons">
									account_circle
								</span>
							</button>
						</div>
						<transition
							enter-active-class="transition ease-out duration-100"
							enter-class="transform opacity-0 scale-95"
							enter-to-class="transform opacity-100 scale-100"
							leave-active-class="transition ease-in duration-75"
							leave-class="transform opacity-100 scale-100"
							leave-to-class="transform opacity-0 scale-95"
						>
							<div
								v-show="showDropDown"
								class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu"
							>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
									>Your Profile</a
								>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
									>Settings</a
								>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
									>Sign out</a
								>
							</div>
						</transition>
					</div>
				</div>
			</div>
		</div>
		<div
			class="lg:hidden absolute w-48 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5"
		>
			<transition
				enter-active-class="transition ease-out duration-100"
				enter-class="transform opacity-0 scale-95"
				enter-to-class="transform opacity-100 scale-100"
				leave-active-class="transition ease-in duration-75"
				leave-class="transform opacity-100 scale-100"
				leave-to-class="transform opacity-0 scale-95"
			>
				<div v-show="showMenu" class="py-2 space-y-1">
					<a
						href="#"
						class="px-4 py-2 text-sm text-gray-700 block rounded-md font-medium"
						>Trouver votre pièce</a
					>
					<a
						href="#"
						class="px-4 py-2 text-sm text-gray-700 block rounded-md font-medium"
						>Team</a
					>
					<a
						href="#"
						class="px-4 py-2 text-sm text-gray-700 block rounded-md font-medium"
						>Projects</a
					>
					<a
						href="#"
						class="px-4 py-2 text-sm text-gray-700 block rounded-md font-medium"
						>Calendar</a
					>
				</div>
			</transition>
		</div>
	</nav>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
	directives: {
		clickOutside: vClickOutside.directive
	},
	data() {
		return {
			showMenu: false,
			showDropDown: false
		}
	},
	methods: {
		hideDropDown() {
			this.showDropDown = false
		},
		hideMenu() {
			this.showMenu = false
		}
	}
}
</script>
<style>
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
	.container {
		@apply px-8;
	}
}
</style>
