import min from 'lodash.min'

const state = () => ({
	coins: []
})

const mutations = {
	SET_COINS(state, coins) {
		state.coins = coins
	}
}

const actions = {
	async getCoins({ commit }, error) {
		try {
			const coins = await this.$axios.$get('/api/coins')
			commit('SET_COINS', coins)
		} catch (e) {
			error({ statusCode: 404 })
		}
	}
}

const getters = {
	coinsSortingPrices: (state) => {
		return state.coins.map((coin) => {
			const minValue = min(Object.values(coin.prices), (o) => coin.prices[o])
			return (coin.price = parseFloat(minValue[0]).toFixed(2))
		})
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
