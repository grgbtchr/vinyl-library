<template>

  <div class="subhead">
    <h1>Releases</h1>
    <router-link
      tag="button"
      :to="{
        name: 'add-release'
      }">
      Add Release
    </router-link>
    <input
    type="text"
    v-model="search" />

  </div>

</template>


<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'releases'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 500),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}

</script>


<style scoped>

.subhead {
  padding: 20px 0;
  position: relative;
  background: #1b1b1b;
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
  vertical-align: bottom;
}

button {
  height: 30px;
  padding: 0 14px;
  margin: 0;
  font-size: 15px;
  font-family: 'Franklin Gothic';
  letter-spacing: 0.02em;
  background: #e0e2e2;
  color: black;
  border: 0;
  border-radius: 2px;
}

</style>
