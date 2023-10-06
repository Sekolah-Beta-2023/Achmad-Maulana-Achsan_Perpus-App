<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="flex">
    <SideBar :isPengguna="isPengguna" />
    <div class="bg-green-light w-full h-screen overflow-auto">
      <div class="flex justify-center w-full">
        <NavBar menu="Pengguna" username="JohnDoe" />
      </div>
      <div class="flex flex-wrap justify-between p-5 gap-3">
        <CardBook
          image="https://penerbitdeepublish.com/wp-content/uploads/2020/11/Buku-Perspektif-Pendidikan-dalam-Bingkai_Kurniawan-Convert-depan.jpg"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CardBook from '~/components/CardBook.vue'
import SideBar from '@/components/SideBar.vue'
import NavBar from '~/components/NavBar.vue'

export default {
  components: { CardBook, SideBar, NavBar },
  data() {
    return {
      isPengguna: true,
    }
  },
}
</script>
