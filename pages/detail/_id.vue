<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="flex">
    <SideBar class="lg:flex md:flex hidden" :isBooks="isBook" />
    <div class="bg-green-light w-full h-screen overflow-auto">
      <div class="flex justify-center w-full lg:mt-0 md:mt-0 mt-5">
        <NavBar menu="Buku" nama="JohnDoe" />
      </div>
      <!-- Awal edit Books -->
      <div v-if="isEdit" class="mt-24 w-full flex justify-center items-center">
        <form
          method="post"
          class="bg-white shadow-xl w-10/12 p-4 rounded-lg"
          @submit.prevent="() => submitEdit()"
        >
          <div class="flex w-full justify-center items-center">
            <h1 class="text-green-dark font-inter font-bold text-xl">
              Edit Baru
            </h1>
          </div>
          <div class="flex justify-center items-center gap-4">
            <div>
              <InputTextareaComponent
                id="judul"
                v-model="newEdit.judul"
                label="Judul Buku"
                placeholder="Judul Buku"
                name="judul"
                :cols="30"
                :rows="4"
                :modelValue="books.judul"
              />
              <InputComponent
                id="penulis"
                v-model="newEdit.penulis"
                label="Penulis"
                name="penulis"
                type="text"
                placeholder="Penulis"
                :modelValue="books.penulis"
              />
              <InputComponent
                id="penerbit"
                v-model="newEdit.penerbit"
                label="Penerbit"
                name="penerbit"
                type="text"
                placeholder="Penerbit"
                :modelValue="books.penerbit"
              />
              <InputComponent
                id="kota"
                v-model="newEdit.kota"
                label="Kota Terbit"
                name="kota"
                type="text"
                placeholder="Kota Terbit"
                :modelValue="books.kota"
              />
            </div>
            <div>
              <InputComponent
                id="tahun"
                v-model="newEdit.tahun"
                label="Tahun Terbit"
                name="tahun"
                type="number"
                placeholder="2022"
                :modelValue="books.tahun"
              />
              <InputComponent
                id="isbn"
                v-model="newEdit.isbn"
                label="ISBN"
                name="isbn"
                type="number"
                placeholder="123442324"
                :modelValue="books.isbn"
              />
              <InputTextareaComponent
                id="deskripsi"
                v-model="newEdit.deskripsi"
                label="Deskripsi"
                placeholder="Deskripsi"
                name="deskripsi"
                :cols="30"
                :rows="4"
                :modelValue="books.deskripsi"
              />
              <!-- upload image -->
              <div class="mt-2">
                <label
                  for="image"
                  class="block font-inter text-sm font-medium leading-6 text-green-dark"
                  >Image</label
                >
                <div class="relative mt-2 rounded-md shadow-sm">
                  <input
                    id="image"
                    type="file"
                    name="image"
                    class="block font-inter w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-green-dark ring-1 ring-inset ring-green-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-dark sm:text-sm sm:leading-6"
                    @change="handleFileEdit"
                  />
                </div>
              </div>
              <!-- Upload -->
            </div>
          </div>
          <div class="flex w-full justify-center my-4 gap-5">
            <button
              class="bg-red-500 w-48 text-base font-bold h-12 shadow-lg rounded-md text-white"
              @click="isEdit = !isEdit"
            >
              Batal
            </button>
            <button
              type="submit"
              class="bg-green-dark w-48 text-base font-bold h-12 shadow-lg rounded-md text-white"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
      <!-- Akhir Add Books -->

      <div class="flex w-full flex-wrap justify-center p-5 gap-3 mt-20">
        <CardDetail
          v-if="books.id"
          :buku="books"
          :deleteBook="() => confirmDeleteBook(books.id)"
          :click="() => editBook()"
        />
        <div v-else class="h-96 w-full">
          <LoadingComponent />
        </div>
      </div>
      <div class="w-full flex items-center justify-start px-20">
        <button
          class="bg-green-dark w-32 md:w-48 text-base font-bold h-12 shadow-lg rounded-md text-white"
          @click="back"
        >
          Kembali
        </button>
      </div>
    </div>
    <!-- Bottom Bar -->
    <div class="lg:hidden md:hidden fixed bottom-0 right-0 left-0">
      <BottomBar :isBooks="isBook" />
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
import SideBar from '../../components/SideBar.vue'
import NavBar from '../../components/NavBar.vue'
import CardDetail from '../../components/CardDetail.vue'
import LoadingComponent from '~/components/LoadingComponent.vue'
import InputTextareaComponent from '~/components/InputTextareaComponent.vue'
import InputComponent from '~/components/InputComponent.vue'
import BottomBar from '~/components/BottomBar.vue'

export default {
  components: {
    SideBar,
    NavBar,
    CardDetail,
    LoadingComponent,
    InputTextareaComponent,
    InputComponent,
    BottomBar,
  },

  data() {
    return {
      isBook: true,
      isEdit: false,
      books: [],
      paramId: this.$route.params.id,
      newEdit: {
        judul: '',
        penulis: '',
        penerbit: '',
        kota: '',
        tahun: null,
        isbn: null,
        deskripsi: '',
        image: '',
      },
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
    editBook() {
      this.isEdit = !this.isEdit
    },
    // mengambil data berdasarkan id untuk diedit
    async detailBook() {
      try {
        const response = await this.$axios.get(
          `rest/v1/books?id=eq.${this.paramId}`
        )
        this.books = { ...response.data[0] }
        this.newEdit = { ...response.data[0] }
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

    // edit image
    async handleFileEdit(event) {
      const file = event.target.files[0]
      if (file) {
        try {
          const formData = new FormData()
          formData.append('image', file)

          const response = await this.$axios.put(
            `/storage/v1/object/${this.books.image}`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )
          this.newEdit.image = response.data.Key
        } catch (e) {
          this.error = e.response.data.message
        }
      } else {
        return (this.newEdit.image = this.books.image)
      }
    },

    // edit book
    async submitEdit() {
      try {
        await this.$axios.patch(`rest/v1/books?id=eq.${this.paramId}`, {
          judul: this.newEdit.judul,
          penulis: this.newEdit.penulis,
          penerbit: this.newEdit.penerbit,
          kota: this.newEdit.kota,
          tahun: this.newEdit.tahun,
          isbn: this.newEdit.isbn,
          deskripsi: this.newEdit.deskripsi,
          image: this.newEdit.image,
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Berhasil di Edit',
          showConfirmButton: false,
          timer: 1500,
        })
        this.books = this.newEdit

        this.isEdit = false
        window.location.replace('/buku')
      } catch (e) {
        this.error = e.response.data.msg
      }
    },
  },
}
</script>
