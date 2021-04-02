<template>
  <div class="h-screen w-full flex items-center justify-center">
    <div class="flex justify-center w-full">
      <div class="w-1/3">
        <form class="w-full" @submit.prevent="create">
          <div class="font-light mt-2 text-left w-full text-lg text-[#333]">Create Contact</div>
          <div class="mt-5 space-y-1">
            <div class="space-y-1">
              <span class="text-xs ml-2">Name</span>
              <input type="text" class="w-full text-xs px-5 py-3 bg-[#DEFFB7] rounded-md focus:ring-2 focus:ring-[#91E53A] focus:outline-none" v-model="name" />
            </div>
            <div class="space-y-1">
              <span class="text-xs ml-2">Relationship</span>
              <input type="text" class="w-full text-xs px-5 py-3 bg-[#DEFFB7] rounded-md focus:ring-2 focus:ring-[#91E53A] focus:outline-none" v-model="relationship" />
            </div>
            <div class="space-y-1">
              <span class="text-xs ml-2">Phone</span>
              <input type="text" class="w-full text-xs px-5 py-3 bg-[#DEFFB7] rounded-md focus:ring-2 focus:ring-[#91E53A] focus:outline-none" v-model="phone" />
            </div>
            <div class="space-y-1">
              <span class="text-xs ml-2">Description</span>
              <textarea type="text" class="w-full text-xs px-5 py-3 bg-[#DEFFB7] rounded-md focus:ring-2 focus:ring-[#91E53A] focus:outline-none" v-model="description"></textarea>
            </div>
            <div class="flex items-center justify-between space-x-2">
              <nuxt-link class="w-full px-5 py-2 rounded-md text-center bg-[#333] focus:ring-2 focus:ring-[#35362E] text-white text-xs" to="/home">Cancel</nuxt-link>
              <button class="w-full my-2 px-5 py-2 bg-[#4BB140] text-white text-xs rounded-md focus:ring-2 focus:ring-[#91E53A] focus:outline-none">Create</button>
            </div>
          </div>
        </form>
        <FootBar />
      </div>
    </div>
  </div>
</template>

<script>
import FootBar from '~/components/layouts/FootBar'
import { ADD_NEW_CONTACT } from '~/graphql/mutations/index'
export default {
  components: {
    FootBar,
  },
  data() {
    return {
      name: '',
      relationship: '',
      phone: '',
      description: ''
    }
  },
  methods: {
    create() {
      // console.log("NEW USER CREATED")
      const { name, relationship, phone, description } = this.$data

      this.$apollo.mutate({
        mutation: ADD_NEW_CONTACT,
        variables: {
          name: name,
          relationship: relationship,
          phone: phone,
          description: description
        }
      })
    }
  },
}
</script>
