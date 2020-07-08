<template>
	<div class="container w-auto mx-auto px-6">
		<Navbar />
		<nuxt />
	</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
	components: {
		Navbar
	}
}
</script>

<style>
*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}
</style>
