<template>
	<th class="px-4 py-2">{{ site }}</th>
</template>

<script>
export default {
	props: {
		site: {
			type: String,
			required: true
		}
	}
}
</script>

<style></style>
