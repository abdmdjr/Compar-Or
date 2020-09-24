<template>
	<div class="mx-auto mt-10 flex space-x-32">
		<img class="lg:w-72 h-full" :src="img" :alt="title" />
		<div class="flex flex-col space-y-3">
			<h1 class="leading-none text-primary font-normal lg:text-4xl">
				{{ title }}
				<span class="block mt-1 font-light text-xl">{{ gr }}</span>
			</h1>
			<h2 class="text-primary font-normal lg:text-xl">
				Tableau de comparaison
			</h2>
			<table class="table-auto">
				<thead>
					<tr>
						<th></th>
						<th
							v-for="column in filteredColumns"
							:key="column"
							class="px-4 py-2"
						>
							{{ column }}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border px-4 py-2">
						Prix métal
						<td
							v-for="coin in filteredCoins"
							:key="coin"
							class="border px-4 py-2"
						>
							{{ coin[1][0] }}
						</td>
					</tr>
					<tr class="border px-4 py-2">
						Prime
						<td
							v-for="coin in filteredCoins"
							:key="coin"
							class="border px-4 py-2"
						>
							{{ coin[1][1] }}
						</td>
					</tr>
					<tr class="border px-4 py-2">
						Prix total
						<td
							v-for="coin in calculatedPrime"
							:key="coin"
							class="border px-4 py-2"
						>
							{{ coin[1][1] }}
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
				return column[0]
			})
		},
		filteredCoins() {
			return this.coinDatas.map((coin) => {
				return coin
			})
		}
	},
	mounted() {
		axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
			this.coinDatas = Object.entries(result.data.prices)
			console.log(this.coinDatas)
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
img {
	-webkit-filter: drop-shadow(3px 3px 3px #222);
	filter: drop-shadow(3px 3px 3px #222);
}
</style>
