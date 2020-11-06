const puppeteer = require('puppeteer')
const pieces = require('../data/bullionByPostData')

async function scrapeBullionByPost() {
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
					const priceString = document.querySelector('#price-per-unit-1')
						.textContent
					const price = parse(priceString)
					return price
				})
				piece.price = data
				piece.livraison = 0
				piece.totalPrice = data
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

scrapeBullionByPost()

module.exports = {
	scrapeBullionByPost
}
