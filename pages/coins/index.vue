<template>
	<div class="container mx-auto mt-16 sm:mt-24 px-5 sm:px-16 lg:px-8">
		<span class="block md:my-8 text-xs text-black opacity-75"
			><nuxt-link to="/">Accueil > </nuxt-link>Pièces</span
		>
		<div class="flex flex-col lg:flex-row mt-2 text-justify">
			<div
				class="intro font-medium mb-2 md:mb-3 text-lg md:leading-tight"
			></div>
			<div class="flex flex-col">
				<h1 class="font-medium mb-2 md:mb-3 text-1xl md:leading-tight">
					Achetez vos pièces d'or au meilleur prix !
				</h1>
				<p class="mt-2 text-sm lg:text-base">
					Le prix affiché pour une pièce est<span class="text-important">
						le plus bas</span
					>
					des sites de pièces d'or que nous comparons, et pour plus de
					transparence, le prix affiché sous chaque pièce comprend le prix de la
					livraison.
				</p>
				<p class="mt-2 text-sm lg:text-base">
					Cliquez sur une pièce d'or pour
					<span class="text-important">comparer les prix en détail.</span>
				</p>
			</div>
		</div>
		<main class="flex flex-col md:flex-row">
			<div id="filters" class="filters hidden lg:block">
				<h2 class="font-medium text-lg mb-6">Filtres</h2>
				<h3 class="mb-4">Type de métaux</h3>
				<input type="checkbox" class="mb-5" disabled checked /><label
					for="Or"
					class="ml-5"
					>Or</label
				><br />
				<input type="checkbox" class="" disabled /><label
					for="Argent"
					class="ml-5"
					>Argent (soon)</label
				>
				<h4 class="mt-4 mb-4">Prix</h4>
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
			<section class="cards flex flex-wrap justify-between w-full mb-24">
				<Coin
					v-for="coin in filteredCoins"
					:key="coin.id"
					class="card"
					:slug="coin.slug"
					:img="coin.img"
					:title="coin.title"
					:gr="coin.gr"
					:price="coin.price"
					:site="coin.site"
				/>
				<button
					class="filters-btn hidden px-8 py-2 rounded text-white font-medium"
				>
					Filtres
				</button>
			</section>
		</main>
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

			if (this.checked500 && this.checked999 && this.checked1001) {
				return this.coins
			} else if (this.checked500 && this.checked999) {
				return filtersLess(1000)
			} else if (this.checked999 && this.checked1001) {
				return filtersMore(500)
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
				coin.site = Object.keys(coin.prices)
					.reduce((prev, curr) =>
						coin.prices[prev] < coin.prices[curr] ? prev : curr
					)
					.split(' ')
					.join('.')
				const minValue = min(Object.values(coin.prices), (o) => coin.prices[o])
				coin.price = parseFloat(minValue[0]).toFixed(2)
				coin.url = minValue[3]
			})
		})
	},
	head() {
		return {
			title: "Compar'Or - Comparons les prix"
		}
	}
}
</script>

<style scoped>
.filters-btn {
	background: linear-gradient(90deg, #875894 0%, #9760b8 100%);
	position: fixed;
	z-index: 100;
	left: 50%;
	bottom: 6%;
	-webkit-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	transform: translateX(-50%);
	display: hidden;
}

.card {
	flex-basis: 100%;
}

@screen md {
	.intro {
		min-width: 190px;
	}
	#filters {
		min-width: 190px;
		margin-top: 47px;
	}
	.card {
		flex-basis: 47%;
	}
}

@screen lg {
	.intro {
		min-width: 230px;
	}
	#filters {
		min-width: 230px;
		margin-top: 47px;
	}
	.card {
		flex-basis: 24%;
	}
}
/* Ipad Pro */
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
	.container {
		@apply px-8;
	}
}
</style>
