<template>
	<main
		class="container mx-auto mt-16 sm:mt-24 lg:mt-0 px-5 sm:px-16 lg:px-8 pt-8 mb-20"
	>
		<span v-if="coinDetail" class="block md:mb-4 text-xs text-black opacity-75"
			><nuxt-link to="/">Accueil > </nuxt-link>
			<nuxt-link to="/coins">Pièces > </nuxt-link>{{ coinDetail.title }}</span
		>
		<div class="flex flex-col h-full md:flex-col lg:flex-row lg:space-x-15">
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
			<div class="flex flex-col">
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
				<section class="w-full self-start items-start text-justify">
					<table
						class="table-auto md:table-fixed w-full text-right text-xs md:text-lg rounded-lg"
					>
						<thead class="text-gray-800">
							<th class="md:w-2/6 lg:w-1/3 bg-white"></th>
							<th class="py-2 px-1 md:px-3 text-xs md:text-lg font-normal">
								Prix
							</th>
							<th class="py-2 px-1 md:px-3 text-xs md:text-lg font-normal">
								Livraison
							</th>
							<th class="py-2 px-1 md:px-3 text-xs md:text-lg font-bold">
								Total
							</th>
						</thead>
						<tbody>
							<CoinTable
								v-for="(coin, index) in coinPrice"
								:key="index"
								:class="{
									colorBestPrice: index === 0,
									colorSecondPrice: index === 1,
									colorThirdPrice: index === 2,
									colorFourthPrice: index === 3,
									colorFivePrice: index === 4
								}"
								:title="coinDetail.title"
								:url="coin[1][3]"
								:site="coin[0].split(' ').join('.')"
								:price="coin[1][1].toFixed(2)"
								:livraison="coin[1][2]"
								:pricetotal="coin[1][0].toFixed(2)"
							/>
						</tbody>
					</table>
				</section>
				<div>
					<h2
						class="mt-8 mb-3 md:mt-10 lg:mb-3 text-base md:text-1xl md:leading-tight font-normal"
					>
						Description
					</h2>
					<p
						v-for="(descr, index) in coinDetail.description"
						:key="index"
						:class="{ pMarge: index === 1 }"
						class="text-sm md:text-lg font-light text-justify"
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
import CoinTable from '~/components/CoinTable'

export default {
	components: {
		CoinDetail,
		CoinTable
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
			coinPrice: []
		}
	},
	computed: {},
	created() {
		console.log(this.coinPrice)
	},
	head() {
		return {
			title: "Compar'Or - " + this.coinDetail.title
		}
	}
}
</script>

<style lang="scss">
/* Ipad Pro */
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
	.container {
		@apply px-8;
	}
}

$base-color: #1d3557;

.colorBestPrice a,
.colorBestPrice:hover {
	@apply bg-blue-800 text-white;
}

.pMarge {
	@apply my-3;
}
</style>
