import min from 'lodash.min'

const state = () => ({
	coins: [],
	coin: ''
})

const mutations = {
	SET_COINS(state, coins) {
		state.coins = coins
	},
	SET_COIN(state, coin) {
		state.coin = coin
	}
}

const actions = {
	async fetchCoins({ commit }, error) {
		try {
			const coins = await this.$axios.$get('/api/pieces')
			await commit('SET_COINS', coins)
		} catch (e) {
			error({ statusCode: 404 })
		}
	},
	async fetchCoin({ commit }, { params }, error) {
		try {
			const coin = await this.$axios.$get(`/api/pieces/${params}`)
			await commit('SET_COIN', coin)
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
	},
	coinsSortingPricesTable: (state) => {
		if (typeof state.coin === 'object') {
			return Object.entries(state.coin.prices).sort((a, b) => {
				return a[1][0] - b[1][0]
			})
		}
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
