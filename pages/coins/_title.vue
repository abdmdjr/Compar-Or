<template>
	<p>{{ this.$route.params.title }}</p>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			coin: []
		}
	},
	mounted() {
		axios.get(`/api/coins/${this.$route.params.title}`).then((result) => {
			console.log(result.data)
			this.coin = result.data
		})
	}
}
</script>

<style></style>
