/* eslint-disable no-unused-expressions */
const Coin = require('../models/coinModel')
const { scrapeBdOr } = require('../scrapers/scrapeBdOr')

async function bdOr() {
	const pieces = await scrapeBdOr()
	try {
		pieces.map(async (piece) => {
			await Coin.findByIdAndUpdate(piece.id, {
				'prices.bdor fr': [
					piece.totalPrice,
					piece.price,
					piece.livraison,
					piece.url
				]
			})
			// await Coin.findById(piece.id).then((coin) => {
			// 	if (!coin.chart.bdor.data && !coin.chart.bdor.createdAt) {
			// 		coin.chart.bdor.data.push(piece.totalPrice)
			// 		coin.chart.bdor.createdAt.push(new Date())
			// 		coin.save()
			// 	} else if (
			// 		piece.totalPrice !==
			// 		coin.chart.bdor.data[coin.chart.bdor.data.length - 1]
			// 	) {
			// 		coin.chart.bdor.data.push(piece.totalPrice)
			// 		coin.chart.bdor.createdAt.push(new Date())
			// 		coin.save()
			// 	}
			// })
		})
	} catch (error) {
		console.log(error.message)
	}
}

module.exports = {
	bdOr
}
