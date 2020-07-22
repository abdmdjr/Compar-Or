const puppeteer = require('puppeteer')

async function vreneli20() {
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	})
	const page = await browser.newPage()
	await page.goto(
		'https://www.goldavenue.com/fr/acheter/or/produit/piece-d-or-pur-900-0-vreneli-20-francs-suisse-helvetia'
	)
	const data = await page.evaluate(() => {
		const priceString = document.querySelector(
			'#gtm-product-pricing-details > span'
		).textContent
		const price = parseFloat(priceString.replace(/\s/g, '').replace(',', '.'))
		return { price }
	})
	return data
}

async function napoleon20() {
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	})
	const page = await browser.newPage()
	await page.goto(
		'https://www.goldavenue.com/fr/acheter/or/produit/piece-d-or-pur-900-0-20-francs-napoleon-coq-de-chaplain'
	)
	const data = await page.evaluate(() => {
		const priceString = document.querySelector(
			'#gtm-product-pricing-details > span'
		).textContent
		const price = parseFloat(priceString.replace(/\s/g, '').replace(',', '.'))
		return { price }
	})
	return data
}

async function maple1oz() {
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	})
	const page = await browser.newPage()
	await page.goto(
		'https://www.goldavenue.com/fr/acheter/or/produit/1-once-piece-d-or-pur-999-9-maple-leaf-bu-annees-mixtes'
	)
	const data = await page.evaluate(() => {
		const priceString = document.querySelector(
			'#gtm-product-pricing-details > span'
		).textContent
		const price = parseFloat(priceString.replace(/\s/g, '').replace(',', '.'))
		return { price }
	})
	return data
}

module.exports = {
	vreneli20,
	napoleon20,
	maple1oz
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

const job = new CronJob('* * * * *', () => {
	monitor()
})
job.start() */
