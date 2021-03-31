<template>
  <div class="h-screen overflow-hidden">
    <div class="flex items-center justify-center mt-5">
      <div class="img flex items-center space-x-5">
        <img class="w-32 h-32 rounded-full border-4 border-[#BBF135]" src="http://pm1.narvii.com/6818/069881a78d1dfde990bf0bd3637d0122cd5f4347v2_00.jpg" alt="profile">
        <div class="space-y-1">
          <div class="font-black text-[#333] text-xl uppercase">Lisa Manoban</div>
          <div class="font-medium text-[#333] text-sm">lisamanoban@gmail.com</div>
          <div class="font-light text-[#333] text-xs w-2/3">
            Once you replace negative thoughts with positive ones, you’ll start having positive results.
          </div>
        </div>
      </div>
      <div class="rate">
        <div class="flex justify-end  ">
          <nuxt-link to="/" class="px-5 py-0.5 bg-[#64DD17] text-white text-xs rounded-md focus:ring-2 focus:ring-[#76FF03]">Logout</nuxt-link>
        </div>
        <div class="flex space-x-3 mt-3">
          <div class="font-extrabold text-lg">73 <span class="font-normal text-xs text-[#76FF03] px-3 py-0.5 rounded-full bg-[#333]">Contacts</span></div>
          <div class="font-extrabold text-lg">55 <span class="font-normal text-xs text-[#76FF03] px-3 py-0.5 rounded-full bg-[#333]">Private Files</span></div>
        </div>
      </div>
    </div>
    <HomeContent />
    <FootBar />
  </div>
</template>

<script>
import HomeContent from '~/components/layouts/HomeContent'
import FootBar from '~/components/layouts/FootBar'
export default {
  components: {
    HomeContent,
    FootBar
  },
}
</script>
