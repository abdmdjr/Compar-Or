const express = require('express')
const coinModel = require('../models/coinModel')
const app = express()

app.get('/coins', async (req, res) => {
	const coins = await coinModel.find({})

	try {
		res.send(coins)
	} catch (err) {
		res.status(500).send(err)
	}
})

app.post('/coin', async (req, res) => {
	// eslint-disable-next-line new-cap
	const coin = new coinModel(req.body)

	try {
		await coin.save()
		res.send(coin)
	} catch (err) {
		res.status(500).send(err)
	}
})

module.exports = app
