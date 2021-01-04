<template>
	<main
		class="container mx-auto mt-16 sm:mt-24 lg:mt-0 px-5 sm:px-16 lg:px-8 pt-8 mb-15 md:mb-20"
	>
		<span class="md:mb-4 text-xs text-black opacity-75"
			><nuxt-link to="/">Accueil > </nuxt-link>Contact</span
		>
		<section
			class="flex flex-col justify-start lg:flex-row lg:justify-evenly mt-6"
		>
			<img
				class="hidden lg:block self-center w-479 mb-6"
				src="~/assets/img/contact.png"
				alt="homme portant de l'or sur son dos"
			/>
			<div class="flex flex-col lg:py-12 lg:px-15 lg:rounded lg:shadow-md">
				<h1 class="title font-medium text-lg md:text-3xl mb-1">
					Contactez-nous
				</h1>
				<p class="font-light mb-8">Des questions ? Ecrivez-nous un message !</p>
				<ValidationObserver v-slot="{ handleSubmit }" name="form">
					<form
						class="flex flex-col w-full space-y-6"
						@submit.prevent="handleSubmit(onSubmit)"
					>
						<ValidationProvider
							v-slot="{ errors }"
							name="email"
							rules="required|email"
							mode="passive"
						>
							<label class="title block mb-1">Adresse mail</label>
							<input
								v-model="form.email"
								class="w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
								type="text"
								placeholder="Entrez votre e-mail"
							/>
							<span class="error">{{ errors[0] }}</span>
						</ValidationProvider>

						<ValidationProvider
							v-slot="{ errors }"
							name="name"
							rules="required|alpha"
							mode="passive"
						>
							<label class="title block mb-1">Prénom</label>
							<input
								v-model="form.firstName"
								class="w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
								type="text"
								placeholder="Entrez votre prénom"
							/>
							<span class="error">{{ errors[0] }}</span>
						</ValidationProvider>

						<ValidationProvider
							v-slot="{ errors }"
							name="message"
							rules="required|min:8"
							mode="passive"
						>
							<label class="title block mb-1">Message</label>
							<textarea
								v-model="form.message"
								wrap="off"
								class="w-full px-4 py-2 mt-2 text-base bg-gray-100 border-transparent rounded-lg ext-blue-700 focus:border-gray-500"
								type="text"
								placeholder="Tapez votre message"
							/>
							<span class="error">{{ errors[0] }}</span>
						</ValidationProvider>

						<button
							class="btn-detail self-start py-2 px-4 rounded"
							type="submit"
							@submit.prevent="handleSubmit(onSubmit)"
						>
							Envoyer
						</button>
						<notifications class="notif" position="top right" group="mail" />
					</form>
				</ValidationObserver>
			</div>
		</section>
	</main>
</template>

<script>
import axios from 'axios'
import {
	ValidationProvider,
	ValidationObserver,
	extend,
	required,
	alpha,
	email,
	min,
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
				firstName: '',
				message: '',
				email: ''
			}
		}
	},
	created() {
		localize({ fr })
		localize('fr')
		extend('email', {
			...email,
			message: 'Réessayez avec une adresse mail valide 👆'
		})
		extend('required', {
			...required,
			message: 'Ce champ est obligatoire 👆'
		})

		extend('alpha', {
			...alpha,
			message: 'Ce champ doit contenir seulement des lettres 👆'
		})

		extend('min', {
			...min,
			message: 'Ce champ doit contenir 8 caractères minimum 👆'
		})
	},
	methods: {
		async onSubmit() {
			try {
				await axios
					.post('/api/contact/', this.form)
					.then(
						((this.form.firstName = ''),
						(this.form.message = ''),
						(this.form.email = ''))
					)
				await this.$notify({
					group: 'mail',
					title: 'Merci pour votre message !',
					text: 'Vous recevrez une réponse au plus vite :)'
				})
			} catch (err) {
				if (err) {
					console.log(err)
					alert("Quelques chose s'est mal passé!")
				}
			}
		}
	},
	head() {
		return {
			title: "Compar'Or - Contactez-nous"
		}
	}
}
</script>
<style scoped>
input,
textarea {
	outline: none;
}
span .error {
	display: block;
}
.error {
	font-size: 0.8rem;
	opacity: 1;
	@apply mt-1 text-red-400 transition-all duration-150 ease-in-out;
}
textarea {
	resize: none;
}
.notif {
	margin-top: 50px;
}
</style>
