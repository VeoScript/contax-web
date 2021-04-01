<template>
  <div class="h-screen overflow-hidden">
    <HeadBar />
    <div class="flex w-full space-x-16 justify-center mt-10">
      <SideBar />
      <Contacts />
    </div>
    <FootBar />
  </div>
</template>

<script>
import HeadBar from '~/components/layouts/HeadBar'
import Contacts from '~/components/layouts/Contacts'
import FootBar from '~/components/layouts/FootBar'
import SideBar from '~/components/layouts/SideBar'
export default {
  components: {
    HeadBar,
    Contacts,
    FootBar,
    SideBar
  },
}
</script>
