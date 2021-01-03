const express = require('express')
const { registerValidation } = require('../validation')
const User = require('../models/userModel')
const app = express()

app.post('/register', async (req, res) => {
	const { error } = registerValidation(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	const emailExist = await User.findOne({ email: req.body.email })
	if (emailExist) return res.status(400).send('Email already exists')

	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	})
	try {
		const savedUser = await user.save()
		res.send(savedUser)
	} catch (err) {
		res.status(400).send(err)
	}
})

module.exports = app
