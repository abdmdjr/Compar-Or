<template>
	<section class="flex flex-col items-center md:h-screen md:flex-row">
		<div class="container mx-auto">
			<div class="flex justify-center px-2 py-6">
				<div class="flex w-full rounded-lg lg:shadow-lg">
					<div
						class="relative hidden w-full h-auto bg-cover border-r rounded-l-lg bg-blue-1300 md:block lg:w-4/5"
					>
						<div class="relative z-10 my-4 mx-12 text-left">
							<div class="flex">
								<span class="material-icons md-36 mr-2"> account_circle </span>
								<h2
									class="title mb-2 text-2xl tracking-tighter sm:text-3xl leading-none"
								>
									Créer un compte
								</h2>
							</div>
							<div
								class="w-full mt-5 mb-8 text-sm md:text-lg font-light text-blue-900 sm:md:w-3/3"
							>
								Bénéficiez <strong>gratuitement</strong> d'analyses de prix de
								vos pièces d'or préférées !
								<ul class="mt-5">
									<li class="flex align-baseline">
										<span class="material-icons title-second mr-2"> grade </span
										><strong
											>Ajoutez vos pièces d'or préférées dans votre tableau de
											bord</strong
										>
									</li>
									<p class="ml-8 mb-6">
										et retrouvez des graphiques detaillés dans votre espace
										personnel
									</p>
									<li class="flex align-baseline">
										<span class="material-icons title-second mr-2">
											notifications </span
										><strong>Soyez alertés quand les prix varient</strong>
									</li>
									<p class="ml-8">
										recevez un email d'urgence quand le cours de l'or s'envole
										ou diminue
									</p>
								</ul>
							</div>
						</div>
					</div>
					<div
						class="w-full px-8 pt-32 pb-15 md:py-24 border-gray-100 rounded-lg lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none"
					>
						<div class="relative z-10 text-left">
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
													autocomplete="off"
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
												autocomplete="off"
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
									class="font-semibold text-blue-700 hover:text-blue-900"
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
		onSubmit() {
			this.$store.dispatch('auth/signIn', this.form).then(() => {
				this.userExist = this.$store.state.auth.error
			})
		}
	},
	head() {
		return {
			title: "Compar'Or - S'inscrire"
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
