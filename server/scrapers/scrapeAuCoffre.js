const puppeteer = require('puppeteer')
const pieces = require('../data/auCoffreData')

async function scrapeAuCoffre() {
	try {
		const browser = await puppeteer.launch({ headless: true })
		const retrievePrice = pieces.map(async (piece) => {
			const page = await browser.newPage()
			await page.goto(piece.url)
			try {
				const data = await page.evaluate(() => {
					const priceString = document.querySelector(
						'#supertype_main > div.content_wrapper > div > div > div:nth-child(1) > div.media-body > div.product_price.col-xs-12.col-sm-4.clearfix > p > span'
					).textContent
					const price = parseFloat(
						priceString.replace(/\s/g, '').replace(',', '.')
					)
					const prime = document.querySelector(
						'#supertype_main > div.content_wrapper > div > div > div:nth-child(1) > div.media-body > div:nth-child(2) > p'
					).textContent
					return [price, prime]
				})
				const dataPrime = () => {
					const primePercent = data[1].slice(445, 450)
					if (primePercent.includes('%')) {
						const primeNoPercent = primePercent.slice(0, -1)
						return primeNoPercent
					}
					return primePercent
				}
				piece.prime = dataPrime()
				piece.price = data[0]
				console.log(piece)
			} catch (e) {
				console.log(e.message)
			}
		})
		await Promise.all(retrievePrice)
		return pieces
	} catch (error) {
		console.log(error.message)
	}
}

scrapeAuCoffre()

module.exports = {
	scrapeAuCoffre
}
