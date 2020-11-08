const puppeteer = require('puppeteer')
const pieces = require('../data/bullionByPostData')

async function scrapeBullionByPost() {
	try {
		const browser = await puppeteer.launch({
			args: [
				'--single-process',
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
				console.log('BBP : ' + `${data}`)
				piece.price = data
				piece.livraison = 0
				piece.totalPrice = data
			} catch (error) {
				console.log(error.message)
			}
		})
		await Promise.all(retrievePrice)
			.then(() => {
				browser.close()
			})
			.catch((err) => {
				console.log(err.message)
			})
	} catch (error) {
		console.log(error.message)
	}
	return pieces
}

module.exports = {
	scrapeBullionByPost
}
