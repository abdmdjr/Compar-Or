const puppeteer = require('puppeteer')
const pieces = require('../data/lingorData')

async function scrapeLingor() {
	try {
		const browser = await puppeteer.launch({
			args: [
				'--disable-gpu',
				'--disable-dev-shm-usage',
				'--disable-setuid-sandbox',
				'--no-first-run',
				'--no-sandbox',
				'--no-zygote',
				'--single-process'
			],
			headless: true
		})
		const retrievePrice = pieces.map(async (piece) => {
			const page = await browser.newPage()
			await page.goto(piece.url, { waitUntil: 'networkidle2', timeout: 0 })
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
	scrapeLingor
}
