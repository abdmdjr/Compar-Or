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

setTimeout(() => {
	job.start()
}, 20000)

const job = new CronJob('*/6 * * * *', () => {
	goldAvenue().then(console.log('Gold Avenue OK'))
	lingor().then(console.log('Lingor OK'))
	auCoffre().then(console.log('Au Coffre OK'))
})
