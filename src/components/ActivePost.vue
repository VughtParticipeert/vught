<template>
  <Posts
    :title="post.title"
    :date="post.date"
    :typePost="post.typePost"
    :theme="post.theme"
    :status="postStatus"
    :group="post.group"
    :content="post.content"
    :attachment="post.attachment"
  />
</template>

<script>
	import Posts from "@/components/Posts"
  export default {
    name: "ActivePost",
    components: {
      Posts
    },
    props: {
      post: {
        type: Object,
        default: ()=> {}
      }
    },
    data() {
      return {
        statusValue: {
          notApplicable: 1,
          complete: 2,
          inComplete: 3,
          inSufficient: 4
        }
      }
    },
    computed: {
      postStatus() {
        const postStatus = this.checkStatus(this.post)
        return postStatus.status
      }
    },
    methods: {
        checkStatus(post) {
          switch (post.status) {
            case this.statusValue.notApplicable:
              post.status = {
                text: "Niet van toepassing",
                value: "notApplicable"
              }
              break;
            case this.statusValue.complete:
              post.status = {
                text: "Antwoord is volledig",
                value: "complete"
              }
              break;
            case this.statusValue.inComplete:
              post.status = {
                text: "Antwoord is onvolledig",
                value: "inComplete"
              }
              break;
            case this.statusValue.inSufficient:
              post.status = {
                text: "Antwoord volstaat niet",
                value: "inSufficient"
              }
              break;
          }
          return post
        }
      }

  }
</script>