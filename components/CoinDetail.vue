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
			<h2 class="text-center text-primary font-normal text-lg lg:text-xl">
				Tableau de comparaison
			</h2>
			<table class="table-auto">
				<thead>
					<tr>
						<th></th>
						<th
							v-for="column in filteredColumns"
							:key="column"
							class="px-2 py-2"
						>
							<a :href="column[1][3]" target="blank">{{ column[0] }}</a>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border px-2 py-2">
						<h1 class="px-2 py-2">Prix métal</h1>
						<td
							v-for="pricemetal in calculatedPriceMetal"
							:key="pricemetal"
							class="border px-2 py-2"
						>
							{{ pricemetal }}
						</td>
					</tr>
					<tr class="border px-2 py-2">
						Prime
						<td
							v-for="prime in filteredPrime"
							:key="prime"
							class="border px-2 py-2"
						>
							{{ prime }}
						</td>
					</tr>
					<tr class="border px-2 py-2">
						Prix total
						<td
							v-for="resultPrice in filteredCoins"
							:key="resultPrice"
							class="border px-2 py-2"
						>
							{{ resultPrice[1][0] }}€
						</td>
					</tr>
					<tr class="border px-2 py-2">
						Livraison
						<td
							v-for="livraison in filteredCoins"
							:key="livraison"
							class="border px-2 py-2"
						>
							{{ livraison[1][2] }}€
						</td>
					</tr>
					<tr class="border px-2 py-2">
						Prix avec livraison
						<td
							v-for="resultPriceTotal in calculatedPriceTotal"
							:key="resultPriceTotal"
							class="border px-2 py-2"
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
				console.log(column[1][3])
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
		}
	},
	mounted() {
		axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
			this.coinDatas = Object.entries(result.data.prices)
			/* 			this.coinRows.sort((a, b) => a[1][0] - b[1][0])
			this.coinRows.map((coinRow) => {
				if (typeof coinRow[1][1] === 'string') {
					coinRow.pricemetal = '*'
				} else {
					const resultPriceMetal = coinRow[1][0] - coinRow[1][1]
					coinRow.pricemetal = resultPriceMetal.toFixed(2)
					coinRow.pricemetal = parseFloat(
						coinRow.pricemetal.replace(/\s/g, '').replace(',', '.')
					)
				}
				coinRow.price = coinRow[1][0]
				coinRow.prime = coinRow[1][1]
				coinRow.livraison = coinRow[1][2]
				coinRow.url = coinRow[1][3]
				coinRow.pricelivraison = coinRow.price + coinRow.livraison
				console.log(coinRow)
			})
			this.GoldAvenue = this.coinRows[0][0]
			this.Lingor = this.coinRows[1][0]
			this.AuCoffre = this.coinRows[2][0] */
			/* 			const arraySitePrice = Object.entries(this.coinRows.prices)
			arraySitePrice.sort((a, b) => a[1][0] - b[1][0])
			console.log(arraySitePrice) */
		})
	}
}
</script>

<style scoped>
tr {
	font-size: 0.8rem;
}
td {
	font-size: 0.75rem;
}
img {
	-webkit-filter: drop-shadow(3px 3px 3px #222);
	filter: drop-shadow(3px 3px 3px #222);
}
</style>
