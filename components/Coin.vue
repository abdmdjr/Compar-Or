<template>
	<div class="mt-10 rounded-lg shadow-lg">
		<div class="flex flex-col px-3 py-8 items-center">
			<nuxt-link :to="`/coins/${slug}`">
				<ul class="flex flex-col items-center">
					<li class="">
						<img class="" :src="img" :alt="title" />
					</li>
					<li class="mt-5 text-center">
						<span class="text-important text-base">{{ title }}</span>
					</li>
					<li class="mb-3 text-xs font-light">
						{{ gr }}
					</li>
				</ul>
			</nuxt-link>
			<nuxt-link :to="`/coins/${slug}`" class="">
				<div class="text-center text-important text-1xl leading-none">
					{{ price }} €
				</div>
				<div class="text-center text-xs font-light">
					livraison incluse
				</div>
			</nuxt-link>
			<div class="mt-3">
				<a
					class="shadow-sm hover:shadow-xl lg:transition lg:duration-200 lg:ease-in-out"
					:href="url"
					target="_blank"
					rel="noopener noreferrer"
					:aria-label="`link to ${site} - ${title}`"
					><button class="btn-price text-white text-sm py-2 px-4 rounded-md">
						{{ site }}
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
.btn-price {
	background: linear-gradient(180deg, #f7c298 0%, #f5b592 46.88%, #f2a68b 100%);
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
