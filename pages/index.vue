<template>
  <div class="h-screen flex items-center justify-center">
    <div class="flex justify-center w-full">
      <div class="w-1/4">
        <form @submit.prevent="">
          <h1 class="font-black text-center text-4xl text-[#76FF03]">contax</h1>
          <div class="font-light text-center text-sm text-[#333]">secure your phonebook and personal information</div>
          <div class="mt-5 space-y-2">
            <div class="space-y-1">
              <span class="text-xs ml-2">Username</span>
              <input type="text" class="w-full px-5 py-3 bg-[#CCFF90] rounded-md focus:ring-2 focus:ring-[#76FF03] focus:outline-none" />
            </div>
            <div class="space-y-1">
              <span class="text-xs ml-2">Password</span>
              <input type="password" class="w-full px-5 py-3 bg-[#CCFF90] rounded-md focus:ring-2 focus:ring-[#76FF03] focus:outline-none" />
            </div>
            <div class="flex items-center justify-between space-x-2">
              <nuxt-link class="w-full px-5 py-3 rounded-md text-center bg-[#333] focus:ring-2 focus:ring-[#35362E] text-white text-sm" to="/">Create Account</nuxt-link>
              <button class="w-full my-2 px-5 py-3 bg-[#64DD17] text-white text-sm rounded-md focus:ring-2 focus:ring-[#76FF03] focus:outline-none">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
