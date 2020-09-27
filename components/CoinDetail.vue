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
			<h2 class="text-center font-normal text-md lg:text-xl">
				Tableau de comparaison
			</h2>
			<table class="table-auto">
				<thead>
					<tr>
						<th></th>
						<th
							v-for="(column, index) in filteredColumns"
							:key="column"
							class="text-xs px-2 py-2 text-primary"
							:class="{ colorBestPrice: index === minPrice }"
						>
							<a :href="column[1][3]" target="blank">{{ column[0] }}</a>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border text-xs">
						<div class="px-2 py-2 bg-gray-100">Prix métal</div>
						<td
							v-for="(pricemetal, index) in calculatedPriceMetal"
							:key="pricemetal"
							class="border px-2 py-2"
							:class="{ colorBestPrice: index === minPrice }"
						>
							{{ pricemetal }}
						</td>
					</tr>
					<tr class="border text-xs">
						<div class="px-2 py-2 bg-gray-100">Prime</div>
						<td
							v-for="(prime, index) in filteredPrime"
							:key="prime"
							class="border px-2 py-2"
							:class="{ colorBestPrice: index === minPrice }"
						>
							{{ prime }}
						</td>
					</tr>
					<tr class="border text-xs">
						<div class="px-2 py-2 bg-gray-100">Prix total</div>
						<td
							v-for="(resultPrice, index) in filteredCoins"
							:key="resultPrice"
							class="border px-2 py-2"
							:class="{ colorBestPrice: index === minPrice }"
						>
							{{ resultPrice[1][0] }}€
						</td>
					</tr>
					<tr class="border text-xs">
						<div class="px-2 py-2 bg-gray-100">Livraison</div>
						<td
							v-for="(livraison, index) in filteredCoins"
							:key="livraison"
							class="border px-2 py-2"
							:class="{ colorBestPrice: index === minPrice }"
						>
							{{ livraison[1][2] }}€
						</td>
					</tr>
					<tr class="border text-xs">
						<div class="px-2 py-2 bg-gray-100">Prix avec livraison</div>
						<td
							v-for="(resultPriceTotal, index) in calculatedPriceTotal"
							:key="resultPriceTotal"
							class="border px-2 py-2"
							:class="{ colorBestPrice: index === minPrice }"
						>
							{{ resultPriceTotal }}€
						</td>
					</tr>
				</tbody>
			</table>
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
		}
	},
	data() {
		return {
			coinDatas: [],
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
		filteredColumns() {
			return this.coinDatas.map((column) => {
				return column
			})
		},
		filteredCoins() {
			return this.coinDatas.map((coin) => {
				return coin
			})
		},
		calculatedPriceMetal() {
			return this.coinDatas.map((coin) => {
				let resultPriceMetal = ''
				if (typeof coin[1][1] === 'string') {
					resultPriceMetal = 'N/C'
				} else {
					resultPriceMetal = coin[1][0] - coin[1][1]
					resultPriceMetal = parseFloat(resultPriceMetal).toFixed(2) + '€'
				}
				return resultPriceMetal
			})
		},
		filteredPrime() {
			return this.coinDatas.map((coin) => {
				let resultPrime
				if (typeof coin[1][1] === 'number') {
					resultPrime = coin[1][1] + '€'
				} else {
					resultPrime = coin[1][1]
				}
				return resultPrime
			})
		},
		calculatedPriceTotal() {
			return this.coinDatas.map((coin) => {
				let priceTotal = coin[1][0] + coin[1][2]
				priceTotal = parseFloat(priceTotal).toFixed(2)
				return priceTotal
			})
		},
		minPrice() {
			const minPrice = Math.min(...this.calculatedPriceTotal).toString()
			const result = this.calculatedPriceTotal.indexOf(minPrice)
			return result
		}
	},
	mounted() {
		axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
			this.coinDatas = Object.entries(result.data.prices)
		})
	}
}
</script>

<style scoped>
.colorBestPrice {
	@apply bg-orange-200;
}
img {
	-webkit-filter: drop-shadow(3px 3px 3px #222);
	filter: drop-shadow(3px 3px 3px #222);
}
</style>
