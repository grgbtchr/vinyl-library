<template>

  <ul>
    <li id="head">
      <h2>Wishlist</h2>
    </li>
    <li v-for="bookmark in bookmarks">
      <div class="img">
        <img :src="bookmark.image">
      </div>
      <div class="info">
        <p class="artist">{{bookmark.artist}}</p>
        <p class="title">{{bookmark.title}}</p>
        <p class="label">{{bookmark.label}}</p>
      </div>
    </li>
  </ul>

</template>


<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  data () {
    return {
      bookmarks: []
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
      this.bookmarks = (await BookmarksService.index()).data
    }
  }
}
</script>


<style scoped>

ul {
  width: 24%;
}

ul li {
  background: black;
  margin-bottom: 3px;
}

#head {
  padding: 8px;
}

h2 {
  font-size: 18px;
  font-weight: bold;
  color: #d4d4d4;
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
  margin-left: 24%;
  padding: 8px 10px;
  font-size: 15px;
  line-height: 1.18em;
  overflow: hidden;
}

.artist {
  color: #d4d4d4;
}

.title {
  color: #199096;
}

.label {
  color: #aeb2b2;
}

</style>
