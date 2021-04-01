<template>
  <div class="space-y-5 pr-3 w-6/12 h-96 overflow-y-auto">
    <div class="card flex items-center">
      <div class="grid grid-cols-3 gap-2">
        <div class="img-holder text-center bg-gray-100 rounded-xl" v-for="(photo, i) in photos" :key="i">
          <img class="rounded-t-xl" :src="photo.img" alt="gallery-image">
          <div class="font-light text-sm text-[#333] my-3">{{ photo.caption }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        {
          img: 'https://i.pinimg.com/originals/b8/f2/bd/b8f2bde505d390c32729299345e8b746.jpg',
          caption: 'This is Lisa Manoban of Blackpink.'
        },
        {
          img: 'https://i.pinimg.com/originals/71/e0/f9/71e0f96f93c26bec95ff33e891061eb2.jpg',
          caption: 'This is Lisa Manoban of Blackpink.'
        },
        {
          img: 'https://www.celebsofworld.com/wp-content/uploads/2021/01/lalisa-manoban-instagram-photo-01-11-2021-0.jpg',
          caption: 'This is Lisa Manoban of Blackpink.'
        },
        {
          img: 'https://i.pinimg.com/originals/af/93/05/af9305848907d9d02bdf9a9324bc929a.jpg',
          caption: 'This is Lisa Manoban of Blackpink.'
        },
        {
          img: 'https://cdn.codipop.com/images/celebrity/content/7925/190710_Blackpink_Lisa_Fashion_-_Incheon_airport-1.jpg',
          caption: 'This is Lisa Manoban of Blackpink.'
        },
        {
          img: 'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2021/01/05/3b7cd128-4f03-11eb-ad83-255e1243236c_image_hires_134953.jpg?itok=EI67Gtej&v=1609825798',
          caption: 'This is Lisa Manoban of Blackpink.'
        }
      ]
    }
  },
}
</script>
