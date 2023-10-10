<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="flex">
    <SideBar :isBooks="isBook" />
    <div class="bg-green-light w-full h-screen overflow-auto">
      <div class="flex justify-center w-full">
        <NavBar menu="Buku" nama="JohnDoe" />
      </div>

      <div class="flex flex-wrap justify-center p-5 gap-3 mt-20">
        <CardDetail
          v-if="books.id"
          :buku="books"
          :deleteBook="() => confirmDeleteBook(books.id)"
        />
        <div v-else class="h-96 w-full">
          <LoadingComponent />
        </div>
      </div>
      <div class="w-full flex items-center justify-start px-20">
        <button
          class="bg-green-dark w-48 text-base font-bold h-12 shadow-lg rounded-md text-white"
          @click="back"
        >
          Kembali
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
import SideBar from '../../components/SideBar.vue'
import NavBar from '../../components/NavBar.vue'
import CardDetail from '../../components/CardDetail.vue'
import LoadingComponent from '~/components/LoadingComponent.vue'

export default {
  components: {
    SideBar,
    NavBar,
    CardDetail,
    LoadingComponent,
  },

  data() {
    return {
      isBook: true,
      books: [],
      paramId: this.$route.params.id,
    }
  },
  mounted() {
    this.admin = localStorage.getItem('token')
    if (!this.admin) {
      window.location.replace('/masuk')
    }
    this.detailBook()
  },
  methods: {
    back() {
      window.location.replace('/buku')
    },
    // mengambil data berdasarkan id untuk diedit
    async detailBook() {
      try {
        const response = await this.$axios.get(
          `rest/v1/books?id=eq.${this.paramId}`
        )
        this.books = { ...response.data[0] }
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    // menghapus buku
    async deleteBook(id) {
      try {
        await this.$axios.delete(`rest/v1/books?id=eq.${id}`)

        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
        window.location.replace('/buku')

        // memperbarui data
        this.getBooks()
      } catch (e) {
        this.error = e.response.data.message
      }
    },

    // konfirmasi delete book
    confirmDeleteBook(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteBook(id)
        }
      })
    },
  },
}
</script>
