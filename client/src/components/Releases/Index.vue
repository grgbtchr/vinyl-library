<template>

  <div>
    <sub-header />
    
    <div class="wrapper">

      <recently-viewed />
      <thumbnails />

    </div>
  </div>
</template>


<script>
import Thumbnails from './Thumbnails'
import SubHeader from './SubHeader'
import RecentlyViewed from '@/components/RecentlyViewed'

export default {
  components: {
    Thumbnails,
    SubHeader,
    RecentlyViewed
  }
}

</script>


<style scoped>

.wrapper {
  margin: 20px 40px;
}

</style>
