<template>
	<p>{{ this.$route.params.coin }}</p>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			coin: ''
		}
	},
	mounted() {
		axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
			console.log(result.data)
			this.coin = result.data
		})
	}
}
</script>

<style></style>
