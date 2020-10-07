const { CronJob } = require('cron')
const scrapingJob = require('./scrapingJob')

const job = new CronJob({
	cronTime: '0 */2 * * * *',
	onTick: scrapingJob.start(),
	start: true
})

job.start()
