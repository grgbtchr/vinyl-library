<template>

  <ul v-if="isUserLoggedIn">
    <li id="head">
      <h2>Recently Viewed</h2>
    </li>
    <li v-for="recent in recents">

      <div class="info">
        <p class="artist">{{recent.artist}}</p>
        <p class="title">{{recent.title}}</p>
        <!-- <p class="label">{{recent.label}}</p> -->
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
      this.recents = (await RecentlyViewedService.index()).data
    }
  }
}
</script>


<style scoped>

#head {
  color: #2275c9;
  padding: 0;
  padding-bottom: 6px;
}

ul {
  width: 22%;
  margin-right: 5px;
  float: left;
}

ul li {
  padding: 8px 0;
  border-bottom: 1px solid #2275c9;

}

.img {
  position: relative;
  width: 24%;
  padding-bottom: 24%;
  float: left;
}

.img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.info {
  font-size: 15px;
  line-height: 1.18em;
  overflow: hidden;
}

.artist {
  color: #d4d4d4;
}

.title {
  color: #2275c9;
;
}

.label {
  color: #aeb2b2;
}

</style>
