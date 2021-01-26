import { extend, localize } from 'vee-validate/dist/vee-validate.full'
import fr from 'vee-validate/dist/locale/fr.json'

localize('fr', fr)
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
