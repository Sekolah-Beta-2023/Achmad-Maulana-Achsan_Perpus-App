<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="flex">
    <SideBar class="lg:block md:block hidden" :isBooks="isBook" />
    <div class="bg-green-light w-full h-screen overflow-auto">
      <div class="flex justify-center w-full lg:mt-0 md:mt-0 mt-3">
        <NavBar menu="Buku" nama="JohnDoe" />
      </div>
      <!-- Awal input Search -->
      <div
        class="w-2/4 z-50 top-5 items-end justify-end fixed md:flex lg:flex hidden"
      >
        <form class="w-1/3 flex items-end h-full gap-1">
          <InputComponent
            id="search"
            v-model="searchQuery"
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
      <div v-if="loading" class="w-full h-full">
        <LoadingComponent />
      </div>
      <div
        v-else-if="resultQuery.length !== 0"
        class="flex flex-wrap justify-center p-5 gap-3 mt-20"
      >
        <CardBook
          v-for="(book, i) in resultQuery"
          :key="i"
          :image="book.image"
          :judul="book.judul"
          :bookId="book.id"
        />
      </div>
      <div
        v-else
        class="h-full text-green-dark text-lg p-5 items-start mt-20 text-center pt-20 font-inter w-full flex justify-center"
      >
        <p>Data Tidak ditemukan</p>
      </div>
    </div>
    <!-- Bottom Bar -->
    <div class="lg:hidden md:hidden fixed bottom-0 right-0 left-0">
      <BottomBar :isBooks="isBook" />
    </div>
  </div>
</template>
<script>
import CardBook from '~/components/CardBook.vue'
import SideBar from '@/components/SideBar.vue'
import NavBar from '~/components/NavBar.vue'
import InputComponent from '~/components/InputComponent.vue'
import LoadingComponent from '~/components/LoadingComponent.vue'
import BottomBar from '~/components/BottomBar.vue'

export default {
  components: {
    CardBook,
    SideBar,
    NavBar,
    InputComponent,
    LoadingComponent,
    BottomBar,
  },
  data() {
    return {
      isBook: true,
      books: [],
      searchQuery: '',
      loading: false,
    }
  },

  computed: {
    // fitur search
    resultQuery() {
      if (this.searchQuery) {
        return this.books.filter((book) => {
          return this.searchQuery
            .toLowerCase()
            .split(' ')
            .every((v) => book.judul.toLowerCase().includes(v))
        })
      } else {
        return this.books
      }
    },
  },

  mounted() {
    this.admin = localStorage.getItem('token')
    if (!this.admin) {
      window.location.replace('/masuk')
    }
    // mounting getBooks
    this.getBooks()
  },
  methods: {
    async getBooks() {
      this.loading = true
      try {
        const response = await this.$axios.get('rest/v1/books')
        this.books = response.data
      } catch (e) {
        this.error = e.response.data.message
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
