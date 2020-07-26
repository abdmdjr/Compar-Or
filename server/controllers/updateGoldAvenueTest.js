const Coin = require('../models/coinModel')
const { scrapeGoldAvenue } = require('../scrapers/goldAvenueTest')

async function scrape() {
	const pieces = await scrapeGoldAvenue()
	console.log(pieces)
}

scrape()

module.exports = {
	scrape
}
