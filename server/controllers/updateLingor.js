/* eslint-disable no-unused-expressions */
const Coin = require('../models/coinModel')
const { scrapeLingor } = require('../scrapers/scrapeLingor')

async function lingor() {
	const pieces = await scrapeLingor()
	try {
		pieces.map(async (piece) => {
			await Coin.findByIdAndUpdate(piece.id, {
				'prices.lingor fr': [
					piece.totalPrice,
					piece.price,
					piece.livraison,
					piece.url
				]
			})
			// await Coin.findById(piece.id).then((coin) => {
			// 	if (!coin.chart.lingor.data && !coin.chart.lingor.createdAt) {
			// 		coin.chart.lingor.data.push(piece.totalPrice)
			// 		coin.chart.lingor.createdAt.push(new Date())
			// 		coin.save()
			// 	} else if (
			// 		piece.totalPrice !==
			// 		coin.chart.lingor.data[coin.chart.lingor.data.length - 1]
			// 	) {
			// 		coin.chart.lingor.data.push(piece.totalPrice)
			// 		coin.chart.lingor.createdAt.push(new Date())
			// 		coin.save()
			// 	}
			// })
		})
	} catch (error) {
		console.log(error.message)
	}
}

module.exports = {
	lingor
}
