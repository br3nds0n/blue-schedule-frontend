<template>
    <div id="app">
        <div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper blue darken-1">
                    <a href="#!" class="brand-logo">
                        <img src="../assets/logo.jpeg" />
                    </a>
                    <a href="#" class="brand-logo center">Agenda</a>
                </div>
            </nav>
        </div>

        <div class="container">
            <ul>
                <li v-for="(erro, index) of errors" :key="index">
                    <span>
                        campo <b>{{ erro.field }}</b> -
                        {{ erro.defaultMessage }}
                    </span>
                </li>
            </ul>

            <div class="border">
                <div class="form">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="input-field col s12">
                                <input
                                    placeholder="Username"
                                    type="text"
                                    v-model="user.nome"
                                />
                                <label for="name2" class="active">Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input
                                    id="email"
                                    placeholder="exemple@domainname.com"
                                    type="email"
                                    v-model="user.email"
                                />
                                <label for="email" class="active">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input
                                    placeholder="(00) 00000-0000"
                                    v-maska="'(##) #####-####'"
                                    v-model="user.telefone"
                                    type="tel"
                                />
                                <label for="tel" class="active">Telefone</label>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <button
                                        class="btn cyan waves-effect waves-light center"
                                        type="submit"
                                        name="action"
                                    >
                                        Submit
                                        <i class="material-icons center right"
                                            >send</i
                                        >
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="table">
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
                                    @click="update(user)"
                                    class="waves-effect btn-small blue darken-1"
                                >
                                    <i class="material-icons">create</i>
                                </button>
                                <button
                                    @click="delet(user)"
                                    class="waves-effect btn-small red darken-1"
                                >
                                    <i class="material-icons"
                                        >delete</i
                                    >
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import User from '../services/users.js';
import { maska } from 'maska';

export default {
    directives: { maska },
    data() {
        return {
            user: {
                nome: '',
                email: '',
                telefone: '',
            },
            users: [],
            errors: [],
        };
    },

    mounted() {
        this.read();
    },

    methods: {
        create() {
            if (!this.user.id) {
                User.create(this.user)
                    .then(() => {
                        this.user = {};
                        this.$swal('Sucesso', 'Usuário cadastrado!', 'success');
                        this.read();
                        this.errors = {};
                    })
                    .catch((e) => {
                        this.$swal('Oops...', 'Algum erro aconteceu!', 'error');
                        this.errors = e.response.data.errors;
                    });
            } else {
                User.update(this.user)
                    .then(() => {
                        this.user = {};
                        this.$swal('Sucesso', 'Usuário atualizado!', 'success');
                        this.read();
                        this.errors = {};
                    })
                    .catch((e) => {
                        this.$swal('Oops...', 'Algum erro aconteceu!', 'error');
                        this.errors = e.response.data.errors;
                    });
            }
        },

        read() {
            User.read().then((res) => {
                this.users = res.data;
            });
        },

        update(user) {
            this.user = user;
        },

        delet(user) {
            this.$swal({
                title: 'Tem certeza?',
                text: 'Você não poderá reverter isso!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, exclua!',
            }).then((result) => {
                if (result.isConfirmed) {
                    User.delete(user).then(() => {
                        this.$swal(
                            'Sucesso',
                            `Usuário '${user.nome}' deletado!`,
                            'success'
                        );
                        this.read();
                        this.errors = {};
                    });
                }
            });
        },
    },
};
</script>

<style>
img {
    max-width: 64px;
}

span {
    color: Tomato;
}

.form {
    width: 45%;
    margin-left: auto;
    margin-right: auto;
}
</style>
