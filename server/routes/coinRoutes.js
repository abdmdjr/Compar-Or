const express = require('express')
const cors = require('cors')
const coinModel = require('../models/coinModel')
const app = express()

app.get('/coins', cors(), async (req, res) => {
	const coins = await coinModel.find({})
	try {
		res.json(coins)
	} catch (err) {
		res.status(500).send(err)
	}
})

app.get('/coins/:coin', cors(), async (req, res) => {
	const coin = await coinModel.findOne({ slug: req.params.coin }).exec()
	if (coin) {
		res.json(coin)
	} else {
		res.status(404).send()
	}
})

module.exports = app
