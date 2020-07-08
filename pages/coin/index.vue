<template>
	<div class="flex-row">
		<div class="text-info px-6 my-10">
			<p class="mb-5">
				Le prix affiché pour une pièce est le plus bas du marché des sites de
				pièces d'or en ligne français. <br />
			</p>
			<p>
				Cliquez sur une pièce pour afficher la comparaison des prix, du taux de
				prime appliqué et du prix de livraison pour chaque site.
			</p>
		</div>
		<section class="flex flex-wrap justify-center px-6">
			<div v-for="coin in coins" :key="coin._id">
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
				for (const value of Object.values(coin.price)) {
					coin.price = Math.min(value)
				}
			})
		})
	}
}
</script>

<style></style>
