<template>
	<section
		class="flex flex-col mx-auto mt-6 lg:mt-12 mb-12 text-sm md:text-lg lg:flex-row lg:space-x-10 lg:text-xl"
	>
		<div
			class="flex flex-col h-full md:space-x-12 items-center md:flex-row md:justify-center lg:flex-col lg:space-x-0"
		>
			<client-only placeholder="Chargement des prix...">
				<Carousel
					class="w-310 px-5"
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
			<div class="flex flex-col items-center">
				<h1
					class="font-medium mt-4 lg:mt-6 text-xl md:text-2xl text-center leading-none"
				>
					{{ title }}
					<span class="mt-2 block text-base lg:text-xl font-light">{{
						gr
					}}</span>
				</h1>
				<h2
					class="font-light my-3 lg:my-5 text-base md:text-xl lg:text-2xl text-center"
				>
					Meilleur prix :<span class="title font-medium">
						{{ bestPrice }}€</span
					>
				</h2>
				<a
					:href="bestUrl"
					target="_blank"
					rel="noopener noreferrer"
					:aria-label="`link to ${bestSite} - ${title}`"
					class=""
				>
					<button
						class="btn py-3 pl-4 pr-5 flex items-center align-center text-sm md:text-lg rounded"
					>
						{{ bestSite }}
					</button>
				</a>
			</div>
		</div>
		<section class="w-full self-center text-justify">
			<h2
				class="mt-8 mb-3 md:mt-10 lg:mb-3 lg:mt-0 text-base md:text-1xl md:leading-tight font-normal"
			>
				Comparaison des prix
			</h2>
			<p class="mb-4 text-sm md:text-lg font-light">
				Ce tableau indique les prix affichés sur les sites de vente, les frais
				de port, et le prix total pour la pièce "<strong>{{ title }}</strong
				>" en temps réel.
			</p>
			<table
				class="table-auto md:table-fixed w-full border-collapse text-right text-xs md:text-lg"
			>
				<thead class="">
					<th class="md:w-2/6 lg:w-1/3"></th>
					<th class="py-2 px-1 text-xs md:text-lg font-normal">
						Prix
					</th>
					<th class="py-2 px-1 text-xs md:text-lg font-normal">
						Livraison
					</th>
					<th class="py-2 px-1 text-xs md:text-lg font-normal">
						Total
					</th>
				</thead>
				<tbody>
					<tr
						v-for="(column, index) in filteredCoins"
						:key="index"
						class="border"
						:class="{ colorBestSite: index === 0 }"
					>
						<td
							class="text-left border-b border-r"
							:class="{
								btntable: index === 0,
								btnsecondsite: index === 1,
								btnthirdsite: index === 2,
								btnfourthsite: index === 3
							}"
						>
							<a
								:href="column[1][3]"
								target="_blank"
								rel="noopener noreferrer"
								:aria-label="`${column[0]} - ${title}`"
								class="block py-3 px-1 md:px-5"
							>
								<span class="text-xs md:text-base">{{ index + 1 }}.</span>
								{{ column[0].split(' ').join('.') }}
							</a>
						</td>

						<td
							class="px-2 md:px-3 border-b border-r"
							:class="{
								colorBestPrice: index === 0
							}"
						>
							{{ column[1][1] }}€
						</td>
						<td
							v-if="column[1][2] === 0"
							class="px-2 md:px-3 border-b border-r"
							:class="{
								colorBestLivraison: index === 0
							}"
						>
							Offert
						</td>
						<td
							v-else
							class="px-2 md:px-3 border-b border-r"
							:class="{
								colorBestLivraison: index === 0
							}"
						>
							{{ column[1][2] }}€
						</td>
						<td
							class="paddmobile pr-3 md:px-3 border-b"
							:class="{
								colorBestPriceTotal: index === 0
							}"
						>
							{{ column[1][0].toFixed(2) }}€
						</td>
					</tr>
				</tbody>
			</table>
			<h2
				class="mt-8 mb-3 md:mt-10 lg:mb-3 text-base md:text-1xl md:leading-tight font-normal"
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
			required: true
		},
		img3x: {
			type: String,
			required: true
		},
		imgar3x: {
			type: String,
			required: true
		},
		gr: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			coinDatas: [],
			coinDesc: [],
			bestPrice: '',
			bestSite: '',
			bestUrl: ''
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
				const priceTotal = coin[1][0]
				return priceTotal
			})
		}
	},
	mounted() {
		axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
			this.coinDatas = Object.entries(result.data.prices)
			const dataByPrice = this.coinDatas.sort((a, b) => {
				return a[1][0] - b[1][0]
			})

			this.coinDesc = Object.entries(result.data)[1][1]
			this.bestPrice = dataByPrice[0][1][0]
			this.bestSite = this.filteredCoins[0][0].split(' ').join('.')
			this.bestUrl = this.filteredCoins[0][1][3]
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
@media only screen and (max-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
	.paddmobile {
		@apply pr-0;
	}
}
.btntable {
	background: #2f5f8f;
	transition: all 0.2s ease-in-out 0s;
	color: white;
	font-weight: 600;
	@apply rounded-tl border-b-0;
}
.btnsecondsite {
	background: rgba(47, 95, 143, 0.04);
	transition: all 0.2s ease-in-out 0s;
}
.btnthirdsite {
	background: rgba(47, 95, 143, 0.02);
	transition: all 0.2s ease-in-out 0s;
}
.btnfourthsite {
	background: rgba(47, 95, 143, 0.01);
	transition: all 0.2s ease-in-out 0s;
	@apply rounded-bl;
}
@screen lg {
	td {
		transition: all 0.2s ease-in-out 0s;
	}
	.btntable:hover ~ td {
		background: rgba(47, 95, 143, 0.05);
	}
	.btnsecondsite:hover ~ td {
		background: rgba(47, 95, 143, 0.04);
	}
	.btnthirdsite:hover ~ td {
		background: rgba(47, 95, 143, 0.02);
	}
	.btnfourthsite:hover ~ td {
		background: rgba(47, 95, 143, 0.01);
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
