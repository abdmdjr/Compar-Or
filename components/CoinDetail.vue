<template>
	<section
		class="flex flex-col w-full mt-6 md:mt-0 items-center md:flex-row md:justify-around lg:justify-start lg:flex-col lg:space-x-0"
	>
		<client-only placeholder="Chargement des prix...">
			<Carousel
				class="w-268"
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
		<div class="flex flex-col items-center self-center">
			<h1
				class="font-medium mt-6 md:mt-0 lg:mt-6 text-1xl md:text-2xl text-center leading-none"
			>
				{{ title }}
				<span class="mt-2 block text-lg lg:text-xl font-light">{{ gr }}</span>
			</h1>
			<h2
				class="font-light my-5 lg:my-5 text-1xl md:text-xl lg:text-2xl text-center"
			>
				Meilleur prix<span class="block title text-2xl font-medium"
					>{{ price }}€</span
				>
			</h2>
			<a
				:href="url"
				target="_blank"
				rel="noopener noreferrer"
				:aria-label="`link to ${site} - ${title}`"
				class=""
			>
				<button class="btn flex px-4 py-3 text-base sm:text-lg rounded">
					{{ site }}
				</button>
			</a>
		</div>
	</section>
</template>

<script>
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
		},
		price: {
			type: String,
			required: true
		},
		site: {
			type: String,
			required: true
		},
		url: {
			type: String,
			required: true
		}
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
img {
	-webkit-filter: drop-shadow(3px 3px 3px rgb(129, 129, 129));
	filter: drop-shadow(1px 2px 3px rgb(129, 129, 129));
}
.pMarge {
	@apply my-2;
}
</style>
