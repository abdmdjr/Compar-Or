const state = () => ({
	user: null,
	token: null,
	error: null
})

const mutations = {
	SET_USER(state, user) {
		state.user = user
	},
	SET_TOKEN(state, token) {
		state.token = token
	},
	HANDLE_ERROR(state, error) {
		state.error = error
	}
}

const actions = {
	async signIn({ commit }, form) {
		try {
			await this.$axios.$post('/api/inscription/', form)
			await this.$router.push('/connexion')
		} catch (err) {
			commit('HANDLE_ERROR', err.response.data)
		}
	}
}

const getters = {}

export default {
	state,
	mutations,
	actions,
	getters
}
