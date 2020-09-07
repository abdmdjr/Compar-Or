<template>
	<div class="container mx-auto flex">
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
