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
					pagination-active-color="#3b3166"
					pagination-color="#c5bee9"
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
					<tr class="border-b bg-gray-100 bg-opacity-25">
						<div class="px-2 py-2 rounded-t-md text-left">
							Prix
						</div>
						<td
							v-for="(resultPrice, index) in filteredCoins"
							:key="index"
							class="px-2 py-2 rounded-t-md"
							:class="{ colorBestPrice: index === minPrice }"
						>
							{{ resultPrice[1][1] }}€
						</td>
					</tr>
					<tr class="border-b bg-gray-200 bg-opacity-25">
						<div class="px-2 py-2 text-left">
							Livraison
						</div>
						<td
							v-for="(livraison, index) in filteredCoins"
							:key="index"
							class="px-2 py-2"
							:class="{ colorBestLivraison: index === minPrice }"
						>
							+ {{ livraison[1][2] }}€
						</td>
					</tr>
					<tr class="border-b bg-gray-300 bg-opacity-25">
						<div class="px-2 py-2 text-left">
							Prix total
						</div>
						<td
							v-for="(resultPriceTotal, index) in calculatedPriceTotal"
							:key="index"
							class="px-2 py-2"
							:class="{ colorBestPriceTotal: index === minPrice }"
						>
							{{ resultPriceTotal }}€
						</td>
					</tr>
					<tr>
						<div
							class="flex items-center px-2 h-12 rounded-b-md border-gray-300 text-left"
						></div>
						<td
							v-for="(column, index) in filteredCoins"
							:key="index"
							class="colorLinkBase font-medium text-center px-0 py-0 rounded-b-md text-primary"
							:class="{ colorBestSite: index === minPrice }"
						>
							<a
								:href="column[1][3]"
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
			namesRows: ['Prix total', 'Livraison', 'Prix avec livraison']
		}
	},
	computed: {
		filteredCoins() {
			return this.coinDatas.map((coin) => {
				return coin
			})
		},
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
			this.bestUrl = this.filteredCoins[this.minPrice][1][3]
			console.log(this.filteredCoins)
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
.VueCarousel-pagination {
	width: 100%;
	text-align: center;
}
.colorBestPrice {
	@apply bg-gray-100;
	position: relative;
	z-index: 3;
	box-shadow: 0px -10px 15px 1px rgba(0, 0, 0, 0.05),
		0 1px 1px -8px rgba(0, 0, 0, 0.05);
}
.colorBestLivraison {
	@apply bg-gray-200;
	position: relative;
	z-index: 2;
	box-shadow: 0 0px 20px -2px rgba(0, 0, 0, 0.1),
		0 4px 6px 0px rgba(0, 0, 0, 0.05);
}
.colorBestPriceTotal {
	@apply bg-gray-300;
	position: relative;
	z-index: 4;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.colorBestSite:hover {
	@apply ease-in shadow-lg transition-all duration-200;
}
.paddingBestSiteFirst {
	@apply px-3 py-3;
}
.paddingPrice {
	font-size: 0.82rem;
	@apply px-1 py-3;
}
.colorLinkBase {
	@apply bg-gray-300 bg-opacity-25;
}
.colorBestSite {
	position: relative;
	z-index: 5;
	background-color: #fbab7e;
	background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);

	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
	@apply rounded-b-md text-white;
}
@screen md {
	.paddingBestSiteFirst {
		@apply px-0 py-2 block;
	}
	.paddingPrice {
		font-size: 1.15rem;
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
