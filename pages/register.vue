<template>
	<section class="flex flex-col items-center md:h-screen md:flex-row">
		<div class="container mx-auto">
			<div class="flex justify-center px-2 py-6">
				<div class="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-lg">
					<div
						class="relative hidden w-full h-auto bg-cover border-r rounded-l-lg bg-blue-1300 md:block lg:w-6/12"
					>
						<div class="relative z-10 m-12 text-left">
							<h2
								class="title mt-12 mb-2 text-2xl tracking-tighter sm:text-3xl "
							>
								Créer un compte
							</h2>
							<div
								class="w-full mt-16 mb-8 text-sm md:text-lg font-light leading-relaxed text-gray-900 sm:md:w-3/3"
							>
								Et bénéficiez gratuitement d'analyse des prix de vos pièces
								préférées : likez vos pièces favorites et retrouvez des
								graphiques detaillés dans votre espace personnel
							</div>
						</div>
					</div>
					<div
						class="w-full px-8 pt-32 pb-15 md:py-24 border-gray-100 rounded-lg lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none"
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
									<ValidationProvider
										v-slot="{ errors }"
										name="username"
										rules="required|alpha|min:3|max:25"
									>
										<label
											class="block text-base font-medium leading-relaxed text-gray-700"
											>Prénom</label
										>
										<input
											v-model="form.username"
											type="text"
											name="username"
											placeholder="Votre prénom"
											class="w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
										/>
										<span class="error">{{ errors[0] }}</span>
									</ValidationProvider>
									<div class="mt-4">
										<ValidationProvider
											v-slot="{ errors }"
											name="email"
											rules="required|email"
										>
											<label
												class="block text-base font-medium leading-relaxed text-gray-700"
												>Adresse e-mail</label
											>
											<input
												v-model="form.email"
												type="text"
												name="email"
												placeholder="Votre adresse e-mail"
												class="w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
											/>
											<span class="error">{{ errors[0] }}</span>
											<span class="error">{{ userExist }}</span>
										</ValidationProvider>
									</div>
									<div>
										<div class="mt-4">
											<ValidationProvider
												v-slot="{ errors }"
												name="password"
												rules="required|min:8|password:@confirmPassword"
												mode="passive"
											>
												<label
													class="text-base font-medium leading-relaxed text-gray-700"
												>
													Mot de passe
												</label>
												<input
													v-model="form.password"
													class="block w-full px-4 py-2 mt-2 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
													type="password"
													placeholder="Mot de passe : 8 caractères min"
												/>
												<span class="error">{{ errors[0] }}</span>
											</ValidationProvider>
										</div>
									</div>
									<div class="mt-4">
										<ValidationProvider name="confirmPassword" rules="required">
											<label
												class="text-base font-medium leading-relaxed text-gray-700"
											>
												Confirmation du mot de passe
											</label>
											<input
												v-model="confirmPassword"
												class="block w-full px-4 py-2 mt-2 text-base text-blue-700 bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
												type="password"
												placeholder="Confirmez votre mot de passe"
											/>
										</ValidationProvider>
									</div>
									<button
										type="submit"
										class="block w-full btn-detail px-4 py-3 mt-6 rounded"
										@submit.prevent="handleSubmit(onSubmit)"
									>
										Créer un compte
									</button>
								</form>
							</ValidationObserver>

							<p class="mt-4 text-center">
								Vous avez déjà un compte ?
								<br />
								<a
									href="#"
									class="font-semibold text-blue-500 hover:text-blue-700"
									>Se connecter</a
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
	ValidationProvider,
	ValidationObserver,
	extend,
	localize
} from 'vee-validate/dist/vee-validate.full'
import fr from 'vee-validate/dist/locale/fr.json'

export default {
	components: {
		ValidationProvider,
		ValidationObserver
	},
	data() {
		return {
			form: {
				username: '',
				email: '',
				password: ''
			},
			confirmPassword: '',
			userExist: ''
		}
	},
	created() {
		localize({ fr })
		localize('fr')
		extend('email', {
			message: 'Réessayez avec une adresse e-mail valide'
		})
		extend('required', {
			message: 'Ce champ est obligatoire'
		})

		extend('alpha', {
			message: 'Ce champ ne doit contenir que des lettres'
		})

		extend('min', {
			validate(value, args) {
				return value.length >= args.length
			},
			params: ['length'],
			message: 'Ce champ doit contenir {length} caractères minimum'
		})

		extend('max', {
			validate(value, args) {
				return value.length <= args.length
			},
			params: ['length'],
			message: 'Ce champ ne doit pas contenir plus de {length} caractères'
		})

		extend('password', {
			params: ['target'],
			validate(value, { target }) {
				return value === target
			},
			message: 'Les deux mots de passe ne sont pas identiques'
		})
	},
	methods: {
		async onSubmit() {
			try {
				await axios.post('/api/register/', this.form)
			} catch (err) {
				this.userExist = err.response.data
				console.log(this.userExist)
			}
		}
	}
}
</script>
<style scoped>
.error {
	font-size: 0.8rem;
	opacity: 1;
	@apply mt-1 text-red-400 transition-all duration-150 ease-in-out;
}
</style>
