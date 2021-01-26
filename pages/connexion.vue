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
							<ValidationObserver v-slot="{ handleSubmit }" name="form">
								<span class="error">{{ errorForm }}</span>
								<form @submit.prevent="handleSubmit(onSubmit)">
									<ValidationProvider
										v-slot="{ errors }"
										name="email"
										rules="required|email"
										mode="passive"
									>
										<div class="mt-4">
											<label
												class="block text-base font-medium leading-relaxed text-gray-700"
												>Adresse mail</label
											>
											<input
												v-model="form.email"
												type="text"
												name="email"
												placeholder="Votre e-mail"
												class="w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
											/>
											<span class="error">{{ errors[0] }}</span>
										</div>
									</ValidationProvider>
									<ValidationProvider
										v-slot="{ errors }"
										name="password"
										rules="required|min:8"
										mode="passive"
									>
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
												autocomplete="off"
											/>
											<span class="error">{{ errors[0] }}</span>
										</div>
									</ValidationProvider>
									<button
										type="submit"
										class="block w-full btn-detail px-4 py-3 mt-6 rounded"
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
import {
	ValidationProvider,
	ValidationObserver
} from 'vee-validate/dist/vee-validate.full'

export default {
	components: {
		ValidationProvider,
		ValidationObserver
	},
	data() {
		return {
			form: {
				email: '',
				password: ''
			},
			errorForm: ''
		}
	},
	methods: {
		async onSubmit() {
			try {
				await this.$store.dispatch('auth/signIn', this.form)
			} catch (err) {
				this.errorForm = err.response.data
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
<style scoped>
.error {
	font-size: 0.8rem;
	opacity: 1;
	@apply mt-1 text-red-400 transition-all duration-150 ease-in-out;
}
</style>
