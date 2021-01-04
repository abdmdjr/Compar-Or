const puppeteer = require('puppeteer')
const pieces = require('../data/auCoffreData')

async function scrapeAuCoffre() {
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
	for (const piece of pieces) {
		const page = await browser.newPage()
		await page.goto(piece.url, { waitUntil: 'networkidle2', timeout: 0 })
		try {
			const data = await page.evaluate(() => {
				const priceString = document.querySelector(
					'#supertype_main > div.content_wrapper > div > div > div:nth-child(1) > div.media-body > div.product_price.col-xs-12.col-sm-4.clearfix > p > span'
				).textContent
				const price = parseFloat(
					priceString.replace(/\s/g, '').replace(',', '.')
				)
				return price
			})
			piece.price = data
			piece.livraison = 15
			piece.totalPrice = piece.price + piece.livraison
			console.log('AUCOFFRE : ' + `${data}`)
		} catch (error) {
			console.log(error.message)
		} finally {
			page.close()
		}
	}
	browser.close()
	return pieces
}

module.exports = {
	scrapeAuCoffre
}
