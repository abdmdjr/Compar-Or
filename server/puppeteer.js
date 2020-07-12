const puppeteer = require('puppeteer')

async function scrapeGoldAvenue() {
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	})
	const page = await browser.newPage()
	await page.goto(
		'https://www.goldavenue.com/fr/acheter/or/produit/piece-d-or-pur-900-0-vreneli-20-francs-suisse-helvetia'
	)
	const data = await page.evaluate(() => {
		const id = '5f0b5d3d35cf077262197edf'
		const priceString = document.querySelector(
			'#gtm-product-pricing-details > span'
		).textContent
		const primeString = document.querySelector(
			'#modal-pricing-details > div > div > div > div.pricing-details-block.flex-box > div.right-column > span:nth-child(5)'
		).textContent
		const price = parseFloat(priceString.replace(/\s/g, '').replace(',', '.'))
		const prime = parseFloat(primeString.replace(/\s/g, '').replace(',', '.'))
		return { id, price, prime }
	})
	return data
}

module.exports = {
	scrapeGoldAvenue
}

/* const puppeteer = require('puppeteer')

const id = '5ef891c534374408a5393f13'
const url =
	'https://www.goldavenue.com/fr/acheter/or/produit/piece-d-or-pur-900-0-vreneli-20-francs-suisse-helvetia'

async function configureBrowser() {
	const browser = await puppeteer.launch({ headless: false })
	const page = await browser.newPage()
	await page.goto(url)
	return page
}

async function scrapePrice(page) {
	await page.reload()
	const data = await page.evaluate(() => {
		const price = document.querySelector('#gtm-product-pricing-details > span')
			.textContent
		const prime = document.querySelector(
			'#modal-pricing-details > div > div > div > div.pricing-details-block.flex-box > div.right-column > span:nth-child(5)'
		).textContent
		return {
			price,
			prime
		}
	})
}

async function monitor() {
	const page = await configureBrowser()
	await scrapePrice(page)
}

monitor()

 */
/* const job = new CronJob('* * * * *', () => {
	monitor()
}) */
/* job.start() */
