<template>
	<div
		class="coin flex flex-col py-8 mt-10 border border-white rounded-lg shadow-md hover:shadow-lg lg:transition lg:duration-200 lg:ease-in-out"
	>
		<ul class="flex flex-col justify-center items-center">
			<li class="">
				<img class="object-cover object-center" :src="img" :alt="title" />
			</li>
			<li class="mt-8 text-lg font-normal">
				<span class="text-important">{{ title }}</span>
			</li>
			<li class="text-primary mb-3 text-sm font-light">{{ gr }}</li>
			<li class="text-primary mb-2 font-light">
				Meilleur prix sur
				<a
					class="font-normal lg:hover:font-medium"
					:href="url"
					target="_blank"
					rel="noopener noreferrer"
					>{{ site }}</a
				>
			</li>
			<li class="leading-none text-important font-medium text-lg">
				{{ price }} €
			</li>
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
.coin {
	width: 256px;
}
img {
	-webkit-filter: drop-shadow(1px 1px 1px rgb(138, 138, 138));
	filter: drop-shadow(1px 1px 1px rgb(138, 138, 138));
	max-width: 140px;
}
</style>
