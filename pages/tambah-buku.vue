<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="flex">
    <SideBar :isTambahBuku="isTambahBuku" />
    <div class="bg-green-light w-full h-screen overflow-auto">
      <div class="flex justify-center w-full">
        <NavBar menu="Tambah Buku" username="John Doe" />
      </div>
      <div class="w-full p-16">
        <div class="w-full h-full mt-10">
          <div v-if="!isCreating" class="w-full flex justify-end">
            <button
              class="bg-green-dark w-48 text-base font-bold h-12 text-white shadow-lg fixed rounded-md"
              @click="isCreating = !isCreating"
            >
              + Tambah Buku
            </button>
          </div>
          <div v-else class="mt-2 w-full flex justify-center items-center">
            <form class="bg-white shadow-xl w-10/12 pt-4 rounded-lg">
              <div class="flex justify-center items-center gap-4">
                <div>
                  <InputTextareaComponent
                    id="judul"
                    label="Judul Buku"
                    placeholder="Judul Buku"
                    name="judul"
                    cols="30"
                    rows="4"
                  />
                  <InputComponent
                    id="penulis"
                    label="Penulis"
                    name="penulis"
                    type="text"
                    placeholder="Penulis"
                  />
                  <InputComponent
                    id="penerbit"
                    label="Penerbit"
                    name="penerbit"
                    type="text"
                    placeholder="Penerbit"
                  />
                  <InputComponent
                    id="kota"
                    label="Kota Terbit"
                    name="kota"
                    type="text"
                    placeholder="Kota Terbit"
                  />
                </div>
                <div>
                  <InputComponent
                    id="tahun"
                    label="Tahun Terbit"
                    name="tahun"
                    type="number"
                    placeholder="2022"
                  />
                  <InputComponent
                    id="isbn"
                    label="ISBN"
                    name="isbn"
                    type="number"
                    placeholder="123442324"
                  />
                  <InputTextareaComponent
                    id="deskripsi"
                    label="Deskripsi"
                    placeholder="Deskripsi"
                    name="deskripsi"
                    cols="30"
                    rows="4"
                  />
                  <InputComponent
                    id="upload"
                    label="Upload Foto Sampul Buku"
                    name="upload"
                    type="file"
                    placeholder=""
                  />
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
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-col gap-4 mt-14">
          <CardDetail :buku="buku" />
          <CardDetail :buku="buku" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputComponent from '~/components/InputComponent.vue'
import NavBar from '~/components/NavBar.vue'
import SideBar from '~/components/SideBar.vue'
import InputTextareaComponent from '@/components/InputTextareaComponent.vue'
import CardDetail from '~/components/CardDetail.vue'

export default {
  components: {
    SideBar,
    NavBar,
    InputComponent,
    InputTextareaComponent,
    CardDetail,
  },
  data() {
    return {
      isTambahBuku: true,
      isCreating: false,
      buku: {
        urlImage:
          'https://th.bing.com/th/id/OIP.Kj03Qz6N55oaupU7v4TenwHaJ_?pid=ImgDet&rs=1',
        judul: 'Etika Rambu-rambu kehidupan',
        penulis: 'Hiro Tigiman',
        penerbit: 'Kanisius',
        tahun: 2022,
        isbn: 9789792134247,
        deskripsi:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, eius quam quos consectetur earum architecto soluta minima similique error sunt debitis ea quisquam animi assumenda. Harum, mollitia? Officiis, dolor ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa at, minima molestias tempora repellendus labore incidunt, laudantium qui, quas expedita deserunt natus. Deleniti animi corporis architecto harum odit non!. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum illum nam doloremque hic qui est voluptatibus laborum nobis, corporis officia minus sint odit natus incidunt a eum! Aliquam, vitae fugit!',
      },
    }
  },
}
</script>
