/* const goldAvenue = require('../scrapers/goldAvenue')
const Coin = require('../models/coinModel')

const idVreneli20 = '5f0b5d3d35cf077262197edf'
const idNapoleon20 = '5ef892761a4d3f6355a8b617'
const idMaple1Oz = '5f119db61e4a5e3e9f79ea3f'

async function scrape() {
	const vreneli20 = await goldAvenue.vreneli20()
	const napoleon20 = await goldAvenue.napoleon20()
	const maple1oz = await goldAvenue.maple1oz()

	await Coin.findByIdAndUpdate(
		idVreneli20,
		{
			'prices.goldavenue': vreneli20.price
		},
		function(err, coin) {
			if (err) {
				console.log(err.message)
			}
			console.log(coin)
		}
	)

	await Coin.findByIdAndUpdate(
		idNapoleon20,
		{
			'prices.goldavenue': napoleon20.price
		},
		function(err) {
			if (err) {
				console.log(err.message)
			}
		}
	)

	await Coin.findByIdAndUpdate(
		idMaple1Oz,
		{
			'prices.goldavenue': maple1oz.price
		},
		function(err, coin) {
			if (err) {
				console.log(err.message)
			}
		}
	)
	console.log(vreneli20.price, napoleon20.price, maple1oz.price)
}

module.exports = {
	scrape
}
 */
