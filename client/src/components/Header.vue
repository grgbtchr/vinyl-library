<template>

  <header>
    <h2 @click="navigateTo({name: 'root'})">Beatcrates</h2>

    <router-link
      v-if="!$store.state.isUserLoggedIn"
      to="login">
      Sign in/Register
    </router-link>

    <ul>
      <li>Browse</li>
    </ul>
  </header>

</template>


<script>
  export default {
    methods: {
      navigateTo (route) {
        this.$router.push(route)
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
  background: #22313F;
}

h2 {
  display: inline-block;
  position: absolute;
  left: 40px;
  bottom: 20px;
  font-size: 26px;
  font-weight: 800;
  color: #d4d4d4;
  cursor: pointer;
}

a {
  position: absolute;
  color: #d4d4d4;
  right: 40px;
  top: 20px;
}

ul {
  position: absolute;
  right: 40px;
  bottom: 20px;
  color: #d4d4d4;
  font-size: 18px;
  font-weight: 800;
}

</style>
