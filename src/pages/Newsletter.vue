<template>
	<LayoutDefault
		:title="title"
		:disableSummary="disableSummary"
		:disableNewsletter="disableNewsletter"
	>
		<div class="button-container">
			<GoBack />
		</div>
		<Newsletter class="newsletter" />
	</LayoutDefault>
</template>

<script>
import LayoutDefault from "@/layouts/LayoutDefault.vue";
import Newsletter from "@/components/Newsletter.vue";
import GoBack from "@/components/GoBack.vue";

export default {
	name: "PageNewsletter",
	metaInfo: {
		title: "Nieuwsbrief"
	},
	components: {
		LayoutDefault,
		Newsletter,
		GoBack
	},
	data() {
		return {
			title: "Nieuwsbrief",
			disableSummary: true,
			disableNewsletter: true
		};
	}
};
</script>

<style lang="scss" scoped>
.newsletter {
	width: 100%;
	margin-top: 0;
}
</style>