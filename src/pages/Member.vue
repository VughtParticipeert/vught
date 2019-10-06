<template>
	<LayoutDefault :title="title" :disableSummary="disableSummary">
		<div class="button-container">
			<GoBack />
		</div>

		<MemberForm />
	</LayoutDefault>
</template>

<script>
import LayoutDefault from "@/layouts/LayoutDefault.vue";
import GoBack from "@/components/GoBack";
import MemberForm from "@/components/MemberForm";

export default {
	name: "Contact",
	metaInfo: {
		title: "Lid worden"
	},
	components: {
		LayoutDefault,
		GoBack,
		MemberForm
	},
	data() {
		return {
			title: "Lid worden",
			disableSummary: true
		};
	}
};
</script>

<style lang="scss" scoped>
</style>