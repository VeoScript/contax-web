<template>
  <div class="space-y-5 pr-3 h-96 overflow-y-auto">
    <div class="card rounded-full bg-gray-100 py-5 px-6 space-x-5 flex items-center" v-for="(contact, i) in contacts" :key="i">
      <div class="card-content">
        <img class="w-20 h-20 ring-4 ring-[#91E53A] rounded-full" :src="contact.avatar" alt="avatar">
      </div>
      <div class="card-con`tent capitalize font-bold text-[#333] text-sm w-40">
        {{ contact.name }}
      </div>
      <div class="card-content text-xs text-[#333] w-52">
        {{ contact.bio }}
      </div>
      <div class="card-content font-bold text-sm text-[#333]">
        {{ contact.phone }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contacts: [
        {
          avatar: 'https://qph.fs.quoracdn.net/main-qimg-fcc28dcdfde020a2b3db2291502e3e9a',
          name: 'Roseannne Park',
          bio: 'Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.',
          phone: '09974378498'
        },
        {
          avatar: 'https://i.quotev.com/img/q/u/20/5/18/3c74qt3gxs.jpg',
          name: 'Jennie Kim',
          bio: 'Keep your face to the sunshine and you cannot see a shadow.',
          phone: '09063392301'
        },
        {
          avatar: 'https://pbs.twimg.com/profile_images/1345998804508499968/ZLOCycG7_400x400.jpg',
          name: 'Kim Jisoo',
          bio: 'When you are enthusiastic about what you do, you feel this positive energy. It’s very simple.',
          phone: '09053419340'
        },
        {
          avatar: 'https://pbs.twimg.com/profile_images/1294191645999669248/7XEiJRTP_400x400.jpg',
          name: 'Jerome Villaruel',
          bio: 'In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make apositive impact.',
          phone: '09753286466'
        },
        {
          avatar: 'https://scontent.fceb1-2.fna.fbcdn.net/v/t1.6435-9/117375121_159258419103299_4745034920947823639_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeFBQ2oH0jE-6Shl-M_rDGbsb44ZMDUxdSBvjhkwNTF1IFvxvIuwpPiQCezlz207pcvx1yxgiOYNiDOZWj7jOV3b&_nc_ohc=phEOFj0QdEoAX9tK_3s&_nc_ht=scontent.fceb1-2.fna&oh=cde6eb79d7e116e0aefb586b3b05d5f3&oe=608988AD',
          name: 'Richlyn Hermosilla',
          bio: 'The only time you fail is when you fall down and stay down.',
          phone: '095035549093'
        },
        {
          avatar: 'https://pbs.twimg.com/profile_images/1347581305001701376/dJw9KHqd_400x400.jpg',
          name: 'Gecelle Ann Cabodbod',
          bio: 'You’re braver than you believe, and stronger than you seem, and smarter than you think.',
          phone: '09103417650'
        }
      ]
    }
  }
}
</script>
