const puppeteer = require('puppeteer')


// eslint-disable-next-line prefer-const
let vreneli20 = [
	{
		title: 'Vreneli 20FR',
		url:
			'https://www.goldavenue.com/fr/acheter/or/produit/piece-d-or-pur-900-0-vreneli-20-francs-suisse-helvetia'
	}
]
// eslint-disable-next-line prefer-const
let marianne20 = [
	{
		title: 'Napoleon 20FR',
		url:
			'https://www.goldavenue.com/fr/acheter/or/produit/piece-d-or-pur-900-0-20-francs-napoleon-coq-de-chaplain'
	}
]

async function scrapeGoldAvenue() {
	try {
		// eslint-disable-next-line prefer-const
		let pieces = [...vreneli20, ...marianne20]
		const browser = await puppeteer.launch({ headless: false })
		const list = pieces.map(async (piece) => {
			const page = await browser.newPage()
			await page.goto(piece.url)
			const data = await page.evaluate(() => {
				const priceString = document.querySelector(
					'#gtm-product-pricing-details > span'
				).textContent
				const price = parseFloat(
					priceString.replace(/\s/g, '').replace(',', '.')
				)
				return price
			})
			piece.price = data
		})
		await Promise.all(list)
		return pieces
	} catch (error) {
		console.log(error.message)
	}
}

module.exports = {
	scrapeGoldAvenue
}
