<template>
	<main
		class="container mx-auto mt-16 sm:mt-24 lg:mt-0 px-5 sm:px-16 lg:px-8 pt-8 mb-15 md:mb-20"
	>
		<span class="block md:mb-4 text-xs text-black opacity-75"
			><nuxt-link to="/">Accueil > </nuxt-link>
			<nuxt-link to="/coins">Pièces > </nuxt-link>{{ coinDetail.title }}</span
		>
		<div
			class="flex flex-col h-full md:mt-10 md:flex-col lg:flex-row lg:space-x-15"
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
			<div class="flex flex-col">
				<h2
					class="mt-15 mb-3 md:mb-8 text-lg font-normal md:text-1xl lg:text-2xl md:leading-tight lg:mb-5 lg:mt-0"
				>
					Tableau comparatif
				</h2>
				<p class="mb-8 lg:mb-5 text-base md:text-lg font-light text-justify">
					Ce tableau indique les prix affichés sur les sites de vente, les frais
					de port, et le prix total pour la pièce "<strong>{{
						coinDetail.title
					}}</strong
					>" en temps réel.
				</p>
				<section class="w-full self-start items-start text-justify">
					<table
						class="table-auto md:table-fixed w-full text-right text-sm md:text-lg"
					>
						<thead class="text-gray-800">
							<th class="md:w-2/6 lg:w-1/3 bg-white"></th>
							<th class="py-5 px-1 md:px-3 text-xs md:text-lg font-normal">
								Prix
							</th>
							<th
								class="padding-mobile py-5 px-1 md:px-3 text-xs md:text-lg font-normal"
							>
								Livraison
							</th>
							<th class="py-5 px-1 md:px-3 text-xs md:text-lg font-bold">
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
								:index="index + 1"
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
						class="mt-10 mb-3 md:mb-8 text-lg font-normal md:text-1xl lg:text-2xl md:leading-tight lg:mb-5 lg:mt-15"
					>
						Description
					</h2>
					<p
						v-for="(descr, index) in coinDetail.description"
						:key="index"
						:class="{ pMarge: index === 1 }"
						class="text-base md:text-lg font-light text-justify"
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
	head() {
		return {
			title: "Compar'Or - " + this.coinDetail.title
		}
	}
}
</script>

<style lang="scss">
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {
	.padding-mobile {
		@apply px-0;
	}
	tbody {
		@apply text-xs;
	}
}
/* Ipad Pro */
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
	.container {
		@apply px-8;
	}
}

$base-color: #215385;

.colorBestPrice {
	@apply bg-gray-100 rounded-tl-md;
	& a {
		background: rgba($base-color, 0.92);
		@apply rounded-tl-md text-white;
	}
}
.colorThirdPrice {
	@apply bg-gray-100;
}
.colorFivePrice {
	@apply bg-gray-100;
}
.pMarge {
	@apply my-5;
}

@screen lg {
	.colorBestPrice a:hover {
		color: white;
		font-weight: 600;
		background-color: $base-color;
		transition: all 0.1s ease-in-out 0s;
	}
	.colorSecondPrice a:hover {
		color: white;
		font-weight: 600;
		background-color: rgba($base-color, 0.95);
		transition: all 0.1s ease-in-out 0s;
	}
	.colorThirdPrice a:hover {
		color: white;
		font-weight: 600;
		background-color: rgba($base-color, 0.88);
		transition: all 0.1s ease-in-out 0s;
	}
	.colorFourthPrice a:hover {
		color: white;
		font-weight: 600;
		background-color: rgba($base-color, 0.83);
		transition: all 0.1s ease-in-out 0s;
	}
	.colorFivePrice a:hover {
		color: white;
		font-weight: 600;
		background-color: rgba($base-color, 0.8);
		transition: all 0.1s ease-in-out 0s;
	}
}
</style>
