<template>
	<td>{{ totalprice }}</td>
</template>

<script>
export default {
	props: {
		totalprice: {
			type: Number,
			required: true
		}
	}
}
</script>

<style></style>
