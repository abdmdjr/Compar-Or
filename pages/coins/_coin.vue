<template>
	<main
		class="container mx-auto mt-16 sm:mt-24 lg:mt-0 px-5 sm:px-16 lg:px-8 pt-8"
	>
		<span v-if="coinDetail" class="block md:mb-4 text-xs text-black opacity-75"
			><nuxt-link to="/">Accueil > </nuxt-link>
			<nuxt-link to="/coins">Pièces > </nuxt-link>{{ coinDetail.title }}</span
		>
		<CoinDetail
			v-if="coinDetail"
			:title="coinDetail.title"
			:img3x="coinDetail.img3x"
			:imgar3x="coinDetail.imgar3x"
			:gr="coinDetail.gr"
		/>
	</main>
</template>

<script>
import CoinDetail from '~/components/CoinDetail'

export default {
	components: {
		CoinDetail
	},
	async asyncData({ $axios, params, error }) {
		try {
			const result = await $axios.get(`/api/coins/${params.coin}`)
			return { coinDetail: result.data }
		} catch (e) {
			error({ statusCode: 404 })
		}
	},
	data() {
		return {
			coinDetail: []
		}
	}
	// mounted() {
	// 	axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
	// 		try {
	// 			if (result.data) {
	// 				this.coinDetail = result.data
	// 			} else {
	// 				this.$router.push('issue')
	// 			}
	// 		} catch (e) {
	// 			console.log(e.message)
	// 		}
	// 	})
	// }
}
</script>

<style scoped>
/* Ipad Pro */
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
	.container {
		@apply px-8;
	}
}
</style>
