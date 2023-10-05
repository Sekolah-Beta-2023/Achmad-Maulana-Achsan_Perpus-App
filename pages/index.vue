<template>
  <div class="flex">
    <SideBar />
    <div class="bg-red-400 w-full h-screen overflow-auto">
      <div class="h-screen bg-green-light">
        <h1>Disini Landing Page</h1>
      </div>
      <div class="h-screen bg-orange-light"></div>
    </div>
  </div>
</template>

<script>
import SideBar from '~/components/SideBar.vue'

export default {
  name: 'IndexPage',
  components: { SideBar },
  data() {
    return {}
  },
}
</script>
