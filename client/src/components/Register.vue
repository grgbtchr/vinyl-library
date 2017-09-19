<template>

  <div>
    <div class="wrapper">
      <form name="register" autocomplete="off">
        <p>Create an account</p>
        <label>Email</label>
        <input
          type="email"
          name="email"
          v-model="email"
          required />
        <label>Password</label>
        <input
          type="password"
          name="password"
          v-model="password"
          required />
        <div class="error" v-html="error"></div>
        <button
          type="button"
          @click="register">
          Sign Up
        </button>
      </form>
      <div class="log">
        <a href="#/login">Back to login</a>
      </div>
    </div>
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
        this.$router.push({
          name: 'releases'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>


<style scoped>

.wrapper {
  width: 380px;
  margin: 180px auto 0;
}

p {
  font-family: 'Franklin Gothic';
  color: #d4d4d4;
  padding-bottom: 10px;
  margin-bottom: 14px;
  border-bottom: 1px solid #d4d4d4;
}

label {
  display: block;
  color: #d4d4d4;
  font-family: 'Franklin Gothic';
  font-size: 15px;
  margin-bottom: 4px;
}

input {
  width: 100%;
  height: 40px;
  padding: 5px;
  color: #199096;
  font-family: 'Franklin Gothic';
  font-size: 18px;
  margin-bottom: 14px;
  background: none;
  border: 1px solid #d4d4d4;
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
  background: #d4d4d4;
  color: black;
  border: 0;
  border-radius: 2px;
}

button:hover {
  color: #d4d4d4;
  background: #199096;
}

.log {
  margin-top: 24px;
}

.log a {
  color: #d4d4d4;
}

</style>
