<template>
    <LayoutDefault
      :title = "themeTitle"
    >
		<div class="button-container">
      <GoBack/>
    </div>
		<Posts
				v-for="post in this.filteredPost" :key="post.node.id"
				:title="post.node.title"
				:date="post.node.date"
				:typePost="post.node.typePost"
				:theme="post.node.theme"
				:thread="post.node.threadTitle"
				:group="post.node.group"
				:linkPath="post.node.path"
				:status="post.node.status"
				:content="post.node.content"
				:attachment="post.node.attachment"
		/>
    </LayoutDefault>
</template>

<page-query>
    query Theme ($id: String!){
			theme(id: $id) {
				themeName
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
						group
						status
						content
						attachment {
							file {
								name
								attachment
							}
						}
					}
				}
			}

    }
</page-query>

<script>
    import LayoutDefault from "@/layouts/LayoutDefault.vue"
		import Posts from "@/components/Posts"
		import GoBack from "@/components/GoBack"

    export default {
			name: "Theme",
			components: {
					LayoutDefault,
					Posts,
					GoBack
			},
			data() {
				return {
					title: "",
					status: {
						notApplicable: 1,
						complete: 2,
						inComplete: 3,
						inSufficient: 4
					}
				}
			},			
			computed: {
				themeTitle() {
					return this.$page.theme.themeName
				},
				filteredPost() {
					const filterArgument = this.themeTitle

					const allPosts = this.$page.allPost.edges
					const filterPost = allPosts.filter(post => {
						return post.node.theme === filterArgument
					})

					filterPost.sort((a, b) => {
						const dateA = new Date(a.node.date)
						const dateB = new Date(b.node.date)
						return dateB - dateA
					})

					filterPost.map(post => {
						if (post.node.group === 'none') {
							post.node.group = "..."
						}
						return post
					})

					filterPost.map(post=> {
						
						post.node.status = this.checkStatus(post)
						return post
					})
					
					
					return filterPost
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
  .button-container {

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

      &:hover {
        box-shadow: var(--material-shadow-hover);
      }
    }
	}
</style>