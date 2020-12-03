<template>
	<section class="container mx-auto px-5 sm:px-16 lg:pt-0 lg:px-32">
		<ValidationObserver v-slot="{ handleSubmit }" name="form">
			<form @submit.prevent="handleSubmit(onSubmit)">
				<ValidationProvider
					v-slot="{ errors }"
					name="E-mail"
					rules="required|email"
				>
					<input
						v-model="form.email"
						type="email"
						placeholder="type some email"
					/>
					<span>{{ errors[0] }}</span>
				</ValidationProvider>

				<ValidationProvider
					v-slot="{ errors }"
					name="First Name"
					rules="required|alpha"
				>
					<input v-model="form.firstName" type="text" placeholder="text" />
					<span>{{ errors[0] }}</span>
				</ValidationProvider>

				<ValidationProvider
					v-slot="{ errors }"
					name="Last Name"
					rules="required|alpha"
				>
					<input v-model="form.message" type="text" placeholder="text" />
					<span>{{ errors[0] }}</span>
				</ValidationProvider>

				<button type="submit" @submit.prevent="handleSubmit(onSubmit)">
					Submit
				</button>
			</form>
		</ValidationObserver>
	</section>
</template>

<script>
import axios from 'axios'
import {
	ValidationProvider,
	ValidationObserver,
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
	},
	methods: {
		async onSubmit(event) {
			try {
				const response = await axios
					.post('/api/contact/', this.form)
					.then(alert('Bien vu!'))
					.then(location.reload())
				console.log(response)
			} catch (err) {
				console.log(err)
				alert("Quelques chose s'est mal passé!")
			}
		}
	}
}
</script>
