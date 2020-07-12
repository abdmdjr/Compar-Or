const scraper = require('../puppeteer')
const Coin = require('../models/coinModel')

async function scrape() {
	const dataGoldAvenue = await scraper.scrapeGoldAvenue()
	console.log(dataGoldAvenue)
	await Coin.findByIdAndUpdate(
		dataGoldAvenue.id,
		{
			'price.goldavenue': dataGoldAvenue.price
		},
		function(err, coin) {
			if (err) {
				console.log(err.message)
			} else {
				console.log(coin.price)
			}
		}
	)
}

/* 	Coin.findByIdAndUpdate(
		dataGoldAvenue.id,
		{ price: dataGoldAvenue.price },
		function(err, coin) {
			if (err) {
				console.log(err.message)
			}
			console.log(coin.price)
		}
	) */

module.exports = {
	scrape
}
