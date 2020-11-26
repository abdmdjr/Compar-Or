<template>
	<div>
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

html {
	-ms-overflow-style: none; /* Internet Explorer 10+ */
	scrollbar-width: none; /* Firefox */
}
html::-webkit-scrollbar {
	display: none; /* Safari and Chrome */
}

body {
	font-family: 'Open Sans', sans-serif;
}

p {
	font-family: 'Open Sans', sans-serif;
	@apply text-gray-800;
}

.navbar {
	color: white;
	background: linear-gradient(222deg, #083460c9 0%, #083460e7 115%);
}

.title-first {
	font-family: 'Ubuntu', sans-serif;
	font-weight: 400;
}
.title-second {
	font-family: 'Overlock SC', cursive;
	background: -webkit-linear-gradient(#ffe985 0%, #fa742b 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
.title-third {
	background: -webkit-linear-gradient(#ffe985 0%, #fa742b 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.title {
	font-family: 'Ubuntu', sans-serif;
	font-weight: 400;
	color: rgba(71, 87, 103, 1);
}

.btn {
	width: auto;
	font-weight: 600;
	background: linear-gradient(225.68deg, #94d5ff -96.12%, #083460 204.64%);
	color: white;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	border-radius: 6px;
}

.material-icons.md-18 {
	font-size: 18px;
}
.material-icons.md-24 {
	font-size: 24px;
}
.material-icons.md-36 {
	font-size: 36px;
}
.material-icons.md-48 {
	font-size: 48px;
}
.second-icon {
	margin-left: -0.85rem;
}
</style>
