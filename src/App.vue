<template>
  <Header/>

  <main className="page">
    <Training/>
    <News/>
  </main>

  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Training from "@/components/Training";
import News from "@/components/News";


export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Training,
    News,
  },
}
</script>

<style lang="scss">

</style>
