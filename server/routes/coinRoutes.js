const express = require('express')
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
	try {
		const coin = await coinModel.findOne({ slug: req.params.coin }).exec()
		if (coin) {
			res.json(coin)
		} else {
			res.status(404).send()
		}
	} catch (err) {
		res.status(404).send(err)
	}
})

module.exports = app
