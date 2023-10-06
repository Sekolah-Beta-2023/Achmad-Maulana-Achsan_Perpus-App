<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="flex">
    <SideBar :isPengguna="isPengguna" />
    <div class="bg-green-light w-full h-screen overflow-auto">
      <div class="flex justify-center w-full">
        <NavBar menu="Pengguna" username="JohnDoe" />
      </div>
      <div class="mt-20 w-full flex justify-start items-start p-8">
        <table class="table-auto w-full">
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

export default {
  components: { SideBar, NavBar, CardUser },
  data() {
    return {
      isPengguna: true,
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
