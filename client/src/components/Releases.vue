<template>
  <div class="wrapper">
    <div class="subhead">
      <h1>Releases</h1>
      <button @click="navigateTo({name: 'add-release'})">Add Release</button>
    </div>
    <div class="browse">

      <div class="release" v-for="release in releases"
        :key="release.id">
          <div @click="navigateTo({
            name: 'release',
            params: {
              releaseId: release.id
              }
            })">
            <img :src="release.image" />
          </div>
          <div class="info">
            <h2>{{release.artist}}</h2>
            <h3>{{release.title}}</h3>
            <h4>{{release.label}}</h4>
            <p class="genre">{{release.genre}}</P>
            <p class="format">{{release.format}}</p>
          </div>
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
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // do a request to server for all releases
    this.releases = (await ReleasesService.index()).data
  }
}

</script>


<style scoped>

.subhead {
  padding: 60px 0 20px;
  position: relative;
}

.subhead h1 {
  display: inline-block;
  font-size: 26px;
  padding-left: 40px;
  color: #d4d4d4;
}

.subhead button {
  display: inline-block;
  margin-left: 20px;
}

button {
  height: 30px;
  padding: 0 14px;
  margin: 0;
  font-size: 15px;
  font-family: 'Franklin Gothic';
  letter-spacing: 0.02em;
  background: #22313F;
  color: #d4d4d4;
  border: 0;
  border-radius: 2px;
}

.wrapper {
  margin-top: 100px;
  height: 100vh;
  background: #3b4044;
}

.browse {
  display: flex;
  margin: 10px 30px;
}

.release {
  width: 20%;
  background: white;
  margin: 0 10px 20px;
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
  bottom: 5px;
  left: 5px;
}

.format {
  position: absolute;
  bottom: 5px;
  right: 5px;
}

</style>
