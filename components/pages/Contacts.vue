<template>
  <div class="space-y-5 pr-3 w-6/12 h-96 overflow-y-auto">
    <div class="card rounded-full bg-gray-100 py-5 px-6 space-x-5 flex items-center" v-for="(contact, i) in contacts" :key="i">
      <div class="card-content">
        <!-- <img class="w-20 h-20 ring-4 ring-[#91E53A] rounded-full" :src="`http://localhost:1337${contact.avatar.url}`" alt="avatar"> -->
        <img class="w-20 h-20 ring-4 ring-[#91E53A] rounded-full" src="https://qph.fs.quoracdn.net/main-qimg-fcc28dcdfde020a2b3db2291502e3e9a" alt="avatar">
      </div>
      <div class="card-content capitalize font-bold text-[#333] text-sm w-40">
        {{ contact.name }}
        <div class="font-light text-xs mt-0.5">{{ contact.relationship }}</div>
      </div>
      <div class="card-content text-xs text-[#333] w-52">
        {{ contact.description }}
      </div>
      <div class="card-content font-bold text-sm text-[#333]">
        {{ contact.phone }}
      </div>
    </div>
  </div>
</template>

<script>
import { GET_ALL_CONTACTS } from '~/graphql/queries/index'
import { GET_ALL_CONTACTS_SUBSCRIPTION } from '~/graphql/subscriptions/index'
export default {
  data() {
    return {
      contacts: [],
    }
  },
  apollo: {
    contacts: {
      prefetch: true,
      query: GET_ALL_CONTACTS
    }
  }
  // apollo: {
  //   contacts: {
  //     prefetch: true,
  //     query: GET_ALL_CONTACTS,
  //     subscribeToMore: [
  //       {
  //         document: GET_ALL_CONTACTS_SUBSCRIPTION,
  //         updateQuery: (previousResult, { subscriptionData }) => {
  //           if(previousResult) {
  //             return {
  //               contacts: [
  //                 ...subscriptionData.data.contacts
  //               ]
  //             }
  //           }
  //         }
  //       }
  //     ]
  //   }
  // }
  // apollo: {
  //   contacts: {
  //     subscribeToMore: {
  //       document: GET_ALL_CONTACTS_SUBSCRIPTION,
  //       variables() {
  //         return {
  //           con_id: this.$route.params.id
  //         }
  //       },
  //       updateQuery(previousResult, { subscriptionData }) {
  //         if (previousResult) {
  //           return {
  //             contacts: [
  //               ...subscriptionData.data.contacts
  //             ]
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
}
</script>
