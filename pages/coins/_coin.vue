<template>
	<div class="container mx-auto mt-16 sm:mt-24 px-8 sm:px-16 lg:px-8">
		<span class="block md:my-8 text-xs text-black opacity-75"
			><nuxt-link to="/">Accueil > </nuxt-link>
			<nuxt-link to="/coins">Pièces > </nuxt-link>{{ coinDetail.title }}</span
		>
		<CoinDetail
			:title="coinDetail.title"
			:img="coinDetail.img"
			:gr="coinDetail.gr"
		/>
	</div>
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
			this.coinDetail = result.data
		})
	}
}
</script>

<style></style>
