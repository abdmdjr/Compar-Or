/* eslint-disable no-unused-expressions */
const Coin = require('../models/coinModel')
const { scrapeBullionByPost } = require('../scrapers/scrapeBullionByPost')

async function bullionByPost() {
	const pieces = await scrapeBullionByPost()
	try {
		pieces.map(async (piece) => {
			await Coin.findByIdAndUpdate(piece.id, {
				'prices.bullionbypost fr': [
					piece.totalPrice,
					piece.price,
					piece.livraison,
					piece.url
				]
			})
			await Coin.findById(piece.id).then((coin) => {
				if (
					!coin.chart.bullionbypost.data &&
					!coin.chart.bullionbypost.createdAt
				) {
					coin.chart.bullionbypost.data.push(piece.totalPrice)
					coin.chart.bullionbypost.createdAt.push(new Date())
					coin.save()
				} else if (
					piece.totalPrice !==
					coin.chart.bullionbypost.data[
						coin.chart.bullionbypost.data.length - 1
					]
				) {
					coin.chart.bullionbypost.data.push(piece.totalPrice)
					coin.chart.bullionbypost.createdAt.push(new Date())
					coin.save()
				}
			})
		})
	} catch (error) {
		console.log(error.message)
	}
}

module.exports = {
	bullionByPost
}
