const puppeteer = require('puppeteer')
const pieces = require('../data/goldAvenueData')

async function scrapeGoldAvenue() {
	try {
		const browser = await puppeteer.launch({ headless: false })
		const retrievePrice = pieces.map(async (piece) => {
			const page = await browser.newPage()
			await page.goto(piece.url)
			try {
				const data = await page.evaluate(() => {
					const priceString = document.querySelector(
						'#gtm-product-pricing-details > a'
					).textContent
					const price = parseFloat(
						priceString.replace(/\s/g, '').replace(',', '.')
					)
					return price
				})
				piece.price = data
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

module.exports = {
	scrapeGoldAvenue
}