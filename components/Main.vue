<template>
  <div>

    <Welcome />

    <Middle />

    <Scale />

    <Gallery />

    <Panel />

    <Work />

    <Hoskines />

    <Footer />

  </div>
</template>

<script>
  import Welcome from '@/components/Welcome'
  import Middle from '@/components/Middle'
  import Scale from '@/components/Scale'
  import Gallery from '@/components/Gallery'
  import Panel from '@/components/Panel'
  import Work from '@/components/Gallery'
  import Hoskines from '@/components/Hoskines'

  export default {
    components: [Welcome, Middle, Scale, Gallery, Panel, Work, Hoskines]
  }

</script>

<style scoped>

</style>
