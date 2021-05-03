<template>
  <div class="about">
    <h1>Log in to bank:</h1>
    <input v-model="username" placeholder="enter username"/>
    <input v-model="password" placeholder="enter password"/>
    <button v-on:click="loginToAccount()">LOG IN</button>
    <h1>Create user:</h1>
    <input v-model="username1" placeholder="enter username"/>
    <input v-model="password1" placeholder="enter password"/>
    <button v-on:click="createUser()">Create user</button>
    <h1>Delete user:</h1>
    <input v-model="username2" placeholder="enter username"/>
    <input v-model="password2" placeholder="enter password"/>
    <button v-on:click="deleteUser()">Delete user</button>
  </div>
</template>
<script>

export default {
  data: function () {
    return {
      'username': '',
      'password': '',
      'token': '',
      'username1': '',
      'password1': '',
      'username2': '',
      'password2': '',
    }
  },
  methods: {
    'loginToAccount': function () {
      this.$http.post('api/public/login', {
        username: this.username,
        password: this.password
      })
          .then(response => {
            console.log(response);
            let token = response.data
            localStorage.setItem('user-token', token) // store the token
            this.$http.defaults.headers.common['Authorization'] = "Bearer " + token
          })
          .catch(response => {
            alert("User doesn´t exist")
          })
    },
    'createUser': function () {
      this.$http.post('api/public/newUser', {
        username: this.username1,
        password: this.password1
      })
          .then(response => {
          })
          .catch(response => {
            alert("User already exists")
          })
    },
    'deleteUser': function () {
      this.$http.post('api/public/deleteUser', {
        username: this.username2,
        password: this.password2
      })
          .then(response => {
          })
          .catch(response => {
            alert("User doesn´t exists")
          })
    }
  }
}
</script>