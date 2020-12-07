<template>
	<main
		class="container mx-auto mt-16 sm:mt-24 lg:mt-0 px-5 sm:px-16 lg:px-8 pt-8 mb-20"
	>
		<span v-if="coinDetail" class="block md:mb-4 text-xs text-black opacity-75"
			><nuxt-link to="/">Accueil > </nuxt-link>
			<nuxt-link to="/coins">Pièces > </nuxt-link>{{ coinDetail.title }}</span
		>
		<div
			class="flex flex-col h-full md:space-x-12 items-center md:flex-row md:justify-between lg:space-x-0"
		>
			<CoinDetail
				v-if="coinDetail"
				:title="coinDetail.title"
				:img3x="coinDetail.img3x"
				:imgar3x="coinDetail.imgar3x"
				:gr="coinDetail.gr"
				:price="coinPrice[0][1][0].toFixed(2)"
				:site="coinPrice[0][0].split(' ').join('.')"
				:url="coinPrice[0][1][3]"
			/>
			<div class="flex flex-col space-x-20">
				<h2
					class="mt-8 mb-3 md:mt-10 lg:mb-3 lg:mt-0 text-base md:text-1xl md:leading-tight font-normal"
				>
					Comparaison des prix
				</h2>
				<p class="mb-4 text-sm md:text-lg font-light">
					Ce tableau indique les prix affichés sur les sites de vente, les frais
					de port, et le prix total pour la pièce "<strong>{{
						coinDetail.title
					}}</strong
					>" en temps réel.
				</p>
				<CoinChart
					:data="coinChart"
					:options="coinChartOptions"
					:height="200"
					:width="700"
				/>
				<div>
					<h2 class="">
						Description
					</h2>
					<p
						v-for="(descr, index) in coinDetail.description"
						:key="index"
						:class="{ pMarge: index === 1 }"
						class="text-sm md:text-lg font-light"
					>
						{{ descr }}
					</p>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import CoinDetail from '~/components/CoinDetail'
import CoinChart from '~/components/CoinChart'

export default {
	components: {
		CoinDetail,
		CoinChart
	},
	async asyncData({ $axios, params, error }) {
		try {
			const result = await $axios.get(`/api/coins/${params.coin}`)
			return {
				coinDetail: result.data,
				coinPrice: Object.entries(result.data.prices).sort((a, b) => {
					return a[1][0] - b[1][0]
				})
			}
		} catch (e) {
			error({ statusCode: 404 })
		}
	},
	data() {
		return {
			coinDetail: [],
			coinPrice: [],
			coinChart: {
				labels: [],
				datasets: [
					{
						// barPercentage: 1,
						// barThickness: 30,
						// minBarLength: 10,
						label: 'Prix en euros',
						data: [],
						backgroundColor: [
							'#215385',
							'#215385',
							'#215385',
							'#215385',
							'#215385'
						],
						borderColor: [],
						borderWidth: 1
					}
				]
			},
			coinChartOptions: {
				responsive: true,
				legend: {
					display: false
				},
				title: {
					display: true,
					text: 'Graphique des prix en euros',
					fontSize: 14,
					fontColor: '#6b7280'
				},
				tooltips: {
					backgroundColor: 'orange'
				},
				scales: {
					yAxes: [{}],
					xAxes: [
						{
							ticks: {
								callback(value, index, values) {
									return value + '€'
								},
								stepSize: 20
							}
						}
					]
				}
			}
		}
	},
	computed: {},
	created() {
		const labels = this.coinChart.labels
		const prices = this.coinChart.datasets[0].data
		this.coinPrice.map((site) => {
			labels.push(site[0])
			prices.push(site[1][0])
		})
	}
}
</script>

<style scoped>
/* Ipad Pro */
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
	.container {
		@apply px-8;
	}
}
</style>
