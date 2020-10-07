const { goldAvenue } = require('./controllers/updateGoldAvenue.js')
const { lingor } = require('./controllers/updateLingor.js')
const { auCoffre } = require('./controllers/updateAuCoffre.js')

module.exports = {
	start() {
		goldAvenue()
		lingor()
		auCoffre()
	}
}
