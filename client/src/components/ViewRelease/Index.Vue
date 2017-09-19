<template>

  <div class="release">

    <release-head :release="release"/>

    <div class="releaseimg">
      <img :src="release.image" />
    </div>

    <div class="releaseinfo">
      <format :release="release"/>
      <release-info :release="release"/>
    </div>
  </div>

</template>


<script>
import ReleaseHead from './ReleaseHead'
import Format from './Format'
import ReleaseInfo from './ReleaseInfo'
import ReleasesService from '@/services/ReleasesService'

export default {
  components: {
    ReleaseHead,
    Format,
    ReleaseInfo
  },
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

</style>
