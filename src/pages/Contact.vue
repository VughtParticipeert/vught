<template>
  <LayoutDefault :title="title" :disableSummary=disableSummary>
    <div class="button-container">
      <GoBack />
    </div>
    <ContactForm :title="title" :email="email"/>
    <MemberForm/>
  </LayoutDefault>
</template>

<script>
    import LayoutDefault from "@/layouts/LayoutDefault.vue"
    import ContactForm from "@/components/ContactForm"
    import GoBack from "@/components/GoBack"
    import MemberForm from "@/components/MemberForm"


  export default {
    name: "Contact",
    components: {
      LayoutDefault,
      ContactForm,
      GoBack,
      MemberForm
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