const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()
const coinModel = require('../models/coinModel')
const app = express()

app.get('/coins', async (req, res) => {
	const coins = await coinModel.find({})
	try {
		res.json(coins)
	} catch (err) {
		res.status(500).send(err)
	}
})

app.get('/coins/:coin', async (req, res) => {
	await coinModel.findOne({ slug: req.params.coin }, (err, coin) => {
		if (err) {
			console.log(err)
		}
		if (coin === null) {
			res.status(404).send(err)
		} else {
			return res.json(coin)
		}
	})
})

app.post('/contact', async (req) => {
	const output = `
	<h1>Nouveau mail</h1>
	<ul>
		<li>Nom: ${req.body.firstName}</li>
		<li>Email: ${req.body.email}</li>
	</ul>
	<h3>Message</h3>
	<p>${req.body.message}</p>
	`
	async function main() {
		// create reusable transporter object using the default SMTP transport
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL, // generated ethereal user
				pass: process.env.PASSWORD // generated ethereal password
			}
		})

		await transporter.sendMail({
			from: '"NodeMailer 👻" <comparor.nodemailer@gmail.com>', // sender address
			to: 'comparor.nodemailer@gmail.com', // list of receivers
			subject: 'Hello ✔', // Subject line
			text: 'Hello world?', // plain text body
			html: output // html body
		})
	}

	main()
		.then('msg envoyé')
		.catch(console.error)
})

module.exports = app
