<template>
  <tr class="w-full border-green-dark border-solid border-2 h-12">
    <td class="w-12 border-green-dark border-2 text-center">{{ no }}</td>
    <td class="border-green-dark border-2 md:px-3">{{ user.username }}</td>
    <td class="border-green-dark border-2 md:px-3">{{ user.email }}</td>
    <td class="border-green-dark border-2 text-center">
      {{ user.status ? 'meminjam' : 'tidak meminjam' }}
    </td>
    <td class="border-green-dark border-2 text-center">
      <button class="w-7 h-7 rounded border-green-dark border-2" @click="click">
        <img src="../assets/icon-edit.svg" alt="icon-edit" />
      </button>
      <button
        class="w-7 h-7 rounded border-red-600 border-2"
        @click="deleteUser"
      >
        <img src="../assets/icon-delete.svg" alt="icon-delete" />
      </button>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'CardUser',
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          username: 'Username',
          email: 'Email',
          status: false,
        }
      },
    },
    no: {
      type: Number,
      default: 1,
    },
    click: {
      type: Function,
      default: () => {},
    },
    deleteUser: {
      type: Function,
      required: true,
    },
  },
}
</script>
