/* eslint-disable no-console */
<template>
	<div class="container mx-auto">
		<div class="text-info my-10 text-justify py-3">
			<p class="mb-5">
				Le prix affiché pour une pièce est le plus bas du marché des sites de
				pièces d'or en ligne français.
			</p>
			<p>
				Cliquez sur une pièce pour afficher la comparaison des prix, du taux de
				prime appliqué et du prix de livraison pour chaque site.
			</p>
		</div>
		<div class="content flex">
			<div id="filters" class="filters hidden md:block mr-10">
				<h4 class="text-primary text-xl font-medium mb-6">Filtres</h4>
				<h5 class="text-primary font-bold mb-4">Type de métaux</h5>
				<input type="checkbox" class="mb-5" disabled checked /><label
					for="Or"
					class="ml-5"
					>Or</label
				><br />
				<input type="checkbox" class="" disabled /><label
					for="Argent"
					class="ml-5"
					>Argent (bientôt)</label
				>
				<h5 class="text-primary font-bold mt-4 mb-4">Prix</h5>
				<input v-model="checked500" type="checkbox" class="mb-5" /><label
					for="coin_500"
					class="ml-5"
					>- de 500€</label
				><br />
				<input v-model="checked999" type="checkbox" class="mb-5" /><label
					for="coin_1000"
					class="ml-5"
					>500€ à 1000€</label
				><br />
				<input v-model="checked1001" type="checkbox" class="mb-5" /><label
					for="coin_1001"
					class="ml-5"
					>1000€ et +</label
				>
			</div>
			<section class="cards flex flex-wrap justify-center">
				<div
					v-for="coin in filteredCoins"
					:key="coin.id"
					class="card flex flex-wrap justify-center mb-3"
				>
					<Coin
						:slug="coin.slug"
						:img="coin.img"
						:title="coin.title"
						:gr="coin.gr"
						:price="coin.price"
						:site="coin.site"
						:url="coin.url"
					/>
				</div>
				<button
					class="filters-btn md:hidden px-8 py-2 rounded bg-purple-700 text-white font-medium"
				>
					Filtres
				</button>
			</section>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import min from 'lodash.min'
import Coin from '~/components/Coin'

export default {
	components: {
		Coin
	},
	data() {
		return {
			coins: [],
			checked500: false,
			checked999: false,
			checked1001: false
		}
	},
	computed: {
		filteredCoins() {
			// eslint-disable-next-line prettier/prettier
			const filtersLess = (priceCoin) => { return this.coins.filter((coin) => coin.price < priceCoin) }
			// eslint-disable-next-line prettier/prettier
			const filtersEven = (priceLess, priceMore) => { return this.coins.filter((coin) => coin.price >= priceLess && coin.price <= priceMore) }
			// eslint-disable-next-line prettier/prettier
			const filtersMore = (priceCoin) => { return this.coins.filter((coin) => coin.price > priceCoin) }

			if (this.checked500 && this.checked999) {
				return filtersLess(1000)
			} else if (this.checked500) {
				return filtersLess(500)
			} else if (this.checked999) {
				return filtersEven(500, 1000)
			} else if (this.checked1001) {
				return filtersMore(1000)
			} else {
				return this.coins
			}
		}
	},
	mounted() {
		axios.get('/api/coins').then((result) => {
			this.coins = result.data
			this.coins.map((coin) => {
				coin.site = Object.keys(coin.prices).reduce((prev, curr) =>
					coin.prices[prev] < coin.prices[curr] ? prev : curr
				)
				const minValue = min(Object.values(coin.prices), (o) => coin.prices[o])
				console.log(minValue)
				coin.price = minValue[0]
				coin.url = minValue[3]
			})
		})
	}
}
</script>

<style scoped>
.filters {
	min-width: 140px;
}

.card {
	flex-basis: 21%;
}

.filters-btn {
	position: fixed;
	z-index: 100;
	left: 50%;
	bottom: 6%;
	-webkit-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	transform: translateX(-50%);
}

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
