<template>
	<div class="mx-auto mt-10 flex space-x-32">
		<img class="lg:w-72 h-full" :src="img" :alt="title" />
		<div class="flex flex-col space-y-3">
			<h2 class="leading-none text-primary font-normal lg:text-4xl">
				{{ title }}
				<span class="block mt-1 font-light text-xl">{{ gr }}</span>
			</h2>
			<h3 class="text-primary font-normal lg:text-xl">
				Tableau de comparaison
			</h3>
			<table class="table-auto">
				<tbody>
					<tr class="bg-yellow-300">
						<td class="border px-4 py-2">Site</td>
						<td class="border px-4 py-2">Valeur métal</td>
						<td class="border px-4 py-2">Prime</td>
						<td class="border px-4 py-2">Prix</td>
						<td class="border px-4 py-2">Livraison</td>
						<td class="border px-4 py-2">Prix avec livraison</td>
					</tr>
					<CoinRow
						v-for="coinRow in coinRows"
						:key="coinRow.site"
						:site="coinRow.site"
						:url="coinRow.url"
						:pricemetal="coinRow.pricemetal"
						:prime="coinRow.prime"
						:price="coinRow.price"
						:livraison="coinRow.livraison"
						:pricelivraison="coinRow.pricelivraison"
					/>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import CoinRow from '~/components/CoinRow'

export default {
	components: {
		CoinRow
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
			coinRows: []
		}
	},
	mounted() {
		axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
			this.coinRows = Object.entries(result.data.prices)
			this.coinRows.sort((a, b) => a[1][0] - b[1][0])
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
				coinRow.site = coinRow[0]
				coinRow.price = coinRow[1][0]
				coinRow.prime = coinRow[1][1]
				coinRow.livraison = coinRow[1][2]
				coinRow.url = coinRow[1][3]
				coinRow.pricelivraison = coinRow.price + coinRow.livraison
				console.log(coinRow)
			})
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
