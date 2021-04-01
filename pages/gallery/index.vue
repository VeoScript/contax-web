<template>
  <div class="h-screen overflow-hidden">
    <HeadBar />
    <div class="flex w-full space-x-16 justify-center mt-10">
      <SideBar />
      <Gallery />
    </div>
    <FootBar />
  </div>
</template>

<script>
import Gallery from '~/components/pages/Gallery'
import HeadBar from '~/components/layouts/HeadBar'
import FootBar from '~/components/layouts/FootBar'
import SideBar from '~/components/layouts/SideBar'
export default {
  components: {
    Gallery,
    HeadBar,
    FootBar,
    SideBar
  },
}
</script>
