<template>
  <div>
    <input v-model="email" placeholder="enter your email"/>
    <button v-on:click="register()">Register</button>
    <table>
      <tr v-for="email in emails">
        <td>{{email}}</td>
      </tr>
    </table>
  </div>
</template>
<script>

export default {
  data: function(){
    return{
      'email':'',
      'emails':["a@a.ee", "b@b.com"]
    }
  },
  methods:{
    'register': function (){
      this.emails.push(this.email);
    }
  }
}
</script>
