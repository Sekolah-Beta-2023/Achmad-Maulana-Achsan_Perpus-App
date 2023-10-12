<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="flex">
    <SideBar :isTambahBuku="isTambahBuku" />
    <div class="bg-green-light w-full h-screen overflow-auto">
      <div class="flex justify-center w-full">
        <NavBar menu="Tambah Buku" nama="John Doe" />
      </div>
      <!-- Awal input Search -->
      <div class="w-2/4 z-50 top-5 items-end flex justify-end fixed">
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

      <div class="w-full p-16">
        <div
          :class="`w-full h-full mt-10 ${
            isEdit ? 'fixed bg-blend-color-burn  left-28' : ''
          }`"
        >
          <div
            v-if="!isCreating"
            class="w-full flex justify-end"
            :class="isEdit ? 'hidden' : ''"
          >
            <button
              class="bg-green-dark w-48 text-base font-bold h-12 text-white shadow-lg fixed rounded-md z-40"
              @click="isCreating = !isCreating"
            >
              + Tambah Buku
            </button>
          </div>
          <!-- Awal Add Books -->
          <div v-else class="mt-2 w-full flex justify-center items-center">
            <form
              class="bg-white shadow-xl w-10/12 p-4 rounded-lg"
              @submit.prevent="addBook"
            >
              <div class="flex w-full justify-center items-center">
                <h1 class="text-green-dark font-inter font-bold text-xl">
                  Tambah Buku Baru
                </h1>
              </div>
              <div class="flex justify-center items-center gap-4">
                <div>
                  <InputTextareaComponent
                    id="judul"
                    v-model="newBook.judul"
                    label="Judul Buku"
                    placeholder="Judul Buku"
                    name="judul"
                    :cols="30"
                    :rows="4"
                  />
                  <InputComponent
                    id="penulis"
                    v-model="newBook.penulis"
                    label="Penulis"
                    name="penulis"
                    type="text"
                    placeholder="Penulis"
                  />
                  <InputComponent
                    id="penerbit"
                    v-model="newBook.penerbit"
                    label="Penerbit"
                    name="penerbit"
                    type="text"
                    placeholder="Penerbit"
                  />
                  <InputComponent
                    id="kota"
                    v-model="newBook.kota"
                    label="Kota Terbit"
                    name="kota"
                    type="text"
                    placeholder="Kota Terbit"
                  />
                </div>
                <div>
                  <InputComponent
                    id="tahun"
                    v-model="newBook.tahun"
                    label="Tahun Terbit"
                    name="tahun"
                    type="number"
                    placeholder="2022"
                  />
                  <InputComponent
                    id="isbn"
                    v-model="newBook.isbn"
                    label="ISBN"
                    name="isbn"
                    type="number"
                    placeholder="123442324"
                  />
                  <InputTextareaComponent
                    id="deskripsi"
                    v-model="newBook.deskripsi"
                    label="Deskripsi"
                    placeholder="Deskripsi"
                    name="deskripsi"
                    :cols="30"
                    :rows="4"
                  />
                  <!-- upload image -->
                  <div class="mt-2">
                    <label
                      for="image"
                      class="block font-inter text-sm font-medium leading-6 text-green-dark"
                      >Upload</label
                    >
                    <div class="relative mt-2 rounded-md shadow-sm">
                      <input
                        id="image"
                        type="file"
                        name="image"
                        class="block font-inter w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-green-dark ring-1 ring-inset ring-green-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-dark sm:text-sm sm:leading-6"
                        @change="handleFileUpload"
                      />
                    </div>
                  </div>
                  <!-- Upload -->
                </div>
              </div>
              <div class="flex w-full justify-center my-4 gap-5">
                <button
                  class="bg-red-500 w-48 text-base font-bold h-12 shadow-lg rounded-md text-white"
                  @click="isCreating = !isCreating"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  class="bg-green-dark w-48 text-base font-bold h-12 shadow-lg rounded-md text-white"
                >
                  Buat
                </button>
              </div>
            </form>
          </div>
          <!-- Akhir Add Books -->
          <!-- Edit Books -->
          <div
            v-if="isEdit"
            class="mt-2 w-full flex justify-center items-center"
          >
            <form
              method="post"
              class="bg-white shadow-xl w-10/12 p-4 rounded-lg"
              @submit.prevent="() => submitEdit(edit.id)"
            >
              <div class="flex w-full justify-center items-center">
                <h1 class="text-green-dark font-inter font-bold text-xl">
                  Edit Buku
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
                    :modelValue="edit.judul"
                  />
                  <InputComponent
                    id="penulis"
                    v-model="newEdit.penulis"
                    label="Penulis"
                    name="penulis"
                    type="text"
                    placeholder="Penulis"
                    :modelValue="edit.penulis"
                  />
                  <InputComponent
                    id="penerbit"
                    v-model="newEdit.penerbit"
                    label="Penerbit"
                    name="penerbit"
                    type="text"
                    placeholder="Penerbit"
                    :modelValue="edit.penerbit"
                  />
                  <InputComponent
                    id="kota"
                    v-model="newEdit.kota"
                    label="Kota Terbit"
                    name="kota"
                    type="text"
                    placeholder="Kota Terbit"
                    :modelValue="edit.kota"
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
                    :modelValue="edit.tahun"
                  />
                  <InputComponent
                    id="isbn"
                    v-model="newEdit.isbn"
                    label="ISBN"
                    name="isbn"
                    type="number"
                    placeholder="123442324"
                    :modelValue="edit.isbn"
                  />
                  <InputTextareaComponent
                    id="deskripsi"
                    v-model="newEdit.deskripsi"
                    label="Deskripsi"
                    placeholder="Deskripsi"
                    name="deskripsi"
                    :cols="30"
                    :rows="4"
                    :modelValue="edit.deskripsi"
                  />
                  <!-- Input Upload -->
                  <div class="mt-2">
                    <label
                      for="image"
                      class="block font-inter text-sm font-medium leading-6 text-green-dark"
                      >Image</label
                    >
                    <div class="relative mt-2 rounded-md shadow-sm">
                      <input
                        id="imageedit"
                        type="file"
                        name="image"
                        class="block font-inter w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-green-dark ring-1 ring-inset ring-green-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inse focus:ring-green-dark sm:text-sm sm:leading-6"
                        @change="handleFileEdit"
                      />
                    </div>
                  </div>
                  <!-- AKhir Input Upload -->
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
                  Simpan
                </button>
              </div>
            </form>
          </div>
          <!-- Akhir Edit Books -->
        </div>
        <div v-if="loading" class="w-full h-full">
          <LoadingComponent />
        </div>
        <div
          v-else-if="resultQuery.length !== 0"
          class="flex flex-col gap-4 mt-14"
        >
          <CardDetail
            v-for="(book, i) in resultQuery"
            :key="i"
            :buku="book"
            :click="() => editBook(book.id)"
            :deleteBook="() => confirmDeleteBook(book.id)"
          />
        </div>
        <div
          v-else
          class="h-full text-green-dark text-lg p-5 items-start mt-20 text-center pt-20 font-inter w-full flex justify-center"
        >
          <p>Data Tidak ditemukan</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
import InputComponent from '~/components/InputComponent.vue'
import NavBar from '~/components/NavBar.vue'
import SideBar from '~/components/SideBar.vue'
import InputTextareaComponent from '@/components/InputTextareaComponent.vue'
import CardDetail from '~/components/CardDetail.vue'
import LoadingComponent from '~/components/LoadingComponent.vue'

export default {
  components: {
    SideBar,
    NavBar,
    InputComponent,
    InputTextareaComponent,
    CardDetail,
    LoadingComponent,
  },
  data() {
    return {
      isTambahBuku: true,
      isCreating: false,
      isEdit: false,
      searchQuery: '',
      loading: false,
      books: [],
      newBook: {
        judul: '',
        penulis: '',
        penerbit: '',
        kota: '',
        tahun: 0,
        isbn: 0,
        deskripsi: '',
        image: '',
      },
      edit: [],
      newEdit: {
        judul: '',
        penulis: '',
        penerbit: '',
        kota: '',
        tahun: 0,
        isbn: 0,
        deskripsi: '',
        image: '',
      },
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
    this.getBooks()
  },
  methods: {
    // menampilkan buku-buku
    async getBooks() {
      this.loading = true
      try {
        const response = await this.$axios.get('rest/v1/books')
        this.books = response.data
      } catch (e) {
        this.error = e.response.data.msg
      } finally {
        this.loading = false
      }
    },

    // menambah buku
    async addBook() {
      if (
        !this.newBook.judul ||
        !this.newBook.penulis ||
        !this.newBook.penerbit ||
        !this.newBook.kota ||
        !this.newBook.tahun ||
        !this.newBook.isbn ||
        !this.newBook.deskripsi ||
        !this.newBook.image
      ) {
        // Menampilkan pesan kesalahan jika ada kolom yang kosong
        Swal.fire('Error!', 'Silakan isi semua kolom.', 'error')
        return // Menghentikan eksekusi metode jika ada kolom yang kosong
      }
      try {
        await this.$axios.post('rest/v1/books', {
          judul: this.newBook.judul,
          penulis: this.newBook.penulis,
          penerbit: this.newBook.penerbit,
          kota: this.newBook.kota,
          tahun: this.newBook.tahun,
          isbn: this.newBook.isbn,
          deskripsi: this.newBook.deskripsi,
          image: this.newBook.image,
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Berhasil di Tambah',
          showConfirmButton: false,
          timer: 1500,
        })
        await this.getBooks()

        this.isCreating = false
      } catch (e) {
        this.error = e.response.data.message
      }
    },

    // upload image
    async handleFileUpload(event) {
      const file = event.target.files[0]

      try {
        const formData = new FormData()
        formData.append('image', file)

        const uniqueString = new Date().getTime().toString()

        const response = await this.$axios.post(
          `/storage/v1/object/images/${uniqueString}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

        if (response.data.Key) {
          this.newBook.image = response.data.Key.toString()
        }
      } catch (e) {
        this.error = e.response.data.message
      }
    },

    // scroll
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    // // Edit image
    async handleFileEdit(event) {
      const file = event.target.files[0]
      if (file) {
        try {
          const formData = new FormData()
          formData.append('image', file)

          const response = await this.$axios.put(
            `/storage/v1/object/${this.edit.image}`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )

          this.newEdit.image = response.data.Key
        } catch (e) {
          this.error = e.response.data.msg
        }
      } else {
        return (this.newEdit.image = this.edit.image)
      }
    },

    // menghapus buku
    async deleteBook(id) {
      try {
        await this.$axios.delete(`rest/v1/books?id=eq.${id}`)

        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')

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

    // mengambil data berdasarkan id untuk diedit
    editBook(id) {
      this.isEdit = true
      this.edit = { ...this.books.find((book) => book.id === id) }
      this.newEdit = { ...this.books.find((book) => book.id === id) }

      this.scrollToTop()
    },

    // konfirmasi pengeditan
    async submitEdit(id) {
      try {
        await this.$axios.patch(`rest/v1/books?id=eq.${id}`, {
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
        await this.getBooks()
        this.isEdit = false
        window.location.replace('/tambah-buku')
        this.newEdit.judul = ''
        this.newEdit.penulis = ''
        this.newEdit.penerbit = ''
        this.newEdit.kota = ''
        this.newEdit.tahun = ''
        this.newEdit.isbn = ''
        this.newEdit.deskripsi = ''
        this.newEdit.image = ''
      } catch (e) {
        this.error = e.response.data.msg
      }
    },
  },
}
</script>
