<template>
  <LayoutDefault>
      <Posts v-for="post in allPosts" :key="post.node.id"
      :title="post.node.title"
      :date="post.node.date"
      :typePost="post.node.typePost"
      :content="post.node.content"
      :theme="post.node.theme"
      :group="post.node.group"
      :linkPath="`${post.node.path}#main`"
      :status="post.node.status"
      :attachment="post.node.attachment"
      class="posts"
      />
  </LayoutDefault>
</template>

<page-query>
  query Posts{
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
          answered
          group
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
  import Posts from "@/components/Posts"
  import LayoutDefault from "@/layouts/LayoutDefault.vue"

  export default {
    components: {
      Posts,
      LayoutDefault
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
      allPosts() {
        const data = this.$page.allPost.edges
        
        //Sort item by date - oldest first
        let allPosts = data
        allPosts.sort((a,b)=> {
          const dateA = new Date(a.node.date)
          const dateB = new Date(b.node.date)
          return dateB - dateA
        })

        //Map group
        allPosts.map(post=> {
          if(post.node.group === 'none') {
            post.node.group = "..."
          }
          return post
        })

        const posts = this.checkStatus(allPosts)

        return posts
      }
    },
    methods: {
      checkStatus(posts) {
        posts.map(post=> {
          switch(post.node.status) {
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
        })

        return posts
      }
    }
  }
</script>


<style scoped lang="scss">
  $breakpoint-medium: 40em;

  .main-posts {
    display: flex;
    display: grid;
    justify-content: center;
    margin-top: 4rem;
    padding: 0.7rem;
    padding-top: 0;
    @media screen and (min-width: $breakpoint-medium) {
      & {
        padding: 2rem;
      }
    }

    .title {
      color: rgb(189, 189, 189);
      font-size: 4em;
    }
  }
</style>
