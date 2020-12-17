<template>
	<section class="mt-24">
		<h1 class="mb-10">COINS</h1>
		<div v-for="coin in coins" :key="coin.id">
			{{ coin.title }}
			<ul>
				<li v-for="prices in coin.prices" :key="prices">
					{{ prices }}
				</li>
			</ul>
			{{ coin.prices[0] }}
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'
export default {
	computed: mapState(['coins']),
	mounted() {
		this.$store.dispatch('getCoins')
		console.log(this.$store.state)
	}
}
</script>

<style></style>
