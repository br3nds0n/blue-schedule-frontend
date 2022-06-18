<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">blue registration</a>
      </div>
    </nav>

    <div class="container">

      <form>

          <label>nome</label>
          <input type="text" placeholder="nome">
          <label>e-mail</label>
          <input type="text" placeholder="e-mail">
          <label>telefone</label>
          <input type="text" placeholder="telefone">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>TELEFONE</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="user of users" :key="user.id">

            <td>{{ user.nome }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.telefone }}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>
import User from "./services/users.js";

export default {
  data() {
    return {
      users: []
    }
  },
  mounted(){
    User.read().then(res => {
      this.users = res.data
    })
  }
}

</script>

<style>

</style>
