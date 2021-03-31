<template>
  <div class="h-screen overflow-hidden">
    <HeadBar />
    <HomeContent />
    <FootBar />
  </div>
</template>

<script>
import HeadBar from '~/components/layouts/HeadBar'
import HomeContent from '~/components/layouts/HomeContent'
import FootBar from '~/components/layouts/FootBar'
export default {
  components: {
    HeadBar,
    HomeContent,
    FootBar
  },
}
</script>
