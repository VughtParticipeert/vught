<template>
	<LayoutDefault :title="title" :disableSummary="disableSummary">
		<div class="button-container">
			<GoBack />
		</div>
		<Posts
			v-for="post in this.$page.allAbout.edges"
			:key="post.node.id"
			:title="post.node.title"
			:content="post.node.content"
			:disableMetaData="true"
		/>
	</LayoutDefault>
</template>

<page-query>
    query About {
        allAbout (sortBy: "index", order: ASC){
            edges {
                node {
                    id
                    title
                    content
                }
            }
        }
    }
</page-query>

<script>
import LayoutDefault from "@/layouts/LayoutDefault.vue";
import Posts from "@/components/Posts";
import GoBack from "@/components/GoBack";

export default {
	name: "About",
	metaInfo: {
		title: "Over ons"
	},
	components: {
		LayoutDefault,
		Posts,
		GoBack
	},
	data() {
		return {
			title: "Over ons",
			disableSummary: true
		};
	}
};
</script>

<style lang="scss" scoped>
</style>