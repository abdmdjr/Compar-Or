/* const puppeteer = require('puppeteer')

// eslint-disable-next-line prefer-const
let pieces = [
	'https://www.goldavenue.com/fr/acheter/or/produit/piece-d-or-pur-900-0-vreneli-20-francs-suisse-helvetia',
	'https://www.goldavenue.com/fr/acheter/or/produit/piece-d-or-pur-900-0-20-francs-napoleon-coq-de-chaplain'
]

async function scrapeGoldAvenue() {
	try {
		const browser = await puppeteer.launch({ headless: false })
		pieces.map(async (piece) => {
			const page = await browser.newPage()
			await page.goto(piece)
			const data = await page.evaluate(() => {
				const priceString = document.querySelector(
					'#gtm-product-pricing-details > span'
				).textContent
				const price = parseFloat(
					priceString.replace(/\s/g, '').replace(',', '.')
				)
				return price
			})
			console.log(data)
			return data
		})
	} catch (error) {
		console.log(error.message)
	}
}

scrapeGoldAvenue()

module.exports = {
	scrapeGoldAvenue
}
 */