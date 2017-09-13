<template>

  <div>
    <form name="register" autocomplete="off">
      <p>Create an account</p>
      <label>Email</label>
      <input
        type="email"
        name="email"
        v-model="email" />
      <label>Password</label>
      <input
        type="password"
        name="password"
        v-model="password" />
      <div class="error" v-html="error" />
      <button
        @click="register">
        Sign Up
      </button>
      <router-link to="login">Back to login</router-link>
    </form>
  </div>

</template>


<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>


<style scoped>

form {
  width: 380px;
  margin: 180px auto 0;
}

p {
  font-family: 'Franklin Gothic';
  padding-bottom: 10px;
  margin-bottom: 14px;
  border-bottom: 1px solid black;
}

label {
  display: block;
  font-family: 'Franklin Gothic';
  font-size: 15px;
  margin-bottom: 4px;
}

input {
  width: 100%;
  height: 40px;
  padding: 5px;
  font-family: 'Franklin Gothic';
  font-size: 18px;
  margin-bottom: 14px;
  border: 1px solid black;
  border-radius: 2px;
}

input[type=password] {
  margin-bottom: 40px;
}

input:focus {
  outline: 0;
  border-color: #199096;
}

input:placeholder {
  font-family: 'Franklin Gothic';
  font-size: 18px;
}

.error {
  color: red;
}

button {
  width: 100%;
  height: 40px;
  margin: 0;
  font-size: 18px;
  font-family: 'Franklin Gothic';
  letter-spacing: 0.02em;
  background: #22313F;
  color: white;
  border: 0;
  border-radius: 2px;
}

</style>
