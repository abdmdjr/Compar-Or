const puppeteer = require('puppeteer')
const pieces = require('../data/goldAvenueData')

async function scrapeGoldAvenue() {
	try {
		const browser = await puppeteer.launch({
			args: [
				'--disable-gpu',
				'--disable-dev-shm-usage',
				'--disable-setuid-sandbox',
				'--no-sandbox',
				'--no-zygote'
			],
			headless: true
		})
		const retrievePrice = pieces.map(async (piece) => {
			const page = await browser.newPage()
			await page.goto(piece.url, { waitUntil: 'networkidle2', timeout: 0 })
			try {
				const data = await page.evaluate(() => {
					const parse = (value) => {
						return parseFloat(value.replace(/\s/g, '').replace(',', '.'))
					}
					const priceString = document.querySelector(
						'#gtm-product-pricing-details > a'
					).textContent
					const price = parse(priceString)
					return price
				})
				piece.price = data
				piece.livraison = 52
				piece.totalPrice = piece.price + piece.livraison
			} catch (error) {
				console.log(error)
				throw error
			}
		})
		await Promise.all(retrievePrice)
		await browser.close()
		return pieces
	} catch (error) {
		console.log(error)
		throw error
	}
}

module.exports = {
	scrapeGoldAvenue
}
