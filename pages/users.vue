<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="flex">
    <SideBar :isPengguna="isPengguna" />
    <div class="bg-green-light w-full h-screen overflow-auto">
      <div class="flex justify-center w-full">
        <NavBar menu="Pengguna" username="JohnDoe" />
      </div>
      <div class="mt-20 w-full flex justify-start items-start flex-col p-8">
        <div v-if="!isCreating" class="w-full flex justify-end items-center">
          <button
            class="bg-green-dark w-48 text-base font-bold h-12 text-white shadow-lg fixed rounded-md"
            @click="isCreating = !isCreating"
          >
            + Tambah Pengguna
          </button>
        </div>
        <div v-else class="mt-2 w-full flex justify-center items-center">
          <form class="bg-white shadow-xl w-1/3 pt-4 rounded-lg">
            <div class="flex justify-center items-center gap-4">
              <div>
                <InputComponent
                  id="username"
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Username"
                />
                <InputComponent
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                />
              </div>
            </div>
            <div class="flex w-full justify-center my-4 gap-5">
              <button
                class="w-1/3 bg-red-500 text-base font-bold h-12 shadow-lg rounded-md text-white"
                @click="isCreating = !isCreating"
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
        <table class="table-auto w-full mt-10">
          <thead
            class="bg-green-dark w-full h-12 text-white font-inter text-base font-semibold"
          >
            <tr class="w-full border-white border-solid border-2">
              <th class="w-12 border-2">No</th>
              <th class="border-2">Username</th>
              <th class="border-2">Email</th>
              <th class="border-2">Status</th>
              <th class="border-2">Action</th>
            </tr>
          </thead>
          <tbody class="bg-white text-green-dark text-base">
            <CardUser
              v-for="(user, i) in users"
              :key="user.id"
              :user="user"
              :no="i + 1"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import CardUser from '~/components/CardUser.vue'
import NavBar from '~/components/NavBar.vue'
import InputComponent from '~/components/InputComponent.vue'

export default {
  components: { SideBar, NavBar, CardUser, InputComponent },

  data() {
    return {
      isPengguna: true,
      isCreating: false,
      users: [
        {
          id: 1,
          username: 'Human',
          email: 'Email',
          status: false,
        },
        {
          id: 2,
          username: 'Wolha',
          email: 'haihi',
          status: true,
        },
        {
          id: 2,
          username: 'Wolha',
          email: 'haihi',
          status: true,
        },
        {
          id: 2,
          username: 'Wolha',
          email: 'haihi',
          status: true,
        },
      ],
    }
  },
}
</script>
