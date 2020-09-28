const puppeteer = require('puppeteer')
const pieces = require('../data/lingorData')

async function scrapeLingor() {
	try {
		const browser = await puppeteer.launch({ headless: true })
		const retrievePrice = pieces.map(async (piece) => {
			const page = await browser.newPage()
			await page.goto(piece.url)
			try {
				const data = await page.evaluate(() => {
					const priceString = document.querySelector('#prixTotal').textContent
					const price = parseFloat(
						priceString.replace(/\s/g, '').replace(',', '.')
					)
					return price
				})
				piece.price = data
				piece.prime = 'N/C'
				piece.livraison = 19.9
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
	scrapeLingor
}
