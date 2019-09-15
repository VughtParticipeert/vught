<template>
    <button class="back-button" @click="goBack">Terug</button>
</template>

<script>
	export default {
			name: "GoBack",
				methods: {
					goBack() {
							window.history.length > 1 ?
									this.$router.go(-1) :
									this.$router.push('/')
					}
		}
	}
</script>

<style lang="scss" scoped>
	.back-button {
		margin: 1rem 0;
		padding: 1rem;
		border-radius: var(--small-radius);
		background-color: var(--secondary-color);
		display: inline-flex;
		text-decoration: none;
		color: white;
		box-shadow: var(--material-shadow-one);
		transition: all 0.4s ease-out;
		border: none;

		&:hover {
			box-shadow: var(--material-shadow-hover);
		}
	}
</style>