<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="flex">
    <SideBar class="lg:flex md:flex hidden" :isPengguna="isPengguna" />
    <div class="bg-green-light w-full h-screen overflow-auto">
      <div class="flex lg:mt-0 md:mt-0 mt-5 justify-center w-full">
        <NavBar menu="Pengguna" nama="JohnDoe" />
      </div>
      <!-- Awal input Search -->
      <div
        class="w-2/4 z-50 top-6 items-end lg:flex md:flex hidden justify-end fixed"
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
      <div class="mt-20 w-full flex justify-start items-start flex-col md:p-8">
        <div
          v-if="!isCreating"
          class="w-full flex justify-end items-center md:mt-0 mt-4 md:pr-0 pr-6"
          :class="isEdit ? 'hidden' : ''"
        >
          <button
            class="bg-green-dark md:w-48 w-36 md:text-base text-sm md:font-bold h-12 text-white shadow-lg fixed rounded-md"
            @click="isCreating = !isCreating"
          >
            + Tambah Pengguna
          </button>
        </div>
        <!-- Tambah user -->
        <div v-else class="mt-2 w-full flex justify-center items-center">
          <form
            method="post"
            class="bg-white shadow-xl md:w-1/3 w-full md:pt-4 p-3 rounded-lg"
            @submit.prevent="addUser"
          >
            <div class="flex w-full justify-center items-center">
              <h1 class="text-green-dark font-inter font-bold text-xl">
                Tambah Pengguna Baru
              </h1>
            </div>
            <div class="flex justify-center items-center gap-4">
              <div>
                <InputComponent
                  id="username"
                  v-model="newUsers.username"
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Username"
                />
                <InputComponent
                  id="email"
                  v-model="newUsers.email"
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                />
              </div>
            </div>
            <div class="flex w-full justify-center my-4 gap-5">
              <div
                class="w-1/3 bg-red-500 text-base font-bold h-12 shadow-lg rounded-md text-white text-center items-center flex justify-center"
                @click="isCreating = !isCreating"
              >
                Batal
              </div>
              <button
                type="submit"
                class="bg-green-dark w-1/3 text-base font-bold h-12 shadow-lg rounded-md text-white"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
        <!-- Akhir tambah user -->
        <!-- Edit User -->
        <div v-if="isEdit" class="mt-2 w-full flex justify-center items-center">
          <form
            method="post"
            class="bg-white shadow-xl md:w-1/3 w-full md:pt-4 p-3 rounded-lg"
            @submit.prevent="() => submitEdit(edit.id)"
          >
            <div class="flex w-full justify-center items-center">
              <h1 class="text-green-dark font-inter font-bold text-xl">
                Edit Pengguna
              </h1>
            </div>
            <div class="flex justify-center items-center gap-4">
              <div>
                <InputComponent
                  id="username"
                  v-model="newEdit.username"
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  :modelValue="edit.username"
                />
                <InputComponent
                  id="email"
                  v-model="newEdit.email"
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  :modelValue="edit.email"
                />
                <div class="w-full mt-2">
                  <label
                    class="block font-inter text-sm font-medium leading-6 text-green-dark"
                    for="status"
                    >Status</label
                  >
                  <select
                    id="status"
                    v-model="newEdit.status"
                    :value="edit.status"
                    name="status"
                    class="block font-inter w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-green-dark ring-1 ring-inset ring-green-dark focus:ring-2 focus:ring-inset focus:ring-green-dark sm:text-sm sm:leading-6 h-9"
                  >
                    <option :value="true">Meminjam</option>
                    <option :value="false">Tidak Meminjam</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="flex w-full justify-center my-4 gap-5">
              <button
                class="w-1/3 bg-red-500 text-base font-bold h-12 shadow-lg rounded-md text-white"
                @click="isEdit = !isEdit"
              >
                Batal
              </button>
              <button
                type="submit"
                class="bg-green-dark w-1/3 text-base font-bold h-12 shadow-lg rounded-md text-white"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
        <!-- Akhir Edit User -->
        <!-- Loading -->
        <div v-if="loading" class="w-full">
          <LoadingComponent />
        </div>
        <!-- Akhir Loading -->
        <table
          v-else-if="resultQuery.length !== 0"
          class="table-auto w-full mt-10"
        >
          <thead
            class="bg-green-dark w-full h-12 text-white font-inter md:text-base text-sm md:font-semibold"
          >
            <tr class="w-full border-white border-solid border-2">
              <th class="md:w-12 border-2">No</th>
              <th class="border-2">Username</th>
              <th class="border-2">Email</th>
              <th class="border-2">Status</th>
              <th class="border-2">Action</th>
            </tr>
          </thead>
          <tbody class="bg-white text-green-dark text-base">
            <CardUser
              v-for="(user, i) in resultQuery"
              :key="user.id"
              :user="user"
              :no="i + 1"
              :click="() => editUser(user.id)"
              :deleteUser="() => confirmDeleteUser(user.id)"
            />
          </tbody>
        </table>
        <div
          v-else
          class="h-full text-green-dark text-lg p-5 items-start mt-20 text-center pt-20 font-inter w-full flex justify-center"
        >
          <p>Data Tidak ditemukan</p>
        </div>
      </div>
    </div>
    <!-- Bottom Bar -->
    <div class="lg:hidden md:hidden fixed bottom-0 right-0 left-0">
      <BottomBar :isPengguna="isPengguna" />
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
import SideBar from '@/components/SideBar.vue'
import CardUser from '~/components/CardUser.vue'
import NavBar from '~/components/NavBar.vue'
import InputComponent from '~/components/InputComponent.vue'
import LoadingComponent from '~/components/LoadingComponent.vue'
import BottomBar from '~/components/BottomBar.vue'

export default {
  components: {
    SideBar,
    NavBar,
    CardUser,
    InputComponent,
    LoadingComponent,
    BottomBar,
  },

  data() {
    return {
      isPengguna: true,
      isCreating: false,
      isEdit: false,
      loading: false,
      searchQuery: '',
      users: [],
      newUsers: {
        username: '',
        email: '',
        status: false,
      },
      edit: [],
      newEdit: {
        username: '',
        email: '',
        status: false,
      },
    }
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.users.filter((user) => {
          return this.searchQuery
            .toLowerCase()
            .split(' ')
            .every((v) => user.username.toLowerCase().includes(v))
        })
      } else {
        return this.users
      }
    },
  },

  mounted() {
    this.admin = localStorage.getItem('token')
    if (!this.admin) {
      window.location.replace('/masuk')
    }
    this.getUsers()
  },

  methods: {
    // menampilkan para pengguna
    async getUsers() {
      this.loading = true
      try {
        const response = await this.$axios.get('rest/v1/pelanggan')
        this.users = response.data
      } catch (e) {
        this.error = e.response.data.message
      } finally {
        this.loading = false
      }
    },
    // menambah user
    async addUser() {
      try {
        await this.$axios.post('rest/v1/pelanggan', {
          username: this.newUsers.username,
          email: this.newUsers.email,
          status: false,
        })
        // setelah berhasil menambahkan
        this.newUsers.username = ''
        this.newUsers.email = ''

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Berhasil Menambahkan Pengguna',
          showConfirmButton: false,
          timer: 1500,
        })

        // memperbarui daftar pengguna
        await this.getUsers()
        // menyembunykan formulir tambah pengguna
        this.isCreating = false
      } catch (e) {
        this.error = e.response.data.message
      }
    },

    // konfirmasi delete user

    confirmDeleteUser(id) {
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
          this.deleteUser(id)
        }
      })
    },

    async deleteUser(id) {
      try {
        await this.$axios.delete(`rest/v1/pelanggan?id=eq.${id}`)
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')

        // memperbarui data
        this.getUsers()
      } catch (e) {
        this.error = e.response.data.message
      }
    },

    // mengambil data berdasarkan id untuk diedit
    async editUser(id) {
      this.isEdit = !this.isEdit
      try {
        const response = await this.$axios.get(`rest/v1/pelanggan?id=eq.${id}`)
        this.edit = response.data[0]
        this.edit = { ...response.data[0] }
        this.newEdit = { ...response.data[0] }
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    // konfirmasi pengeditan
    async submitEdit(id) {
      try {
        await this.$axios.patch(`rest/v1/pelanggan?id=eq.${id}`, {
          username: this.newEdit.username,
          email: this.newEdit.email,
          status: this.newEdit.status,
        })

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Berhasil di Edit',
          showConfirmButton: false,
          timer: 1500,
        })
        await this.getUsers()

        this.isEdit = false
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>
