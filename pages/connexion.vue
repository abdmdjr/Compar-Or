<template>
	<section class="flex flex-col items-center h-screen md:flex-row">
		<div class="container mx-auto">
			<div class="flex justify-center px-2 py-6">
				<div class="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl">
					<div
						class="relative hidden w-full h-auto bg-cover border-r rounded-l-lg bg-blue-1300 lg:block lg:w-6/12"
					>
						<div class="relative z-10 m-12 text-left">
							<h2
								class="mt-12 mb-2 text-2xl font-semibold tracking-tighter sm:text-3xl"
							>
								Créer un compte
							</h2>
							<div
								class="w-full mt-16 mb-8 text-base leading-relaxed text-gray-900 sm:md:w-3/3 lg:text-lg"
							>
								Et bénéficiez gratuitement d'analyse des prix de vos pièces
								préférées : likez vos pièces favorites et retrouvez des
								graphiques detaillés dans votre espace personnel
							</div>
						</div>
					</div>
					<div
						class="w-full px-8 py-24 border-gray-100 rounded-lg bg-blue-1300 lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s"
					>
						<div class="relative z-10 text-left">
							<div class="flex justify-enter lg:py-6">
								<!-- <button
									type="button"
									class="inline-flex w-full px-4 py-3 font-semibold text-blue-700 border border-gray-300 rounded-lg bg-blue-1300 hover:bg-blue-700 hover:text-white focus:bg-gray-100"
								>
									<div class="flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											class="w-6 h-6"
											viewBox="0 0 48 48"
										>
											<defs>
												<path
													id="a"
													d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
												/>
											</defs>
											<clipPath id="b">
												<use xlink:href="#a" overflow="visible" />
											</clipPath>
											<path
												clip-path="url(#b)"
												fill="#FBBC05"
												d="M0 37V11l17 13z"
											/>
											<path
												clip-path="url(#b)"
												fill="#EA4335"
												d="M0 11l17 13 7-6.1L48 14V0H0z"
											/>
											<path
												clip-path="url(#b)"
												fill="#34A853"
												d="M0 37l30-23 7.9 1L48 0v48H0z"
											/>
											<path
												clip-path="url(#b)"
												fill="#4285F4"
												d="M48 48L17 24l-4-3 35-10z"
											/>
										</svg>
										<span class="ml-4">
											Log in with Google
										</span>
									</div>
								</button> -->
							</div>
							<ValidationObserver v-slot="{ handleSubmit }" name="form">
								<form @submit.prevent="handleSubmit(onSubmit)">
									<div class="mt-4">
										<label
											class="block text-base font-medium leading-relaxed text-gray-700"
											>Adresse mail</label
										>
										<input
											v-model="form.email"
											type="email"
											name="email"
											placeholder="Votre e-mail"
											class="w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
											autofocus
											autocomplete
											required
										/>
									</div>
									<div>
										<div class="mt-4">
											<label
												class="text-base font-medium leading-relaxed text-gray-700"
												for="password"
												minlength="6"
											>
												Mot de passe
											</label>
											<input
												v-model="form.password"
												class="block w-full px-4 py-2 mt-2 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
												type="password"
												placeholder="Mot de passe"
											/>
											<p class="mt-1 text-xs italic text-blue-500">
												(6 caractères minimum)
											</p>
										</div>
									</div>
									<button
										type="submit"
										class="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-blue-700 hover:from-blue-500 to-blue-500 hover:to-blue-700 focus:shadow-outline focus:outline-none"
										@submit.prevent="handleSubmit(onSubmit)"
									>
										Se connecter
									</button>
								</form>
							</ValidationObserver>

							<p class="mt-8 text-center">
								Vous n'avez pas encore de compte?
								<a
									href="#"
									class="font-semibold text-blue-500 hover:text-blue-700"
									>S'inscrire</a
								>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import axios from 'axios'
import {
	// ValidationProvider,
	ValidationObserver
} from 'vee-validate/dist/vee-validate.full'
// import fr from 'vee-validate/dist/locale/fr.json'

export default {
	components: {
		// ValidationProvider,
		ValidationObserver
	},
	data() {
		return {
			form: {
				email: '',
				password: ''
			}
		}
	},
	methods: {
		async onSubmit() {
			try {
				await axios.post('/api/connexion/', this.form)
			} catch (e) {
				console.error(e)
			}
		}
	},
	head() {
		return {
			title: "Compar'Or - Se connecter"
		}
	}
}
</script>
