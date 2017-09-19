<template>

  <ul>
    <li id="head">
      <h2>Recently Viewed</h2>
    </li>
    <li v-for="recent in recents">
      <div class="img">
        <img :src="release.image">
      </div>
      <div class="info">
        <p class="artist">{{release.artist}}</p>
        <p class="title">{{release.title}}</p>
        <p class="label">{{release.label}}</p>
      </div>
    </li>
  </ul>

</template>


<script>
import {mapState} from 'vuex'
import RecentlyViewedService from '@/services/RecentlyViewedService'

export default {
  data () {
    return {
      recents: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.recents = (await RecentlyViewedService.index({
        userId: this.user.id
      })).data
    }
  }
}
</script>


<style scoped>

</style>
