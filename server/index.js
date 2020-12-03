// const CronJob = require('cron').CronJob
const { Nuxt, Builder } = require('nuxt')
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const CronJob = require('cron').CronJob
const consola = require('consola')
const config = require('../nuxt.config.js')
const { goldAvenue } = require('./controllers/updateGoldAvenue.js')
const { lingor } = require('./controllers/updateLingor.js')
const { auCoffre } = require('./controllers/updateAuCoffre.js')
const { bullionByPost } = require('./controllers/updateBullionByPost.js')
const { bdOr } = require('./controllers/updateBdOr.js')
const coinRouter = require('./routes/coinRoutes')
const app = express()

config.dev = process.env.NODE_ENV !== 'production'

async function start() {
	const nuxt = new Nuxt(config)

	const { host, port } = nuxt.options.server

	await nuxt.ready()
	if (config.dev) {
		const builder = new Builder(nuxt)
		await builder.build()
	}

	mongoose
		.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		})
		.then(() =>
			consola.ready({ message: 'Connected to database', badge: true })
		)
		.then(() => {
			app.listen(port, host)
			consola.ready({
				message: `Server listening on http://${host}:${port}`,
				badge: true
			})
		})

	app.use(express.json())
	app.use('/api', coinRouter)
	app.use(nuxt.render)
}

start()

const job = new CronJob('*/2 * * * *', async () => {
	try {
		await goldAvenue().then(console.log('Gold Avenue scraping data'))
		await lingor().then(console.log('Lingor scraping data'))
		await auCoffre().then(console.log('Au Coffre scraping data'))
		await bullionByPost().then(console.log('BullionByPost scraping data'))
		await bdOr().then(console.log('bdOr scraping data'))
	} catch (error) {
		console.log(error.message)
	}
})

setTimeout(() => {
	job.start()
}, 35000)
