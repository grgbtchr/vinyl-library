<template>

  <header>
    <router-link
      tag="h2"
      :to="{
        name: 'releases'
      }">
      crates
    </router-link>

    <div class="account">

      <router-link
        id="myAccount"
        v-if="$store.state.isUserLoggedIn"
        to="account">
        My Account
      </router-link>

      <router-link
        v-if="!$store.state.isUserLoggedIn"
        to="login">
        Sign in/Register
      </router-link>

      <router-link
        v-if="$store.state.isUserLoggedIn"
        to="releases"
        @click.native="logout">
        Sign out
      </router-link>

    </div>

    <ul>
      <router-link
        tag="li"
        :to="{
          name: 'releases'
        }">
        Browse
      </router-link>
    </ul>
  </header>

</template>


<script>
  export default {
    methods: {
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
  color: #d4d4d4;
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

.account {
  position: absolute;
  color: #e0e2e2;
  right: 40px;
  top: 20px;
}

.account a {
  font-size: 15px;
  color: #d4d4d4;
  margin-left: 10px;
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
