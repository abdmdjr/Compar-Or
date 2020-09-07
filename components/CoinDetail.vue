<template>
	<div class="mx-auto mt-10 flex space-x-32">
		<img class="lg:w-72 h-full" :src="img" :alt="title" />
		<div class="flex flex-col space-y-3">
			<h2 class="leading-none text-primary font-normal lg:text-4xl">
				{{ title }}
				<span class="block mt-1 font-light text-xl">{{ gr }}</span>
			</h2>
			<h3 class="text-primary font-normal lg:text-xl">
				Tableau de comparaison
			</h3>
			<table class="table-auto">
				<tbody>
					<tr class="bg-yellow-300">
						<td class="border px-4 py-2">Site</td>
						<td class="border px-4 py-2">Valeur métal</td>
						<td class="border px-4 py-2">Prime</td>
						<td class="border px-4 py-2">Prix final</td>
						<td class="border px-4 py-2">Livraison</td>
						<td class="border px-4 py-2">Prix avec livraison</td>
					</tr>
					<tr>
						<td class="border px-4 py-2">
							<a
								class="text-primary font-normal lg:hover:font-medium"
								:href="besturl"
								target="_blank"
								rel="noopener noreferrer"
								>{{ bestsite }}</a
							>
						</td>
						<td class="border px-4 py-2">{{ bestpricemetal }}€</td>
						<td class="border px-4 py-2">{{ bestprime }}€</td>
						<td class="border px-4 py-2">{{ bestprice }}€</td>
						<td class="border px-4 py-2">{{ bestlivraison }}€</td>
						<td class="border px-4 py-2">{{ bestpricetotal }}€</td>
					</tr>
					<tr>
						<td class="border px-4 py-2">
							<a
								class="text-primary font-normal lg:hover:font-medium"
								:href="secondurl"
								target="_blank"
								rel="noopener noreferrer"
								>{{ secondsite }}</a
							>
						</td>
						<td class="border px-4 py-2">{{ secondprice }}</td>
						<td class="border px-4 py-2"></td>
					</tr>
					<tr>
						<td class="border px-4 py-2">
							<a
								class="text-primary font-normal lg:hover:font-medium"
								:href="thirdurl"
								target="_blank"
								rel="noopener noreferrer"
								>{{ thirdsite }}</a
							>
						</td>
						<td class="border px-4 py-2">{{ thirdprice }}</td>
						<td class="border px-4 py-2"></td>
					</tr>
					<tr>
						<td class="border px-4 py-2">
							<a
								class="text-primary font-normal lg:hover:font-medium"
								:href="fourthurl"
								target="_blank"
								rel="noopener noreferrer"
								>{{ fourthsite }}</a
							>
						</td>
						<td class="border px-4 py-2">{{ fourthprice }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		},
		img: {
			type: String,
			default: ''
		},
		bestsite: {
			type: String,
			default: ''
		},
		bestpricemetal: {
			type: [String, Number],
			default: ''
		},
		bestprime: {
			type: [String, Number],
			default: ''
		},
		bestprice: {
			type: [String, Number],
			default: ''
		},
		bestlivraison: {
			type: [String, Number],
			default: ''
		},
		bestpricetotal: {
			type: [String, Number],
			default: ''
		},
		besturl: {
			type: String,
			default: ''
		},
		secondsite: {
			type: String,
			default: ''
		},
		secondprice: {
			type: [String, Number],
			default: ''
		},
		secondurl: {
			type: String,
			default: ''
		},
		thirdsite: {
			type: String,
			default: ''
		},
		thirdprice: {
			type: [String, Number],
			default: ''
		},
		thirdurl: {
			type: String,
			default: ''
		},
		fourthsite: {
			type: String,
			default: ''
		},
		fourthprice: {
			type: [String, Number],
			default: ''
		},
		fourthurl: {
			type: String,
			default: ''
		},
		gr: {
			type: String,
			default: ''
		},
		url: {
			type: String,
			default: ''
		}
	}
}
</script>

<style>
img {
	-webkit-filter: drop-shadow(3px 3px 3px #222);
	filter: drop-shadow(3px 3px 3px #222);
}
</style>
