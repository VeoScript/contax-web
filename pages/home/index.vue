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
        <div class="flex justify-end space-x-2">
          <nuxt-link to="/">
            <svg class="w-8 h-8 text-[#93DB3B] transition duration-300 hover:text-[#3CAC45]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </nuxt-link>
          <nuxt-link to="/">
            <svg class="w-8 h-8 text-[#93DB3B] transition duration-300 hover:text-[#3CAC45]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          </nuxt-link>
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
