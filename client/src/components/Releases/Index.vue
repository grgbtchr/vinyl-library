<template>
  <div class="wrapper">
    
    <sub-header />
    <thumbnails />

  </div>
</template>


<script>
import Thumbnails from './Thumbnails'
import SubHeader from './SubHeader'

export default {
  components: {
    Thumbnails,
    SubHeader
  }
}

</script>


<style scoped>

.wrapper {
  margin-top: 100px;
}

</style>
