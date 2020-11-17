<template>
	<section
		class="flex flex-col mx-auto mt-12 mb-12 text-sm md:text-lg lg:flex-row lg:space-x-10 lg:text-xl"
	>
		<div
			class="flex flex-col h-full md:space-x-12 items-center md:flex-row md:mb-6 md:justify-center lg:flex-col lg:space-x-0"
		>
			<client-only placeholder="Chargement des prix...">
				<Carousel
					class="w-320 md:w-370 lg:w-400 px-5"
					:mouse-drag="true"
					:per-page="1"
					:center-mode="true"
					:pagination-enabled="true"
					pagination-active-color="#cbd5e0"
					pagination-color="#e2e8f0"
					:pagination-padding="5"
				>
					<Slide><img :src="img3x" :alt="title"/></Slide>
					<Slide><img :src="imgar3x" :alt="title"/></Slide>
				</Carousel>
			</client-only>
			<!-- 			<img :src="imgar3x" width="400" :alt="title" />
 -->
			<div class="info w-auto">
				<h1
					class="mt-6 text-xl text-center text-gray-800 font-normal leading-none md:text-xl lg:text-2xl lg:mt-6"
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
					<a
						:href="bestUrl"
						target="_blank"
						rel="noopener noreferrer"
						:aria-label="`link to ${bestSite} - ${title}`"
						class="shadow-sm hover:shadow-xl lg:transition lg:duration-200 lg:ease-in-out"
					>
						<button class="btn-price text-white text-lg py-2 px-4 rounded-md">
							{{ bestSite }}
						</button>
					</a>
					<br />
				</p>
			</div>
		</div>
		<section class="text-justify w-full self-center">
			<h2
				class="text-lg text-center mb-4 mt-6 font-normal md:mt-12 md:mb-8 md:text-2xl lg:mb-5 lg:mt-0 lg:text-left"
			>
				Comparaison des prix
			</h2>
			<p class="text-sm md:text-lg font-light">
				Ce tableau indique les prix affichés sur les sites de vente, les frais
				de port, et le prix total pour la pièce "<strong>{{ title }}</strong
				>" en temps réel.
			</p>
			<table class="table-auto mt-6 text-right text-gray-800">
				<thead>
					<th class="px-2 py-2"></th>
					<th class="px-2 py-2">Prix</th>
					<th class="px-2 py-2">Livraison</th>
					<th class="px-2 py-2">Prix total</th>
				</thead>
				<tbody>
					<tr
						v-for="(column, index) in filteredCoins"
						:key="index"
						class="font-medium text-left text-gray-700 rounded-b-md"
						:class="{ colorBestSite: index === minPrice }"
					>
						<td class="px-2 py-2">
							<a
								:href="column[1][3]"
								target="_blank"
								rel="noopener noreferrer"
								:aria-label="`${column[0]} - ${title}`"
								class=""
							>
								{{ column[0].split(' ').join('.') }}
							</a>
						</td>

						<td
							class="px-2 py-2 text-right"
							:class="{ colorBestPrice: index === minPrice }"
						>
							{{ column[1][1] }}
						</td>
						<td
							class="px-2 py-2 text-right"
							:class="{ colorBestLivraison: index === minPrice }"
						>
							{{ column[1][2] }}
						</td>
						<td
							class="px-2 py-2 text-right"
							:class="{ colorBestPriceTotal: index === minPrice }"
						>
							{{ column[1][0] }}
						</td>
					</tr>
				</tbody>
			</table>
			<h2
				class="text-lg text-center mb-3 mt-6 font-normal md:mt-12 md:mb-8 md:text-2xl lg:mt-10 lg:mb-5 lg:text-left"
			>
				Description
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
				console.log(coin)
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
			this.bestPrice = Math.min(...this.calculatedPriceTotal).toFixed(2)
			this.bestSite = this.filteredCoins[this.minPrice][0].split(' ').join('.')
			this.bestUrl = this.filteredCoins[this.minPrice][1][3]
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
.VueCarousel-dot {
	border-radius: 100%;
}
.colorBestSite,
.colorBestPrice,
.colorBestLivraison,
.colorBestPriceTotal {
	background-attachment: fixed;
	background-image: linear-gradient(-180deg, #f7c298 0%, #f2a68b 100%);
}
.colorBestSite:hover {
	@apply shadow-md transition duration-100 ease-in-out;
}
.colorBestSite {
	@apply rounded-b-md text-white;
}
.btn-price {
	background: linear-gradient(180deg, #f7c298 0%, #f5b592 46.88%, #f2a68b 100%);
}
img {
	-webkit-filter: drop-shadow(3px 3px 3px rgb(129, 129, 129));
	filter: drop-shadow(1px 2px 3px rgb(129, 129, 129));
}
.pMarge {
	@apply my-2;
}
</style>
