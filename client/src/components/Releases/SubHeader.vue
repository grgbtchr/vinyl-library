<template>

  <div class="subhead">
    <h1>Releases</h1>
    <router-link
      tag="button"
      :to="{
        name: 'add-release'
      }">
      + Add Release
    </router-link>
    <input
    type="text"
    placeholder="Search..."
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
  margin-top: 100px;
  padding: 20px 0;
  position: relative;
  background: #1b1b1b;
}

.subhead h1 {
  display: inline-block;
  font-size: 26px;
  padding-left: 40px;
  color: #d4d4d4;
  vertical-align: middle;
}

button {
  height: 30px;
  padding: 0 10px;
  margin: 0 0 0 30px;
  font-size: 15px;
  font-family: 'Franklin Gothic';
  background: none;
  color: #199096;
  border: 1px solid #199096;
  border-radius: 2px;
}

input {
  height: 30px;
  width: 300px;
  padding: 5px;
  margin-right: 40px;
  color: #199096;
  font-family: 'Franklin Gothic';
  font-size: 18px;
  background: none;
  border: 1px solid #199096;
  border-radius: 2px;
  float: right;
}

input:focus {
  outline: 0;
  border: 1px solid #199096;
}

input:placeholder {
  font-family: 'Franklin Gothic';
  font-size: 18px;
}

input:not(:empty) {
  border: 1px solid #199096;
}

input:before {
  content: "\f002";
}

</style>
