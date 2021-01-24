import min from 'lodash.min'

const state = () => ({
	allCoins: [],
	coin: '',
	loadingStatus: false
})

const mutations = {
	SET_COINS(state, allCoins) {
		state.allCoins = allCoins
	},
	SET_COIN(state, coin) {
		state.coin = coin
	},
	CHANGE_LOADING_STATUS(state, newLoadingStatus) {
		state.loadingStatus = newLoadingStatus
	}
}

const actions = {
	async fetchCoins({ commit }, error) {
		await commit('CHANGE_LOADING_STATUS', true)
		try {
			const coins = await this.$axios.$get('/api/pieces')
			commit('SET_COINS', coins)
			await commit('CHANGE_LOADING_STATUS', false)
		} catch (e) {
			error({ statusCode: 404 })
		}
	},
	async fetchCoin({ commit }, { params }, error) {
		try {
			const coin = await this.$axios.$get(`/api/pieces/${params}`)
			commit('SET_COIN', coin)
		} catch (e) {
			error({ statusCode: 404 })
		}
	}
}

const getters = {
	coinsSortingPrices: (state) => {
		return state.allCoins.map((coin) => {
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
