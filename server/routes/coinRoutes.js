const express = require('express')
const coinModel = require('../models/coinModel')
const app = express()

app.get('/coins', async (req, res) => {
	const coins = await coinModel.find({}).sort({ 'prices.goldavenue': 1 })
	try {
		res.send(coins)
	} catch (err) {
		res.status(500).send(err)
	}
})

app.get('/coins/:coin', async (req, res) => {
	try {
		const coin = await coinModel.findOne({ slug: req.params.coin }).exec()
		res.send(coin)
	} catch (err) {
		res.status(500).send(err)
	}
})
/* 	const coin = await coinModel.findById(id)
	try {
		res.send({ coin })
	} catch (err) {
		console.log(err.message)
	} */

/* app.get('/coins/?filters=<500', async (req, res) => {
	const coins = await coinModel
		.find({})
		.where('prices.goldavenue.price')
		.gt(0)
		.lt(500)
	try {
		console.log(coins)
		res.send(coins)
	} catch (err) {
		res.status(500).send(err)
	}
}) */

/* 
	const modelId = req.body._id
	const newTitle = req.body.title

	coinModel
		.findById(modelId)
		.then((model) => {
			return Object.assign(model, { title: newTitle })
		})
		.then((model) => {
			return model.save()
		})
		.then((updatedModel) => {
			res.json({
				msg: 'model updated',
				updatedModel
			})
		})
		.catch((err) => {
			res.send(err)
		}) */

module.exports = app
