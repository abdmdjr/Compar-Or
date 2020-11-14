<template>
	<main class="container mx-auto mt-16 sm:mt-24 px-8 sm:px-16 lg:px-8">
		<span class="block md:my-8 text-xs text-black opacity-75"
			><nuxt-link to="/">Accueil > </nuxt-link>
			<nuxt-link to="/coins">Pièces > </nuxt-link>{{ coinDetail.title }}</span
		>
		<CoinDetail
			:title="coinDetail.title"
			:img3x="coinDetail.img3x"
			:imgar3x="coinDetail.imgar3x"
			:gr="coinDetail.gr"
		/>
	</main>
</template>

<script>
import axios from 'axios'
import CoinDetail from '~/components/CoinDetail'

export default {
	components: {
		CoinDetail
	},
	data() {
		return {
			coinDetail: []
		}
	},
	mounted() {
		axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
			try {
				if (result.data) {
					this.coinDetail = result.data
				} else {
					this.$router.push('issue')
				}
			} catch (e) {
				console.log(e.message)
			}
		})
	}
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
