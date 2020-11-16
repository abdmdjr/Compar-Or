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
	await coinModel.findOne({ slug: req.params.coin }, (err, coin) => {
		if (err) {
			console.log(err)
		}
		if (coin) {
			res.json(coin)
		} else {
			res.status(404).send(err)
		}
	})
})

module.exports = app
