/* eslint-disable no-console */
<template>
	<div>
		<div class="text-info my-10 text-justify">
			<p class="mb-5">
				Le prix affiché pour une pièce est le plus bas du marché des sites de
				pièces d'or en ligne français.
			</p>
			<p>
				Cliquez sur une pièce pour afficher la comparaison des prix, du taux de
				prime appliqué et du prix de livraison pour chaque site.
			</p>
		</div>
		<section class="flex flex-wrap">
			<div
				v-for="coin in coins"
				:key="coin.id"
				class="flex justify-center w-1/2 md:w-1/3 lg:w-1/4 mb-3"
			>
				<Coin :img="coin.img" :title="coin.title" :price="coin.price" />
			</div>
		</section>
	</div>
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
				const arrOfPrice = []
				Object.entries(coin.prices).forEach(([site, val]) =>
					arrOfPrice.push({ site, price: val.price })
				)
				Math.min(
					...arrOfPrice.map((p) => {
						return (coin.price = p.price) + (coin.site = p.site)
					})
				)
			})
			/* this.coins.map((coin) => {
				const arrOfPrice = []
				Object.values(coin.prices).forEach((val) => arrOfPrice.push(val.price))
				coin.price = Math.min(...arrOfPrice)
			}) */
		})
	}
}
</script>

<style scoped>
@media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
	p {
		@apply text-sm;
	}
}
@media only screen and (min-device-width: 359px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
	p {
		@apply text-sm;
		@apply my-4;
		width: 302px;
		@apply mx-auto;
	}
}
</style>
