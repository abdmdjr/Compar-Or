const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()
const coinModel = require('../models/coinModel')
const app = express()

app.get('/pieces', async (req, res) => {
	const coins = await coinModel.find({}).sort({ index: 1 })
	try {
		res.json(coins)
	} catch (err) {
		res.status(404).send(err)
	}
})

app.get('/pieces/:piece', async (req, res) => {
	const coin = await coinModel.findOne({ slug: req.params.piece })
	try {
		res.json(coin)
	} catch (err) {
		res.status(404).send(err)
	}
})
app.post('/contact', (req, res) => {
	if (!req.body.email) {
		return res.status(400).json({ message: "L'email est obligatoire" })
	}
	const output = `
	<h1>Nouveau mail</h1>
	<ul>
		<li>Nom: ${req.body.firstName}</li>
		<li>Email: ${req.body.email}</li>
	</ul>
	<h3>Message</h3>
	<p>${req.body.message}</p>
	`
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL, // generated ethereal user
			pass: process.env.PASSWORD // generated ethereal password
		}
	})

	const mailOptions = {
		from: '"NodeMailer 👻" <comparor.nodemailer@gmail.com>', // sender address
		to: 'comparor.nodemailer@gmail.com', // list of receivers
		subject: "Message Compar'Or ✔", // Subject line
		text: 'Hello world?', // plain text body
		html: output // html body
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error)
		} else {
			res.sendStatus(200)
		}
		console.log('Message sent: %s', info.messageId)
		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
	})
})

module.exports = app
