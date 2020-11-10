const puppeteer = require('puppeteer')
const pieces = require('../data/lingorData')

async function scrapeLingor() {
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
	for (const piece of pieces) {
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
			piece.livraison = 19.9
			piece.totalPrice = piece.price + piece.livraison
			console.log('LINGOR : ' + `${data}`)
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
	scrapeLingor
}
