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
	data() {
		return {
			coinPrice: [],
			coinChart: {
				labels: [
					'Janvier',
					'Fevrier',
					'Mars',
					'Avril',
					'Mai',
					'Juin',
					'Juillet'
				],
				datasets: [{}],
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
						yAxes: [
							{
								ticks: {
									callback(value, index, values) {
										return value + '€'
									},
									stepSize: 20
								}
							}
						],
						xAxes: []
					}
				}
			}
		}
	},
	computed: {
		coinDetail() {
			return this.$store.state.coin.coin
		}
	},
	mounted() {
		return this.coinPrice.map((site) => {
			const obj = {
				label: [site[0]],
				data: site[1].data
			}
			return this.coinChart.datasets.push(obj)
		})
	},
	methods: {}
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
