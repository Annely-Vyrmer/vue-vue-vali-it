<template>
  <div>
    <h1>Get balance</h1>
    <input v-model="accountNumber" placeholder="Enter account number"/>
    <button v-on:click="getAccountBalance()">SUBMIT</button>
    {{ balance }}
    <h1>Create account</h1>
    <input v-model="accountNumber0" placeholder="Enter account number"/>
    <input v-model="accountName" placeholder="Enter account owner name"/>
    <input v-model="initialBalance" placeholder="Enter sum"/>
    <button v-on:click="createAccount()">SUBMIT</button>
    {{ create }}
    <h1>Lock & unlock account</h1>
    <input v-model="accountNumber9" placeholder="Enter account number"/>
    <button v-on:click="lockAccount()">Lock account</button>
    <button v-on:click="unlockAccount()">Unlock account</button>
    {{ lock }}
    {{ unlock }}
    <h1>Withdraw money</h1>
    <input v-model="accountNumber1" placeholder="Enter account number"/>
    <input v-model="withdrawSum" placeholder="Enter withdraw amount"/>
    <button v-on:click="withdrawMoney()">SUBMIT</button>
    {{ withdraw }}
    <h1>Deposit money</h1>
    <input v-model="accountNumber2" placeholder="Enter account number"/>
    <input v-model="depositSum" placeholder="Enter deposit amount"/>
    <button v-on:click="depositMoney()">SUBMIT</button>
    {{ deposit }}
    <h1>Transfer money</h1>
    <input v-model="accountNumber3" placeholder="FROM account"/>
    <input v-model="accountNumber4" placeholder="TO account"/>
    <input v-model="transferSum" placeholder="Transfer amount"/>
    <button v-on:click="transferMoney()">SUBMIT</button>
    {{ transfer }}
    <h1>List of all accounts</h1>
    {{ accounts }}    <!-- Kui ei taha kuvada arrayna pealkirja alla, siis võta see välja -->
    <table>
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
        <td>{{ allAccounts }}</td>
      </tr>
    </table>
  </div>
</template>
<script>

export default {
  data: function () {
    return {
      'accountNumber': '',
      'balance': '',
      'accountNumber0': '',
      'accountName': '',
      'initialBalance': '',
      'create': '',
      'accountNumber9': '',
      'lock': '',
      'unlock': '',
      'accountNumber1': '',
      'withdrawSum': '',
      'withdraw': '',
      'accountNumber2': '',
      'depositSum': '',
      'deposit': '',
      'accountNumber3': '',
      'accountNumber4': '',
      'transferSum': '',
      'transfer': '',
      accounts: []
    }
  },
  methods: {
    'getAccountBalance': function () {
      this.$http.get('/api/getBalance4/' + this.accountNumber)
          .then(response => {
            console.log(response);
            this.balance = response.data
          })
          .catch(response => {
            alert("Account doesn´t exist")
          })
    },
    'createAccount': function () {
      this.$http.post('/api/createAccount4/' + this.accountNumber0 + "/" + this.accountName + "/" + this.initialBalance)
          .then(response => {
            console.log(response);
            this.create = response.data
          })
          .catch(response => {
            alert("Account doesn´t exist")
          })
    },
    'lockAccount': function () {
      this.$http.put('/api/lock4/' + this.accountNumber9)
          .then(response => {
            console.log(response);
            this.lock = "Account locked"
          })
          .catch(response => {
            alert("Account doesn´t exist")
          })
    },
    'unlockAccount': function () {
      this.$http.put('/api/unlock4/' + this.accountNumber9)
          .then(response => {
            console.log(response);
            this.unlock = "Account unlocked"
          })
          .catch(response => {
            alert("Account doesn´t exist")
          })
    },
    'withdrawMoney': function () {
      this.$http.get('/api/withdrawMoney4/' + this.accountNumber1 + "/" + this.withdrawSum)
          .then(response => {
            console.log(response);
            this.withdraw = response.data
          })
          .catch(response => {
            alert("Account doesn´t exist")
          })
    },
    'depositMoney': function () {
      this.$http.put('/api/depositMoney4/' + this.accountNumber2 + "/" + this.depositSum)
          .then(response => {
            console.log(response);
            this.deposit = response.data
          })
          .catch(response => {
            alert("Account doesn´t exist")
          })
    },
    'transferMoney': function () {
      this.$http.get('/api/transferMoney4/' + this.accountNumber3 + "/" + this.accountNumber4 + "/" + this.transferSum)
          .then(response => {
            console.log(response);
            this.transfer = response.data
          })
          .catch(response => {
            alert("Account doesn´t exist")
          })
    },
  },
  mounted() {
    this.$http.get("/api/allAccounts")
        .then(response => this.accounts = response.data)
  }
}

</script>
