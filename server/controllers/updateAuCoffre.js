/* eslint-disable no-unused-expressions */
const Coin = require('../models/coinModel')
const { scrapeAuCoffre } = require('../scrapers/scrapeAuCoffre')

async function auCoffre() {
	const pieces = await scrapeAuCoffre()
	try {
		pieces.map(async (piece) => {
			await Coin.findByIdAndUpdate(piece.id, {
				'prices.aucoffre com': [
					piece.totalPrice,
					piece.price,
					piece.livraison,
					piece.url
				]
			})
			await Coin.findById(piece.id).then((coin) => {
				if (!coin.chart.aucoffre.data && !coin.chart.aucoffre.createdAt) {
					coin.chart.aucoffre.data.push(piece.totalPrice)
					coin.chart.aucoffre.createdAt.push(new Date())
					coin.save()
				} else if (
					piece.totalPrice !==
					coin.chart.aucoffre.data[coin.chart.aucoffre.data.length - 1]
				) {
					coin.chart.aucoffre.data.push(piece.totalPrice)
					coin.chart.aucoffre.createdAt.push(new Date())
					coin.save()
				}
			})
		})
	} catch (error) {
		console.log(error.message)
	}
}

module.exports = {
	auCoffre
}
