<template>
    <div id="app">
        <div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper blue darken-1">
                    <a href="#!" class="brand-logo">
                        <img src="../assets/logo.jpeg" />
                    </a>
                </div>
            </nav>
        </div>

        <div class="container">
            <div class="formulario">
                <form @submit.prevent="create">
                    <input type="text" placeholder="nome" v-model="user.nome" />
                    <label>nome</label>

                    <input
                        type="email"
                        placeholder="e-mail"
                        v-model="user.email"
                    />
                    <label for="email_inline">e-mail</label>

                    <input
                        type="text"
                        placeholder="telefone"
                        v-model="user.telefone"
                    />
                    <label>telefone</label>

                    <div class="submit-button">
                        <button class="waves-effect waves-light btn-small">
                            Salvar<i class="material-icons left">save</i>
                        </button>
                    </div>
                </form>
            </div>
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
                            <button
                                class="waves-effect btn-small blue darken-1"
                            >
                                <i class="material-icons">create</i>
                            </button>
                            <button class="waves-effect btn-small red darken-1">
                                <i class="material-icons">delete_sweep</i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import User from '../services/users.js';

export default {
    data() {
        return {
            user: {
                nome: '',
                email: '',
                telefone: '',
            },
            users: [],
        };
    },

    mounted() {
        User.read().then((res) => {
            this.users = res.data;
        });
    },

    methods: {
        create() {
            // eslint-disable-next-line no-unused-vars
            User.create(this.user).then((res) => {
                alert('usuário registrado');
            });
        },
    },
};
</script>

<style>
.submit-button {
    margin-top: 30px;
    margin-bottom: 40px;
}

img {
    max-width: 64px;
}
</style>
