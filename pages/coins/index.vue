<template>
	<div
		class="container mx-auto mt-16 sm:mt-24 lg:mt-0 px-5 sm:px-16 lg:px-8 pt-8"
	>
		<span class="block md:mb-4 text-xs text-black opacity-75"
			><nuxt-link to="/">Accueil > </nuxt-link>Pièces</span
		>
		<div class="flex flex-col lg:flex-row mt-2 text-justify">
			<div class="intro mb-2 md:mb-3"></div>
			<div class="flex flex-col text-sm md:text-lg font-light">
				<h1 class="title font-normal mb-2 md:mb-3 text-1xl md:leading-tight">
					Achetez vos pièces d'or au meilleur prix !
				</h1>
				<p class="mt-2">
					Le prix affiché pour une pièce est<span class="font-medium">
						le plus bas</span
					>
					des sites de pièces d'or que nous comparons, et pour plus de
					transparence, la livraison est incluse dans ce prix.
				</p>
				<h1 class="font-medium mt-2">
					Cliquez sur une pièce
					<h1 class="inline">d'or</h1>
					pour comparer les prix en détail.
				</h1>
			</div>
		</div>
		<main class="flex flex-col min-h-screen md:flex-row">
			<div id="filters" class="filters hidden lg:block">
				<h2 class="title font-medium text-lg mb-6">Filtres</h2>
				<h3 class=" font-bold mb-4">Type de métaux</h3>
				<input type="checkbox" class="mb-5" disabled checked /><label
					for="Or"
					class="ml-5"
					>Or</label
				><br />
				<input type="checkbox" class="" disabled /><label
					for="Argent"
					class="ml-5"
					>Argent (en cours)</label
				>
				<h4 class=" font-bold mt-4 mb-4">Prix</h4>
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
			<section class="cards flex flex-wrap justify-evenly w-full mb-20">
				<Coin
					v-for="coin in filteredCoins"
					:key="coin.id"
					class="card"
					:slug="coin.slug"
					:img="coin.img"
					:title="coin.title"
					:gr="coin.gr"
					:price="coin.price"
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
// import axios from 'axios'
import min from 'lodash.min'
import Coin from '~/components/Coin'

export default {
	components: {
		Coin
	},
	async asyncData({ $axios, params, error }) {
		try {
			const result = await $axios.get(`/api/coins`)
			return {
				coinDetail: result.data
			}
		} catch (e) {
			error({ statusCode: 404 })
		}
	},
	data() {
		return {
			coinDetail: [],
			checked500: false,
			checked999: false,
			checked1001: false
		}
	},
	computed: {
		filteredCoins() {
			// eslint-disable-next-line prettier/prettier
			const filtersLess = (priceCoin) => { return this.coinDetail.filter((coin) => coin.price < priceCoin) }
			// eslint-disable-next-line prettier/prettier
			const filtersEven = (priceLess, priceMore) => { return this.coinDetail.filter((coin) => coin.price >= priceLess && coin.price <= priceMore) }
			// eslint-disable-next-line prettier/prettier
			const filtersMore = (priceCoin) => { return this.coinDetail.filter((coin) => coin.price > priceCoin) }

			if (this.checked500 && this.checked999 && this.checked1001) {
				return this.coinDetail
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
				return this.coinDetail
			}
		}
	},
	created() {
		this.coinDetail.forEach((coin) => {
			const minValue = min(Object.values(coin.prices), (o) => coin.prices[o])
			coin.price = parseFloat(minValue[0]).toFixed(2)
		})
	},
	head() {
		return {
			title: "Compar'Or - Achetez vos pièces au meilleur prix"
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
/* iPhone 5 */
@media only screen and (min-device-width: 320px) and (max-device-width: 639px) {
	.card {
		flex-basis: 100%;
	}
}
/* iPhone 6, 6S, 7 and 8 */
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
	.card {
		flex-basis: 100%;
	}
}
/* iPhone 6/7/8 + */
@media only screen and (min-device-width: 410px) and (max-device-width: 736px) {
	.card {
		flex-basis: 47%;
	}
}

@screen sm {
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
		max-height: 333px;
	}
}
/* Ipad Pro */
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
	.container {
		@apply px-8;
	}
}
</style>
