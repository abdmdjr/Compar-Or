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
						<th class="px-4 py-2"></th>
						<Sites
							v-for="CoinData in CoinDatas"
							:key="CoinData[0]"
							:site="CoinData[0]"
						/>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="border px-4 py-2">Prix métal</td>
						<MetalPrices
							v-for="CoinData in CoinDatas"
							:key="CoinData[1][0]"
							:pricemetal="CoinData[1][0]"
						/>
					</tr>
					<tr>
						<td class="border px-4 py-2">Prime</td>
						<Prime
							v-for="CoinData in CoinDatas"
							:key="CoinData[1][1]"
							:prime="CoinData[1][1]"
						/>
					</tr>
					<tr>
						<td class="border px-4 py-2">Prix total</td>
						<TotalPrice
							v-for="CoinData in CoinDatas"
							:key="CoinData[1][1]"
							:totalprice="CoinData[1][1]"
						/>
					</tr>
					<tr>
						<td class="border px-4 py-2">Livraison</td>
					</tr>
					<tr>
						<td class="border px-4 py-2">Prix avec livraison</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import MetalPrices from '~/components/table/MetalPrices'
import Prime from '~/components/table/Prime'
import Sites from '~/components/table/Sites'
import TotalPrice from '~/components/table/TotalPrice'

export default {
	components: {
		MetalPrices,
		Prime,
		Sites,
		TotalPrice
	},
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
			CoinDatas: []
		}
	},
	mounted() {
		axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
			this.CoinDatas = Object.entries(result.data.prices)
			console.log(this.CoinDatas)
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
