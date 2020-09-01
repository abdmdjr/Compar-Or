<template>
	<div class="container mx-auto px-5 lg-px-0">
		<p>{{ coin.title }}</p>
		<img :src="coin.img" alt="shit" />
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			coin: ''
		}
	},
	created() {
		axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
			console.log(result.data)
			this.coin = result.data
			console.log(this.coins)
		})
	}
}
</script>

<style></style>
