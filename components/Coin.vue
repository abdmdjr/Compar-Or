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
		<div class="content my-3 flex flex-col">
			<nuxt-link :to="`/coins/${slug}`">
				<div class="my-2">
					<h3 class="text-primary text-center font-normal">
						{{ title }}
					</h3>
					<h4 class="text-center text-sm font-light">{{ gr }}</h4>
				</div>
			</nuxt-link>
			<h4 class="text-center text-sm mb-2 font-light">
				Meilleur prix sur
				<a
					class="text-primary font-normal lg:hover:font-medium"
					:href="url"
					target="_blank"
					rel="noopener noreferrer"
					>{{ site }}</a
				>
			</h4>
			<p class="leading-relaxed text-primary text-center font-medium text-lg">
				<nuxt-link :to="`/coins/${slug}`"> {{ price }} € </nuxt-link>
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
img {
	min-width: 160px;
}
</style>
