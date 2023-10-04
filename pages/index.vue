<template>
  <div class="flex">
    <SideBar />
    <div class="bg-red-400 w-full h-screen overflow-auto">
      <h1>Disini ngedit lagi</h1>
      <div class="h-screen bg-green-light"></div>
      <div class="h-screen bg-orange-light"></div>
    </div>
  </div>
</template>

<script>
import SideBar from '~/components/SideBar.vue'

export default {
  name: 'IndexPage',
  components: { SideBar },
}
</script>
