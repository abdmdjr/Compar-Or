const state = () => ({
	user: null,
	token: null
})

const mutations = {
	SET_USER(state, user) {
		state.user = user
	},
	SET_TOKEN(state, token) {
		state.token = token
	}
}

const actions = {
	async signUp(_, form) {
		await this.$axios.$post('/api/inscription/', form)
	},
	async signIn({ commit }, form) {
		const response = await this.$axios.post('/api/connexion/', form)
		console.log(response)
		if (response.status === 200) {
			this.$axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
			localStorage.setItem('token', response.data.token)
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
