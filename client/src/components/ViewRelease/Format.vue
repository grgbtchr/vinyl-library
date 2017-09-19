<template>

  <div class="format">
    <p>{{release.format}}</p>
    <button
      id="favourite"
      v-if="!bookmark"
      @click="addToWishlist">
      Favourite
    </button>
    <button
      id="favourite"
      v-if="bookmark"
      @click="removeFromWishlist">
      Unfavourite
    </button>
    <router-link
      tag="button"
      :to="{
        name: 'edit-release',
        params () {
          return {
            releaseId: release.id
          }
        }
      }">
      Edit
    </router-link>
  </div>

</template>


<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'release'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async release () {
      if (!this.isUserLoggedIn) {
        return
      }

      try {
        const bookmarks = (await BookmarksService.index({
          releaseId: this.release.id,
          userId: this.user.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async addToWishlist () {
      try {
        this.bookmark = (await BookmarksService.post({
          releaseId: this.release.id,
          userId: this.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async removeFromWishlist () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>


<style scoped>

.format {
  position: relative;
  color: black;
  padding: 16px;
  background: #e0e2e2;
}

.format p {
  display: inline-block;
  font-size: 28px;
  font-weight: bold;
}

.format button {
  position: absolute;
  height: 28px;
  right: 16px;
  padding: 0 14px;
  font-size: 15px;
  font-family: 'Franklin Gothic';
  letter-spacing: 0.02em;
  background: black;
  color: #e0e2e2;
  border: 0;
  border-radius: 2px;
}

#favourite {
  right: 80px;
}

</style>
