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
						<td class="border px-4 py-2">Prix</td>
						<td class="border px-4 py-2">Livraison</td>
					</tr>
					<div v-for="coinRow in coinRows" :key="coinRow.id">
						<CoinRow />
					</div>
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
	data() {
		return {
			coinRows: []
		}
	},
	mounted() {
		axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
			this.coinRows = result.data
			const arraySitePrice = Object.entries(this.coinRows.prices)
			arraySitePrice.sort((a, b) => a[1][0] - b[1][0])
			console.log(arraySitePrice)
		})
	}
}
</script>

<style>
img {
	-webkit-filter: drop-shadow(3px 3px 3px #222);
	filter: drop-shadow(3px 3px 3px #222);
}
</style>
