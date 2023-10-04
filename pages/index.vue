<template>
  <div class="flex">
    <SideBar />
    <div class="bg-red-400 w-full h-screen overflow-auto">
      <NavBar menu="Dashboard" />
      <div class="h-screen bg-green-light"></div>
      <div class="h-screen bg-orange-light"></div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import SideBar from '~/components/SideBar.vue'

export default {
  name: 'IndexPage',
  components: { SideBar, NavBar },
  data() {
    return {}
  },
}
</script>
