const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { registerValidation, loginValidation } = require('../validation')
const User = require('../models/userModel')
const app = express()

app.post('/inscription', async (req, res) => {
	const { error } = registerValidation(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	const emailExist = await User.findOne({ email: req.body.email })
	if (emailExist) return res.status(400).send('Cet e-mail existe déjà')

	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(req.body.password, salt)

	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword
	})
	try {
		await user.save()
		res.status(200).send('Utilisateur crée')
	} catch (err) {
		res.status(400).send(err)
	}
})

app.post('/connexion', async (req, res) => {
	const { error } = loginValidation(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	const user = await User.findOne({ email: req.body.email })
	if (!user) return res.status(400).send('Email or password is wrong')

	const validPassword = await bcrypt.compare(req.body.password, user.password)
	if (!validPassword) return res.status(400).send('Email or password is wrong')

	const token = jwt.sign({ user: user.username }, process.env.TOKEN_SECRET)
	res.header('auth-token', token)

	res.send('Success')
})

module.exports = app
