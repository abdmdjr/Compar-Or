const puppeteer = require('puppeteer')
const pieces = require('../data/goldAvenueData')

async function scrapeGoldAvenue() {
	try {
		const browser = await puppeteer.launch({ headless: true })
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
					const price = parse(priceString)
					const primeString = document.querySelector(
						'div.pricing-details-block.flex-box > div.right-column > span:nth-child(5)'
					).textContent
					const prime = parse(primeString)
					return [price, prime]
				})
				piece.price = data[0]
				piece.prime = data[1]
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

scrapeGoldAvenue()

module.exports = {
	scrapeGoldAvenue
}
