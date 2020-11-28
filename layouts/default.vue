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
	@apply antialiased;
}

body {
	font-family: 'Open Sans', sans-serif;
	color: #193a5c;
}

p {
	font-family: 'Open Sans', sans-serif;
	color: #1d3c5a;
}

.navbar {
	background: linear-gradient(220.01deg, #1e5f91 0%, #1c4c7b 87%);
}

.title-first {
	font-family: 'Ubuntu', sans-serif;
	font-weight: 400;
}
.title-second {
	font-family: 'Overlock SC', cursive;
	background: -webkit-linear-gradient(240.01deg, #ffe985 0%, #fa742b 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.title {
	font-family: 'Ubuntu', sans-serif;
	color: #193a5c;
}
@screen lg {
	.btn:hover {
		background: #1e5f91;
		color: white;
		transition: all 0.2s ease-in-out 0s;
	}
}

.btn {
	background: white;
	font-weight: 600;
	color: #1c4c7b;
	border: 0.6px solid;
	border-color: #1c4c7b;
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
	margin-left: -0.75rem;
}
</style>
