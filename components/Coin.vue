<template>
	<div
		class="coin flex flex-col lg:border lg:border-white lg:rounded-lg lg:hover:shadow-md lg:transition lg:duration-200 lg:ease-in-out p-5"
	>
		<nuxt-link :to="`/coins/${slug}`" class="flex justify-center">
			<img
				class="self-center object-cover object-center"
				:src="img"
				:alt="title"
			/>
		</nuxt-link>
		<div class="content my-3">
			<nuxt-link :to="`/coins/${slug}`" class="flex justify-center">
				<div class="my-2">
					<h1 class="text-center text-gray-900 lg:w-172">
						{{ title }}
					</h1>
					<h4 class="text-center text-sm font-light">{{ gr }}</h4>
				</div>
			</nuxt-link>
			<h6 class="text-center text-sm mb-2 font-light">
				Meilleur prix sur
				<span class="text-primary font-medium"
					><a :href="url" target="_blank" rel="noopener noreferrer">{{
						site
					}}</a></span
				>
			</h6>
			<p class="leading-relaxed text-center font-bold text-primary">
				{{ price }} €
			</p>
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
			type: Number,
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
h1 {
	font-family: 'Lato', sans-serif;
	font-weight: 500;
}

.content {
	font-family: 'Roboto', sans-serif;
}

img {
	min-width: 160px;
}
</style>
