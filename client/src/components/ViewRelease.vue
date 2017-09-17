<template>
  <div class="release">
    <div class="releasehead">
      <h1>
          {{release.artist}}
          <span>{{release.title}}</span>
      </h1>
      <h2>{{release.label}}</h2>
      <p>{{release.genre}}</p>
    </div>

    <div class="releaseimg">
      <img :src="release.image" />
    </div>

    <div class="releaseinfo">
      <div class="format">
        <p>{{release.format}}</p>
      </div>
      <div class="tracklist">
        <ul>
          <li v-for="(value, key) in release.tracks">
            <span>{{key}}.</span> {{value}}
          </li>
        </ul>
      </div>
      <div class="description">
        <p>{{release.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ReleasesService from '@/services/ReleasesService'

export default {
  data () {
    return {
      release: {}
    }
  },
  async mounted () {
    const releaseId = this.$store.state.route.params.releaseId
    this.release = (await ReleasesService.show(releaseId)).data
  }
}

</script>


<style scoped>

.release {
  margin: 120px 40px;
}

.releasehead {
  position: relative;
  color: #d4d4d4;
  background: black;
  padding: 20px;
  margin-bottom: 14px;
}

.releasehead span {
  display: block;
}

.releasehead h1 {
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 8px;
}

.releasehead h2 {
  font-size: 18px;
  text-transform: uppercase;
}

.releasehead p {
  position: absolute;
  bottom: 20px;
  right: 20px;
  text-transform: uppercase;
}

.releaseimg {
  display: inline-block;
  width: 500px;
  height: 500px;
  margin-right: 0.5%;
  float: left;
}

.releaseimg img {
  width: 100%;
}

.releaseinfo {
  display: inline-block;
  margin-left: 0.5%;
  width: 50%;
  float: left;
}

.tracklist {
  color: black;
  padding: 16px;
  margin-top: 14px;
  background: #e0e2e2;
}

.tracklist ul li {
  padding: 8px 0;
  border-bottom: 1px solid #8c8c8c;
}

.tracklist ul li:last-child {
  border-bottom: none;
}

.format {
  color: black;
  padding: 16px;
  background: #e0e2e2;
}

.format p {
  font-size: 22px;
  font-weight: bold;
}

</style>
