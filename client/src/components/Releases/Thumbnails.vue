<template>

  <div class="browse">
    <div class="release" v-for="release in releases"
      :key="release.id">
        <router-link
          tag="div"
          :to="{
            name: 'release',
            params: {
              releaseId: release.id
            }
          }">
          <img :src="release.image" />
        </router-link>
        <div class="info">
          <h2>{{release.artist}}</h2>
          <h3>{{release.title}}</h3>
          <h4>{{release.label}}</h4>
          <p class="genre">{{release.genre}}</P>
          <p class="format">{{release.format}}</p>
        </div>
      </div>
    </div>

</template>


<script>
import ReleasesService from '@/services/ReleasesService'

export default {
  data () {
    return {
      releases: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.releases = (await ReleasesService.index(value)).data
      }
    }
  },
  async mounted () {
    // do a request to server for all releases
    this.releases = (await ReleasesService.index()).data
  }
}

</script>


<style scoped>

.browse {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 30px;
}

.release {
  width: 20%;
  display: inline-block;
  background: white;
  margin: 0 10px 20px;
  color: black;
  background: #e0e2e2;
}

.release .info {
  padding: 10px;
  height: 150px;
  position: relative;
}

.release img {
  width: 100%;
}

.release h2 {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.02em;
  line-height: 20px;
}

.release h3 {
  font-size: 18px;
  margin-top: 4px;
}

.release h4 {
  text-transform: uppercase;
  margin-top: 6px;
}

.genre {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

.format {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

</style>
