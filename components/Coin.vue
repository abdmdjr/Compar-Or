<template>
	<div class="mt-10 rounded-lg shadow-lg">
		<div class="flex flex-col px-3 py-8 items-center">
			<nuxt-link :to="`/coins/${slug}`">
				<ul class="flex flex-col items-center">
					<li class="">
						<img class="" :src="img" :alt="title" />
					</li>
					<li class="mt-5 text-center">
						<h1 class="text-important">{{ title }}</h1>
					</li>
					<li class="mb-3 text-xs font-light">
						<h2>{{ gr }}</h2>
					</li>
				</ul>
			</nuxt-link>
			<nuxt-link :to="`/coins/${slug}`" class="">
				<h3 class="text-center text-important text-xl leading-none">
					{{ price }} €
				</h3>
			</nuxt-link>
			<div class="mt-3">
				<a
					class="shadow-sm hover:shadow-xl lg:transition lg:duration-200 lg:ease-in-out"
					:href="url"
					target="_blank"
					rel="noopener noreferrer"
					:aria-label="`link to ${site} - ${title}`"
					><button
						class="btn-price flex items-center align-center text-white text-sm py-2 px-4 rounded-md"
					>
						Voir les prix<i
							class="material-icons text-white"
							style="font-size:18px;"
							>navigate_next</i
						>
					</button></a
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		img: {
			type: String,
			required: true
		},
		price: {
			type: String,
			required: true
		},
		gr: {
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
		},
		slug: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
img {
	-webkit-filter: drop-shadow(1px 1px 1px rgb(138, 138, 138));
	filter: drop-shadow(1px 1px 1px rgb(138, 138, 138));
	max-width: 140px;
}
.btn-price:hover {
	background: linear-gradient(110deg, #f7c298 0%, #f5b592 46.88%, #f2a68b 100%);
	opacity: 1;
	@apply shadow-xl;
}
.btn-price {
	background: linear-gradient(180deg, #f7c298 0%, #f5b592 46.88%, #f2a68b 100%);
	opacity: 0.9;
	transition: all 0.2s ease-in-out;
	@apply shadow-lg;
}
</style>
