<template>
  <div class="h-screen w-full flex items-center justify-center">
    <div class="flex justify-center w-full">
      <div>
        <form @submit.prevent="login">
          <h1 class="font-black text-center text-5xl text-[#76FF03]">contax</h1>
          <div class="font-light mt-2 text-center text-md text-[#333]">secure your phonebook and personal information</div>
          <div class="mt-5 space-y-1">
            <div class="space-y-1">
              <span class="text-xs ml-2">Username</span>
              <input type="text" class="w-full px-5 py-3 bg-[#CCFF90] rounded-md focus:ring-2 focus:ring-[#76FF03] focus:outline-none" />
            </div>
            <div class="space-y-1">
              <span class="text-xs ml-2">Password</span>
              <input type="password" class="w-full px-5 py-3 bg-[#CCFF90] rounded-md focus:ring-2 focus:ring-[#76FF03] focus:outline-none" />
            </div>
            <div class="flex items-center justify-between space-x-2">
              <nuxt-link class="w-full px-5 py-2 rounded-md text-center bg-[#333] focus:ring-2 focus:ring-[#35362E] text-white text-xs" to="/">Create Account</nuxt-link>
              <button class="w-full my-2 px-5 py-2 bg-[#64DD17] text-white text-xs rounded-md focus:ring-2 focus:ring-[#76FF03] focus:outline-none">Login</button>
            </div>
            <div class="flex justify-center">
              <nuxt-link class="font-light text-xs hover:underline" to="/">Forgot Password</nuxt-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("home")
    }
  },
}
</script>
