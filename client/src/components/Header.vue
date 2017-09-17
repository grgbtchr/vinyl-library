<template>

  <header>
    <h2 @click="navigateTo({name: 'root'})">Beatcrates</h2>

    <router-link
      v-if="!$store.state.isUserLoggedIn"
      to="login">
      Sign in/Register
    </router-link>

    <router-link
      v-if="$store.state.isUserLoggedIn"
      to="/"
      @click.native="logout">
      Sign out
    </router-link>

    <ul>
      <li @click="navigateTo({name: 'releases'})">Browse</li>
    </ul>
  </header>

</template>


<script>
  export default {
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
      }
    }
  }

</script>


<style scoped>

header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  color: #e0e2e2;
  background: black;
  z-index: 99;
}

h2 {
  display: inline-block;
  position: absolute;
  left: 40px;
  bottom: 20px;
  font-size: 26px;
  font-weight: 800;
  cursor: pointer;
}

a {
  position: absolute;
  color: #e0e2e2;
  right: 40px;
  top: 20px;
}

ul {
  position: absolute;
  right: 40px;
  bottom: 20px;
  font-size: 18px;
  font-weight: 800;
}

ul li {
  cursor: pointer;
}

</style>
