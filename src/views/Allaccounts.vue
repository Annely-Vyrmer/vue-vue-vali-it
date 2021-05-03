<template>
  <div align="left">
    <h1>List of all accounts</h1>
<!--    {{ accounts }}    Kui ei taha üleval kõiki kontosid arrayna kuvada -->
    <table border="1">
      <tr>
        <th>Account number</th>
        <th>Account owner</th>
        <th>Balance</th>
        <th>Locked/unlocked status</th>
      </tr>
      <tr v-for="allAccounts in accounts">
        <td>{{ allAccounts.accountNo }}</td>
        <td>{{ allAccounts.accountName }}</td>
        <td>{{ allAccounts.balance }}</td>
        <td>{{ allAccounts.locked }}</td>
      </tr>
    </table>
  </div>
</template>
<script>

export default {
  data: function () {
    return {
      accounts: []
    }
  },
  mounted() {
    this.$http.get("/api/allAccounts")
        .then(response => this.accounts = response.data)
  }
}

</script>
