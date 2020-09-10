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
				const primeNbr = () => {
					let primePercent = data[1].slice(445, 450)
					if (primePercent.length <= 4) {
						primePercent = primePercent.slice(0, -1)
					}
					let primeNbre = parseFloat(
						primePercent.replace(/\s/g, '').replace(',', '.')
					)
					if (primeNbre < 50) {
						primeNbre = (primeNbre / 100) * data[0]
						primeNbre = primeNbre.toFixed(2)
						primeNbre = parseFloat(primeNbre)
						return primeNbre
					} else {
						return primeNbre + '%*'
					}
				}
				piece.prime = primeNbr()
				piece.price = data[0]
			} catch (e) {
				console.log(e.message)
			}
		})
		await Promise.all(retrievePrice)
		await browser.close()
		return pieces
	} catch (error) {
		console.log(error.message)
	}
}

module.exports = {
	scrapeAuCoffre
}
