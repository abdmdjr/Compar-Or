const state = () => ({
	coins: []
})

const mutations = {
	SET_COINS(state, coins) {
		state.coins = coins
	}
}

const actions = {
	async getCoins({ commit }) {
		const coins = await this.$axios.$get(`/api/coins`)
		commit('SET_COINS', coins)
	}
}

const getters = {
	coins: (state) => {
		return state.coins
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
