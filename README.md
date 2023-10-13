# Perpustakaan App Project

![Perpustakaan App Logo](/assets/perpus-app-hijau.svg)

## Latar Belakang

Perpustakaan App adalah aplikasi peminjaman dan pengembalian buku yang saya kembangkan sebagai Software Engineer. Dalam proyek ini, fokus utama saya adalah mengembangkan fitur-fitur CRUD (Create, Read, Update, Delete) dari sisi Admin.

## Fitur Prioritas (MVP)

1. **Admin CRUD Buku:**

   - Admin dapat membuat, melihat, memperbarui, dan menghapus data buku.

2. **Sistem Otentikasi Admin:**

   - Admin yang telah mendaftar dapat melakukan login untuk mengakses sistem.

3. **Tampilan Daftar Buku:**

   - Admin dapat melihat daftar buku yang tersedia.

4. **Detail Buku:**

   - Admin dapat melihat detail lengkap dari setiap buku.

5. **Admin CRUD Pengguna:**

   - Admin dapat membuat, melihat, memperbarui, dan menghapus data pengguna.

6. **Pencarian Buku dan Pengguna:**
   - Admin dapat melakukan pencarian buku dan pengguna untuk mempermudah manajemen.

## Teknologi yang Digunakan

- **Framework Frontend:** Nuxt.js
- **HTTP Client:** Axios
- **CSS Framework:** Tailwind CSS
- **Database:** Supabase
- **Editor Kode:** Visual Studio Code (VSCode)
- **Pesan Notifikasi:** SweetAlert2

## Tools dan Software Pendukung

- **Version Control:** Git, GitHub
- **Desain UI/UX:** Figma

## Link Deploy

Aplikasi Perpustakaan App dapat diakses secara langsung melalui tautan berikut: [Link Deploy](https://perpus-app.netlify.app)

## Desain UI/UX

Desain antarmuka pengguna (UI/UX) Perpustakaan App telah dirancang menggunakan Figma. Anda dapat melihat desainnya pada tautan berikut: [Link Desain Figma](https://www.figma.com/file/qYsDibylT9xhYKrToZERyQ/Perpustakaan-App?type=design&node-id=2%3A31&mode=dev)

---

Dengan fitur-fitur yang tercantum di atas, Perpustakaan App siap digunakan sebagai MVP dan memberikan pengalaman pengguna yang optimal. Jangan ragu untuk berkontribusi atau memberikan umpan balik untuk proyek ini!

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
