const puppeteer = require('puppeteer')

const pieces = [
	{
		id: '5f0b5d3d35cf077262197edf',
		title: 'Vreneli 20 francs Suisse',
		url:
			'https://www.goldavenue.com/fr/acheter/or/produit/piece-d-or-pur-900-0-vreneli-20-francs-suisse-helvetia',
		price: '',
		prime: ''
	},
	{
		id: '5ef892761a4d3f6355a8b617',
		title: '20 Francs Napoléon',
		url:
			'https://www.goldavenue.com/fr/acheter/or/produit/piece-d-or-pur-900-0-20-francs-napoleon-coq-de-chaplain',
		price: '',
		prime: ''
	}
]

async function scrapeGoldAvenue() {
	try {
		const browser = await puppeteer.launch({ headless: false })
		const scraping = pieces.map(async (piece) => {
			const page = await browser.newPage()
			await page.goto(piece.url)
			const data = await page.evaluate(() => {
				const priceString = document.querySelector(
					'#gtm-product-pricing-details > span'
				).textContent
				const primeString = document.querySelector(
					'#modal-pricing-details > div > div > div > div.pricing-details-block.flex-box > div.right-column > span:nth-child(5)'
				).textContent
				const price = parseFloat(
					priceString.replace(/\s/g, '').replace(',', '.')
				)
				const prime = parseFloat(
					primeString.replace(/\s/g, '').replace(',', '.')
				)
				return { price, prime }
			})
			piece.price = data.price
			piece.prime = data.prime
			console.log(piece)
		})
		Promise.all(scraping).then(() => {
			browser.close()
		})
	} catch (error) {
		console.log(error.message)
	}
	return pieces
}

scrapeGoldAvenue()

module.exports = {
	scrapeGoldAvenue
}
