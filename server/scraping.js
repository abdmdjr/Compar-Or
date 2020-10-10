const CronJob = require('cron').CronJob
const { goldAvenue } = require('./controllers/updateGoldAvenue.js')
const { lingor } = require('./controllers/updateLingor.js')
const { auCoffre } = require('./controllers/updateAuCoffre.js')

const job = new CronJob('*/1 * * * *', function() {
	console.log('done DONE')
	goldAvenue()
	lingor()
	auCoffre()
})

setTimeout(function() {
	console.log('lol')
	job.start()
}, 20000)
