const puppeteer = require('puppeteer')
const pieces = require('../data/goldAvenueData')

async function scrapeGoldAvenue() {
	try {
		const browser = await puppeteer.launch({
			args: ['--no-sandbox', '--disable-setuid-sandbox'],
			headless: true
		})
		const retrievePrice = pieces.map(async (piece) => {
			const page = await browser.newPage()
			await page.goto(piece.url)
			try {
				const data = await page.evaluate(() => {
					const parse = (value) => {
						return parseFloat(value.replace(/\s/g, '').replace(',', '.'))
					}
					const priceString = document.querySelector(
						'#gtm-product-pricing-details > a'
					).textContent
					const primeString = document.querySelector(
						'div.pricing-details-block.flex-box > div.right-column > span:nth-child(5)'
					).textContent
					const price = parse(priceString)
					const prime = parse(primeString)
					return [price, prime]
				})
				piece.price = data[0]
				piece.prime = data[1]
				piece.livraison = 52
				piece.totalPrice = piece.price + piece.livraison
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
	scrapeGoldAvenue
}
