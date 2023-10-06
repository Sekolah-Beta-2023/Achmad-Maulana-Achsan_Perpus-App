<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="flex">
    <SideBar :isBooks="isBook" />
    <div class="bg-green-light w-full h-screen overflow-auto">
      <div class="flex justify-center w-full">
        <NavBar menu="Buku" username="JohnDoe" />
      </div>
      <!-- Awal input Search -->
      <div class="w-2/4 z-50 top-5 items-end flex justify-end fixed">
        <form class="w-1/3 flex items-end h-full gap-1">
          <InputComponent
            id="search"
            label=" "
            name="search"
            placeholder="Search"
            type="text"
          />
          <button class="flex items-end mb-2">
            <img src="../assets/icon-search.svg" alt="icon-search" />
          </button>
        </form>
      </div>
      <!-- AKhir input Search -->
      <div class="flex flex-wrap justify-center p-5 gap-3">
        <CardBook
          image="https://penerbitdeepublish.com/wp-content/uploads/2020/11/Buku-Perspektif-Pendidikan-dalam-Bingkai_Kurniawan-Convert-depan.jpg"
        />
        <CardBook />
        <CardBook
          image="https://penerbitdeepublish.com/wp-content/uploads/2020/11/Buku-Perspektif-Pendidikan-dalam-Bingkai_Kurniawan-Convert-depan.jpg"
        />
        <CardBook />
        <CardBook
          image="https://penerbitdeepublish.com/wp-content/uploads/2020/11/Buku-Perspektif-Pendidikan-dalam-Bingkai_Kurniawan-Convert-depan.jpg"
        />
        <CardBook />
        <CardBook
          image="https://penerbitdeepublish.com/wp-content/uploads/2020/11/Buku-Perspektif-Pendidikan-dalam-Bingkai_Kurniawan-Convert-depan.jpg"
        />
        <CardBook />
        <CardBook
          image="https://penerbitdeepublish.com/wp-content/uploads/2020/11/Buku-Perspektif-Pendidikan-dalam-Bingkai_Kurniawan-Convert-depan.jpg"
        />
        <CardBook />
        <CardBook
          image="https://penerbitdeepublish.com/wp-content/uploads/2020/11/Buku-Perspektif-Pendidikan-dalam-Bingkai_Kurniawan-Convert-depan.jpg"
        />
        <CardBook />
        <CardBook
          image="https://penerbitdeepublish.com/wp-content/uploads/2020/11/Buku-Perspektif-Pendidikan-dalam-Bingkai_Kurniawan-Convert-depan.jpg"
        />
        <CardBook />
        <CardBook
          image="https://penerbitdeepublish.com/wp-content/uploads/2020/11/Buku-Perspektif-Pendidikan-dalam-Bingkai_Kurniawan-Convert-depan.jpg"
        />
        <CardBook />
        <CardBook
          image="https://penerbitdeepublish.com/wp-content/uploads/2020/11/Buku-Perspektif-Pendidikan-dalam-Bingkai_Kurniawan-Convert-depan.jpg"
        />
        <CardBook />
      </div>
    </div>
  </div>
</template>
<script>
import CardBook from '~/components/CardBook.vue'
import SideBar from '@/components/SideBar.vue'
import NavBar from '~/components/NavBar.vue'
import InputComponent from '~/components/InputComponent.vue'

export default {
  components: { CardBook, SideBar, NavBar, InputComponent },
  data() {
    return {
      isBook: true,
    }
  },
}
</script>
