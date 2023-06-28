<template>
    <section>
        <v-row class="container">
            <v-col class="triangle"></v-col>
            <v-col class="column">
                <!-- <div class="mx-4">
                    <h2 style="margin-top: -1px;">Iniciar sesión</h2>
                </div>
                <div class="mx-4">
                    
                    <v-text-field v-model="form_login.email" placeholder=" email" :error-messages="form_login_email_errors"
                        @input="$v.form_login.email.$touch()" @blur="$v.form_login.email.$touch()"></v-text-field>


                    <v-text-field v-model="form_login.password" placeholder="password"
                        :error-messages="form_login_password_errors" :counter="12" @input="$v.form_login.password.$touch()" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'"
                        @click:append="show = !show" @blur="$v.form_login.password.$touch()"></v-text-field>
                </div>
                <div class="mx-4" style="margin-top: 2em;">

                    <v-btn class="pa-2" @click="submitForm">
                        ingresar
                    </v-btn>
                    <v-btn class="pa-2" @click="clear">
                        limpiar
                    </v-btn>
                </div> -->

                <v-card class="card" max-width="500">
                    <v-card-title>
                        <center>
                            <h2 style="margin-top: -1px;">Iniciar sesión</h2>
                        </center>
                    </v-card-title>
                    <v-card-text>
                        <br />
                        <label>Correo</label>
                        <v-text-field v-model="form_login.email" placeholder=" ingrese su correo"
                            :error-messages="form_login_email_errors" class="text--error" @input="$v.form_login.email.$touch()"
                            @blur="$v.form_login.email.$touch()"></v-text-field>
                        <label>Contraseña</label>
                        <v-text-field v-model="form_login.password" placeholder="ingrese su contraseña"
                            :error-messages="form_login_password_errors" :counter="12" class="text--error"
                            @input="$v.form_login.password.$touch()" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'" @click:append="show = !show"
                            @blur="$v.form_login.password.$touch()"></v-text-field>
                        <br />
                        <center>
                            <v-btn class="pa-2" @click="submitForm">
                                ingresar
                            </v-btn>
                            <v-btn class="pa-2" @click="clear">
                                limpiar
                            </v-btn>
                            <br />
                            <br />
                            <label for="">¿Todavía no estas registrado?
                                <a href="#">¡Inscribirse!</a> </label><br />
                        </center>
                    </v-card-text>
                </v-card>

            </v-col>
            <!-- </form> -->
        </v-row>
    </section>
</template>
  
<script>
import { required, email, helpers } from 'vuelidate/lib/validators'

export default {
    name: 'App',
    data() {
        return {
            show: false,
            form_login: {
                email: null,
                password: null
            },
        }
    },
    validations: {
        form_login: {
            email: {
                required,
                email
            },
            password: {
                required,
                regex: helpers.regex('password', /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/)
            }
        }
    },
    computed: {

        form_login_email_errors() {
            const errors = []
            if (!this.$v.form_login.email.$dirty) return errors
            !this.$v.form_login.email.email && errors.push('Debe ser un correo valido')
            !this.$v.form_login.email.required && errors.push('Correo es requerido.')
            return errors
        },
        form_login_password_errors() {
            const errors = []
            if (!this.$v.form_login.password.$dirty) return errors
            !this.$v.form_login.password.regex && errors.push('La contraseña debe tener entre 8 y 12 caracteres y contener almenos un numero, una letra mayuscula.')
            !this.$v.form_login.password.required && errors.push('Contraseña es requerida.')
            console.log(errors)
            return errors
        },
    },
    methods: {
        submitForm: function () {
            this.$v.$touch();
            if (this.$v.form_login.$invalid) return null;

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
            //resetear el formulario
            this.$v.$reset()
            this.form_login.email = ''
            this.form_login.password = ''
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
    display: grid;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.login-container {
    width: 100%;
    display: grid;
    justify-content: center;
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
    grid-template-columns: 1fr 1fr;

    height: 100vh;
    padding: 0;
    margin: 0;
}

.div2 {
    /* background-color: #edf1f2; */
    display: grid;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.triangle {
    background: linear-gradient(-45deg, #5b84ac, #161e27);
    width: 60vw;
    margin: 0;
    padding: 0;
    transform: rotate(0deg);
    height: 100vh;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
}

.triangle::after {
    background-image: url(../assets/bg1.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    content: "";
    color: #161e27;
    font-size: larger;
    position: fixed;
    width: 100%;
    height: 100%;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
    opacity: 0.5;
}

.card {
    width: 400px;
    justify-self: center;
    align-self: center;
}

.column {
        display: grid;
        width: 40vw;
        grid-template-columns: 1fr;
        justify-self: center;
        align-self: center;
    } 

.pa-2{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
}

@media(max-width: 1110px) {
    .triangle {
        width: 40vh;
        /* clip-path: polygon(0% 0%, 100% 0%, 0% 50%); */
    }
    .column {
        width: auto;
    } 

}

@media(max-width: 700px) {
    form {
        margin-left: 20px;
        margin-right: 20px;
    }
    .triangle {
        display: none;
    }
    
    .container {
        grid-template-columns: 1fr;
    }
    .column {
        width: auto;
    } 
    .card {
        width:auto;
    }
    
}

</style>