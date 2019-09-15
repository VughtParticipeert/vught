<template>
  <LayoutDefault :title="title" :disableSummary=disableSummary>
    <div class="button-container">
      <GoBack />
    </div>
    <ContactForm :title="title" :email="email"/>
  </LayoutDefault>
</template>

<script>
    import LayoutDefault from "@/layouts/LayoutDefault.vue"
    import ContactForm from "@/components/ContactForm"
    import GoBack from "@/components/GoBack"


  export default {
    name: "Contact",
    components: {
      LayoutDefault,
      ContactForm,
      GoBack
    },
    data() {
      return {
        title: "Contact",
        email: "info@vughtparticipeert.nl",
        disableSummary: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>