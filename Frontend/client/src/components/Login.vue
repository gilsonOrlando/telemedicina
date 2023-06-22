<template>
    <div class="container">
        <div class="triangle"></div>
        <div class="div2">
            <div id="app">
                <div class="login-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="" class="bi bi-person-circle"
                        viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>

                    <h2 style="margin-top: -1px;">Iniciar sesión</h2>
                    <!-- <form @submit.prevent="submitForm" >
              <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                <label for="email">Correo:</label>
                <input type="email" id="email" v-model.trim.lazy="$v.email.$model">
                <v-form>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Correo"
                        required
                    ></v-text-field>
                    <v-text-field
                        name="name"
                        label="Enter your password"
                        hint="At least 8 characters"
                        min="8"
                        :append-icon="value ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (value = !value)"
                        value="Password"
                        :rules="[() => ('The email and password you entered don\'t match')]"
                        error
                        :type="value ? 'password' : 'text'"
                    ></v-text-field>
                </v-form>
                <div class="error" v-if="!$v.email.required">Campo obligatorio.</div>
                <div class="error" v-if="!$v.email.email && $v.email.$error">Correo invalido.</div>
              </div>
              <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" v-model.trim.lazy="$v.password.$model">
                <div class="error" v-if="!$v.password.required">Campo obligatorio.</div>
                <div class="error" v-if="!$v.password.regex && $v.password.$error">La contraseña debe tener entre 8 y 12 caracteres y contener almenos un numero, una letra mayuscula.</div>
              </div>
              <div class="form-group-button">
                <label></label>
                <button type="submit">Ingresar</button>
              </div>
            </form> -->
                    <form @submit.prevent="submitForm">
                        <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required
                            @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                        <v-text-field v-model="password" :error-messages="passwordErrors" :counter="12" label="Password"
                            required @input="$v.password.$touch()" @blur="$v.password.$touch()"></v-text-field>
                        <v-row>
                            <v-col cols="6" lg="6" sm="6" md="4">
                                <v-btn class="pa-2" @click="submitForm">
                                    ingresar
                                </v-btn>
                            </v-col>
                            <v-col cols="6" lg="6" sm="6" md="4">
                                <v-btn class="pa-2" @click="clear">
                                    limpiar
                                </v-btn>
                            </v-col>
                        </v-row>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { required, email, helpers, alphaNum } from 'vuelidate/lib/validators'

export default {
    name: 'App',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    validations: {
        email: {
            required,
            email,
        },
        password: {
            required,
            regex: helpers.regex('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,12}$/)
        }
    },
    computed: {

        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Debe ser un correo valido')
            !this.$v.email.required && errors.push('Correo es requerido.')
            return errors
        },
        passwordErrors() {
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.regex && errors.push('La contraseña debe tener entre 8 y 12 caracteres, un numero y una letra mayuscula.')
            !this.$v.password.required && errors.push('Contraseña es requerida.')
            return errors
        },
    },
    methods: {

        submitForm: function (e) {
            this.$v.$touch();
            if (!this.$v.email.$invalid || !this.$v.password.$invalid) return null;
            const data = {
                email: this.email,
                password: this.password
            };

            this.axios.post('http://127.0.0.1:3000/auth/login', data)
                .then(response => {

                    if (response.data === "") {
                        //   console.log(JSON.stringify(response))
                        alert('Inicio de sesión incorrecto');
                    } else {
                        alert('Inicio de sesión exitoso');
                        //   console.log(JSON.stringify(response))
                    }
                })
                .catch(error => {
                    alert('Error al realizar la solicitud');
                    console.error(error);
                });
        },
        clear() {
            this.$v.$reset()
            this.email = ''
            this.password = ''
        },
    },
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&display=swap');

* {
    font-family: 'Titillium Web', sans-serif;
}

.error {
    color: rgb(153, 1, 1);
    font-size: 12px;
}

#app {
    width: 100%;
    display: grid;
    justify-content: center;
}

.login-container {
    display: grid;
    justify-items: center;
    width: 100%;
}

.form-group {
    width: 100%;
    display: grid;
}

.form-group-button {
    display: grid;
    justify-content: center;
}

.form-group-button label {
    height: 20px;
}

form {
    display: grid;
    align-self: flex-end;
    gap: 20px;
    width: 50vh;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    height: 20px;
    padding: 15px;
    border: none;
    border-radius: 5%;
}

button {
    border-radius: 5%;
    padding: 15px;
    background: linear-gradient(-45deg, #5b84ac, #354a5f);
    color: #fff;
    border: none;
    cursor: pointer;
    width: 10em;

}

button:hover {
    background: linear-gradient(-75deg, #5b84ac, #354a5f);
}

.container {
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
}

.div2 {
    /* background-color: #edf1f2; */
    width: 40vw;
    display: grid;
    justify-items: center;
    align-items: center;
}

.triangle {
    background: linear-gradient(-45deg, #5b84ac, #161e27);
    width: 60vw;
    transform: rotate(0deg);
    height: 100vh;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
}

.triangle::after {
    background-image: url(../assets/bg1.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
    opacity: 0.5;
}

@media(max-width: 1110px) {
    .triangle {
        width: 40vh;
        clip-path: polygon(0% 0%, 100% 0%, 0% 50%);
    }
}

@media(max-width: 860px) {
    .triangle {
        width: 0vh;
    }

    .div2 {
        width: 100vw;
    }
}

@media(max-width: 425px) {
    form {
        margin-left: 20px;
        margin-right: 20px;
    }
}

@media(max-height: 700px) {}
</style>