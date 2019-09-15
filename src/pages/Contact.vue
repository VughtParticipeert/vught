<template>
  <LayoutDefault :title="title" :disableSummary=disableSummary>
    <div class="button-container">
      <GoBack />
    </div>
    <Posts :title="title"
      content="Work in progress" :disableMetaData=true />
  </LayoutDefault>
</template>

<script>
    import LayoutDefault from "@/layouts/LayoutDefault.vue"
    import Posts from "@/components/Posts"
    import GoBack from "@/components/GoBack"


  export default {
    name: "Contact",
    components: {
      LayoutDefault,
      Posts,
      GoBack
    },
    data() {
      return {
        title: "Contact",
        disableSummary: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>