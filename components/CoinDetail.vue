<template>
	<section
		class="flex flex-col mx-auto mt-6 mb-12 text-sm md:text-lg lg:flex-row lg:space-x-20 lg:text-xl"
	>
		<div
			class="flex flex-col h-full md:space-x-12 items-center md:flex-row md:mb-6 md:justify-center lg:flex-col lg:space-x-0"
		>
			<client-only placeholder="Chargement des prix...">
				<Carousel
					class="w-320 md:w-370 lg:w-400 px-10"
					:mouse-drag="true"
					:per-page="1"
					:center-mode="true"
					:pagination-enabled="true"
				>
					<Slide><img :src="img3x" :alt="title"/></Slide>
					<Slide><img :src="imgar3x" :alt="title"/></Slide>
				</Carousel>
			</client-only>
			<!-- 			<img :src="imgar3x" width="400" :alt="title" />
 -->
			<div class="info w-auto">
				<h1
					class="mt-6 text-xl text-center text-primary font-normal leading-none md:text-xl lg:text-2xl lg:mt-8"
				>
					{{ title }}
					<span
						class="text-sm block self-center mt-2 font-light md:text-lg lg:text-xl"
						>{{ gr }}</span
					>
				</h1>
				<p
					class="text-xl block self-center text-center mt-3 md:text-2xl lg:mt-5 lg:text-2xl"
				>
					<strong>{{ bestPrice }}€</strong> sur
					<u
						><a
							:href="bestUrl"
							target="_blank"
							rel="noopener noreferrer"
							:aria-label="`link to ${bestSite} - ${title}`"
							>{{ bestSite }}.fr</a
						></u
					><br />
					<span class="block mx-auto text-xs font-light w-48 md:w-56 lg:w-64"
						>(ce prix inclut toutes les taxes + la livraison à votre
						domicile)</span
					>
				</p>
			</div>
		</div>
		<section class="text-justify block self-center">
			<h2
				class="text-lg text-center mb-4 mt-6 font-normal md:mt-12 md:mb-8 md:text-2xl lg:mb-8 lg:mt-0 lg:text-left"
			>
				Tableau de comparaison
			</h2>

			<table class="table-auto w-full text-right text-primary">
				<thead></thead>
				<tbody>
					<tr class="border-b">
						<div
							class="px-2 py-2 bg-gray-100 border-r border-l border-t rounded-t-md text-left"
						>
							Prix
						</div>
						<td
							v-for="(resultPrice, index) in filteredCoins"
							:key="index"
							class="px-2 py-2 bg-gray-100 rounded-t-md"
							:class="{ colorBestSite: index === minPrice }"
						>
							{{ resultPrice[1][1] }}€
						</td>
					</tr>
					<tr class="border-b">
						<div class="px-2 py-2 bg-gray-100 border-r border-l text-left">
							Livraison
						</div>
						<td
							v-for="(livraison, index) in filteredCoins"
							:key="index"
							class="px-2 py-2 bg-gray-100"
							:class="{ colorBestSite: index === minPrice }"
						>
							+ {{ livraison[1][3] }}€
						</td>
					</tr>
					<tr class="border-b">
						<div class="px-2 py-2 bg-gray-100 border-r border-l text-left">
							Prix total
						</div>
						<td
							v-for="(resultPriceTotal, index) in calculatedPriceTotal"
							:key="index"
							class="px-2 py-2 bg-gray-100"
							:class="{ colorBestPrice: index === minPrice }"
						>
							{{ resultPriceTotal }}€
						</td>
					</tr>
					<tr>
						<div
							class="flex items-center px-2 h-12 bg-gray-100 rounded-b-md border-gray-300 border-r border-l border-b text-left"
						>
							Site
						</div>
						<td
							v-for="(column, index) in filteredCoins"
							:key="index"
							class="font-medium text-center px-0 py-0 bg-gray-100 rounded-b-md text-primary"
							:class="{ colorBestSiteFirst: index === minPrice }"
						>
							<a
								:href="column[1][4]"
								target="_blank"
								rel="noopener noreferrer"
								:aria-label="`${column[0]} - ${title}`"
								class="paddingPrice"
								:class="{ paddingBestSiteFirst: index === minPrice }"
							>
								{{ column[0] }}
							</a>
						</td>
					</tr>
				</tbody>
			</table>
			<h2
				class="text-lg text-center mb-3 mt-6 font-normal md:mt-12 md:mb-8 md:text-2xl lg:mt-20 lg:mb-8 lg:text-left"
			>
				Description de la pièce
			</h2>
			<p
				v-for="(descr, index) in coinDesc"
				:key="index"
				:class="{ pMarge: index === 1 }"
				class="text-sm md:text-lg font-light"
			>
				{{ descr }}
			</p>
		</section>
	</section>
</template>

<script>
import axios from 'axios'
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

export default {
	components: {
		Carousel,
		Slide
	},
	props: {
		title: {
			type: String,
			default: ''
		},
		img3x: {
			type: String,
			default: ''
		},
		imgar3x: {
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
			coinDesc: [],
			bestPrice: '',
			bestSite: '',
			bestUrl: '',
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
		filteredCoins() {
			return this.coinDatas.map((coin) => {
				return coin
			})
		},
		/*
		calculatedPriceMetal() {
			return this.coinDatas.map((coin) => {
				let resultPriceMetal = ''
				if (typeof coin[1][2] === 'string') {
					resultPriceMetal = 'N/C'
				} else {
					resultPriceMetal = coin[1][1] - coin[1][2]
					resultPriceMetal = parseFloat(resultPriceMetal).toFixed(2) + '€'
				}
				return resultPriceMetal
			})
		} 
		filteredPrime() {
			return this.coinDatas.map((coin) => {
				let resultPrime
				if (typeof coin[1][2] === 'number') {
					resultPrime = coin[1][2] + '€'
				} else {
					resultPrime = coin[1][2]
				}
				return resultPrime
			})
		},
		*/
		calculatedPriceTotal() {
			return this.coinDatas.map((coin) => {
				let priceTotal = coin[1][0]
				priceTotal = parseFloat(priceTotal).toFixed(2)
				return priceTotal
			})
		},
		minPrice() {
			return this.calculatedPriceTotal.indexOf(this.bestPrice)
		}
	},
	mounted() {
		axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
			this.coinDatas = Object.entries(result.data.prices)
			this.coinDesc = Object.entries(result.data)[1][1]
			this.bestPrice = Math.min(...this.calculatedPriceTotal).toString()
			this.bestSite = this.filteredCoins[this.minPrice][0]
			this.bestUrl = this.filteredCoins[this.minPrice][1][4]
		})
	},
	head() {
		return {
			title: "Compar'Or - " + this.title
		}
	}
}
</script>

<style scoped>
.VueCarousel-dot {
	color: aqua;
	border-radius: 100%;
}
.VueCarousel-pagination {
	width: 100%;
	text-align: center;
}
.colorBestSite {
	@apply bg-gray-200 shadow-2xl;
}
.colorBestPrice {
	@apply font-bold bg-gray-200 text-purple-900 shadow-2xl;
}
.colorBestSiteFirst {
	@apply bg-indigo-900 rounded-b-md text-white;
}
.colorBestSiteFirst:hover {
	@apply bg-purple-900 ease-in shadow-lg transition-all duration-200;
}
.paddingBestSiteFirst {
	@apply px-3 py-3;
}
.paddingPrice {
	@apply px-1 py-3;
}
@screen md {
	.paddingBestSiteFirst {
		@apply px-0 py-2 block;
	}
}
img {
	-webkit-filter: drop-shadow(3px 3px 3px rgb(129, 129, 129));
	filter: drop-shadow(1px 2px 3px rgb(129, 129, 129));
}
.pMarge {
	@apply my-2;
}
</style>
