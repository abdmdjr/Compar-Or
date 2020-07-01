<template>
	<section class="container flex flex-wrap justify-center px-5 py-24 mx-auto">
		<div v-for="coin in coins" :key="coin._id">
			<Coin :img="coin.img" :title="coin.title" :price="coin.price" />
		</div>
	</section>
</template>

<script>
import axios from 'axios'
import Coin from '~/components/Coin'
export default {
	components: {
		Coin
	},
	data() {
		return {
			coins: []
		}
	},
	mounted() {
		axios.get('/api/coins').then((result) => {
			this.coins = result.data
			this.coins.map((coin) => {
				for (const value of Object.values(coin.price)) {
					coin.price = Math.min(value)
				}
			})
		})
	}
}
</script>

<style></style>
