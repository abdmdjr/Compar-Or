const Joi = require('@hapi/joi')

const registerValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string()
			.max(20)
			.required(),
		email: Joi.string()
			.min(6)
			.email()
			.required(),
		password: Joi.string()
			.min(8)
			.required()
	})
	return schema.validate(data)
}

module.exports.registerValidation = registerValidation
