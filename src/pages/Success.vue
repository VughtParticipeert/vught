<template>
	<LayoutDefault :title="title" :disableSummary="disableSummary">
		<article class="container-success">
			<h1 class="title">Succesvol verzonden!</h1>
			<p class="text">Je gegevens zijn succesvol verzonden!</p>

			<g-link to="/" class="link">Terug naar Home</g-link>
		</article>
	</LayoutDefault>
</template>

<script>
import LayoutDefault from "@/layouts/LayoutDefault.vue";

export default {
	name: "Contact",
	metaInfo: {
		title: "Success"
	},
	components: {
		LayoutDefault
	},
	data() {
		return {
			title: "Succes",
			disableSummary: true
		};
	}
};
</script>

<style lang="scss" scoped>
.container-success {
	background-color: white;
	padding: 2rem;
	border-radius: 0.2rem;
	margin-top: 2rem;
}

.title {
	grid-area: title;
	font-size: 2.2em;
	margin-top: 2rem;
	color: var(--primary-color);
	transition: all 0.4s ease-out;
}

.text {
	margin-top: 2rem;
}

.link {
	cursor: pointer;
	display: inline-block;
	margin-top: 2rem;
	padding: 1rem;
	border: none;
	border-radius: var(--small-radius);
	font-weight: 500;
	font-size: 1.1em;
	background-color: var(--secondary-color);
	color: white;
	transition: all 0.4s ease-out;
	box-shadow: var(--material-shadow-one);
	text-decoration: none;

	&:hover {
		box-shadow: var(--material-shadow-hover);
	}
}
</style>