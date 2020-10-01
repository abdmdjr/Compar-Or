<template>
	<div class="flex flex-col lg:flex-row mx-auto mt-10">
		<img class="w-48 lg:w-72 self-center mb-8" :src="img" :alt="title" />
		<div class="flex flex-col space-y-3">
			<h1
				class="text-center leading-none text-primary font-normal text-xl lg:text-4xl"
			>
				{{ title }}
				<span class="block self-center mt-1 font-light text-sm lg:text-xl">{{
					gr
				}}</span>
			</h1>
			<p
				class="block self-center text-center mt-3 font-light text-sm lg:text-xl"
			>
				Meilleur prix : <strong>{{ bestPrice }}€</strong> sur
				<u
					><a :href="bestUrl">{{ bestSite }}.fr</a></u
				><br />
				<span class="text-xs"
					>(ce prix inclut toutes les taxes + la livraison sécurisée jusqu'à
					votre domicile)</span
				>
			</p>
			<section
				class="text-justify block self-center mt-3 font-light text-sm lg:text-xl"
			>
				<h2 class="text-center text-lg mb-3 font-normal">
					Description de la pièce
				</h2>
				<p
					v-for="(descr, index) in coinDesc"
					:key="index"
					:class="{ pMarge: index === 1 }"
				>
					{{ descr }}
				</p>
				<h2 class="text-center my-4 font-normal text-md text-lg lg:text-xl">
					Tableau de comparaison
				</h2>

				<table
					class="table-auto mx-auto text-right text-primary text-xs md:text-lg"
				>
					<thead>
						<tr>
							<th></th>
							<th
								v-for="(column, index) in filteredCoins"
								:key="index"
								class="px-2 py-2"
								:class="{ colorBestSiteFirst: index === minPrice }"
							>
								<a :href="column[1][4]" target="blank">{{ column[0] }}</a>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="border-b">
							<div class="px-2 py-2 text-left">Prix métal</div>
							<td
								v-for="(pricemetal, index) in calculatedPriceMetal"
								:key="index"
								class="px-2 py-2"
								:class="{ colorBestSite: index === minPrice }"
							>
								{{ pricemetal }}
							</td>
						</tr>
						<tr class="border-b">
							<div class="px-2 py-2 text-left">Prime</div>
							<td
								v-for="(prime, index) in filteredPrime"
								:key="index"
								class="px-2 py-2"
								:class="{ colorBestSite: index === minPrice }"
							>
								{{ prime }}
							</td>
						</tr>
						<tr class="border-b">
							<div class="px-2 py-2 text-left">Prix total</div>
							<td
								v-for="(resultPrice, index) in filteredCoins"
								:key="index"
								class="px-2 py-2"
								:class="{ colorBestSite: index === minPrice }"
							>
								{{ resultPrice[1][1] }}€
							</td>
						</tr>
						<tr class="border-b">
							<div class="px-2 py-2 text-left">Livraison</div>
							<td
								v-for="(livraison, index) in filteredCoins"
								:key="index"
								class="px-2 py-2 text-right"
								:class="{ colorBestSite: index === minPrice }"
							>
								{{ livraison[1][3] }}€
							</td>
						</tr>
						<tr>
							<div class="px-2 py-2 text-left">
								Prix avec livraison
							</div>
							<td
								v-for="(resultPriceTotal, index) in calculatedPriceTotal"
								:key="index"
								class="px-2 py-2"
								:class="{ colorBestPrice: index === minPrice }"
							>
								{{ resultPriceTotal }}€
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	components: {},
	props: {
		title: {
			type: String,
			default: ''
		},
		img: {
			type: String,
			default: ''
		},
		gr: {
			type: String,
			default: ''
		},
		description: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			coinDatas: [],
			coinDesc: [],
			bestPrice: '',
			bestSite: '',
			bestUrl: '',
			namesRows: [
				'Prix métal',
				'Prime',
				'Prix total',
				'Livraison',
				'Prix avec livraison'
			]
		}
	},
	computed: {
		filteredCoins() {
			return this.coinDatas.map((coin) => {
				return coin
			})
		},
		calculatedPriceMetal() {
			return this.coinDatas.map((coin) => {
				let resultPriceMetal = ''
				if (typeof coin[1][2] === 'string') {
					resultPriceMetal = 'N/C'
				} else {
					resultPriceMetal = coin[1][1] - coin[1][2]
					resultPriceMetal = parseFloat(resultPriceMetal).toFixed(2) + '€'
				}
				return resultPriceMetal
			})
		},
		filteredPrime() {
			return this.coinDatas.map((coin) => {
				let resultPrime
				if (typeof coin[1][2] === 'number') {
					resultPrime = coin[1][2] + '€'
				} else {
					resultPrime = coin[1][2]
				}
				return resultPrime
			})
		},
		calculatedPriceTotal() {
			return this.coinDatas.map((coin) => {
				let priceTotal = coin[1][0]
				priceTotal = parseFloat(priceTotal).toFixed(2)
				return priceTotal
			})
		},
		minPrice() {
			const result = this.calculatedPriceTotal.indexOf(this.bestPrice)
			return result
		}
	},
	mounted() {
		axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
			this.coinDatas = Object.entries(result.data.prices)
			this.coinDesc = Object.entries(result.data)[1][1]
			this.bestPrice = Math.min(...this.calculatedPriceTotal).toString()
			this.bestSite = this.filteredCoins[this.minPrice][0]
			this.bestUrl = this.filteredCoins[this.minPrice][1][4]
		})
	},
	head() {
		return {
			title: "Compar'Or - " + this.title
		}
	}
}
</script>

<style scoped>
.colorBestSiteFirst {
	@apply bg-gray-100 rounded-t-lg;
}
.colorBestSite {
	@apply bg-gray-100;
}
.colorBestPrice {
	@apply bg-gray-200 rounded-b-lg;
}
.pMarge {
	@apply my-3;
}
img {
	-webkit-filter: drop-shadow(3px 3px 3px #222);
	filter: drop-shadow(3px 3px 3px #222);
}
</style>
