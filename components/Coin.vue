<template>
	<div
		class="mt-10 rounded-lg shadow-lg hover:shadow-xl lg:transition lg:duration-200 lg:ease-in-out"
	>
		<ul class="flex flex-col px-3 py-10 items-center">
			<nuxt-link
				:to="`/coins/${slug}`"
				class="flex flex-col justify-center items-center"
			>
				<li class="">
					<img class="object-cover object-center" :src="img" :alt="title" />
				</li>
				<li class="mt-8 text-center">
					<span class="text-important text-base">{{ title }}</span>
				</li>
				<li class="text-primary mb-3 text-xs font-light">
					{{ gr }}
				</li>
			</nuxt-link>
			<li class="text-primary text-center mb-4 text-sm font-light">
				Meilleur prix :
				<a
					class="font-normal text-base lg:hover:font-medium"
					:href="url"
					target="_blank"
					rel="noopener noreferrer"
					:aria-label="`link to ${site} - ${title}`"
					>{{ site }}</a
				>
			</li>
			<nuxt-link :to="`/coins/${slug}`" class="">
				<li class="text-important text-lg font-medium leading-none">
					{{ price }} €
				</li>
			</nuxt-link>
		</ul>
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
</style>
