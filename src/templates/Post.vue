<template>
    <LayoutDefault
      title = "Post"
    >
    <div class="button-container">
      <GoBack/>
    </div>

		<ActivePost :post="this.$page.post" class="active"/>

    <span v-if="filteredPost.length > 0" class="description">Gerelateerde posts</span>
    <span v-else class="description">Deze post heeft geen gerelateerde post</span>

    <div v-if="filteredPost">
			<Posts
					v-for="post in filteredPost"
					:key="post.node.id"
					:title="post.node.title"
					:date="post.node.date"
					:typePost="post.node.typePost"
					:theme="post.node.theme"
					:group="post.node.group"
					:status="post.node.status"
					:content="post.node.content"
					:attachment="post.node.attachment"
			/>
    </div>

    </LayoutDefault>
</template>

<page-query>
	query Post ($id: String!) {
			post(id: $id) {
					id
					title
					typePost
					title
					theme
					date
					typePost
					status
					group
					content
					attachment {
						file {
							name attachment
						}
					}
			}

		allPost {
			edges {
				node {
						id
						title
						path
						typePost
						title
						date
						theme
						typePost
						status
						content
						group
						attachment {
							file {
								name attachment
							}
						}
				}
			}
		}

	}
</page-query>

<script>
	import LayoutDefault from "@/layouts/LayoutDefault.vue"
	import ActivePost from "@/components/ActivePost"
	import Posts from "@/components/Posts"
	import GoBack from "@/components/GoBack"

	export default {
		name: "Post",
			components: {
				LayoutDefault,
				ActivePost,
				Posts,
				GoBack
			},
			data() {
				return {
					status: {
						notApplicable: 1,
						complete: 2,
						inComplete: 3,
						inSufficient: 4
					}
				}
			},
			computed: {
				threadTitle() {
					return ""
				},
				filteredPost() {
					const filterArgument = this.$page.post.group
					const postId = this.$page.post.id
					if (filterArgument !== "none") {
						const allPosts = this.$page.allPost.edges
						const filterPost = allPosts.filter(post => {
							return post.node.group === filterArgument && post.node.id !== postId
						})

						//remap the status 
						filterPost.map(post=> {
							post.node.status = this.checkStatus(post)
							return post
						})

						return filterPost
					} else {
						return false
					}
				}
			},
			methods: {
				checkStatus(post) {
						switch (post.node.status) {
							case this.status.notApplicable:
								post.node.status = {
									text: "Niet van toepassing",
									value: "notApplicable"
								}
								break;
							case this.status.complete:
								post.node.status = {
									text: "Antwoord is volledig",
									value: "complete"
								}
								break;
							case this.status.inComplete:
								post.node.status = {
									text: "Antwoord is onvolledig",
									value: "inComplete"
								}
								break;
							case this.status.inSufficient:
								post.node.status = {
									text: "Antwoord volstaat niet",
									value: "inSufficient"
								}
								break;
						}
					return post.node.status
				}
			}
		}
</script>

<style scoped lang="scss">
    .active {
        box-shadow: var(--material-shadow-hover);
    }
    .description {
        color: #bdbdbd;
        font-size: 2em;
        margin: 4rem 0 1rem 0;
    }
</style>

