const puppeteer = require('puppeteer')
const pieces = require('../data/bdOrData')

async function scrapeBdOr() {
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
				const parse = (value) => {
					return parseFloat(value.replace(/\s/g, '').replace(',', '.'))
				}
				const priceString = document.querySelector('#prix_total').textContent
				const price = parse(priceString)
				return price
			})
			piece.price = data
			piece.livraison = 0
			piece.totalPrice = data
			console.log('BDOR : ' + `${data}`)
		} catch (err) {
			console.log(err.message)
		} finally {
			page.close()
		}
	}
	browser.close()
	return pieces
}

module.exports = {
	scrapeBdOr
}
