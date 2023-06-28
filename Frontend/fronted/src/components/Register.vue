<template>
    <section>
        <v-row class="container">
            <v-col class="triangle"></v-col>
            <v-col class="column">
                <v-card class="card">
                    <v-card-title>
                        <center>
                            <h2 style="margin-top: -1px;">Registrarse</h2>
                        </center>
                    </v-card-title>
                    <v-card-text>
                        <br />
                        <v-row>
                            <v-col cols="12" md="6">
                                <label>Foto de perfil</label>
                                <v-file-input v-model="form_register.foto" accept="image/*" placeholder="Subir foto de perfil" prepend-icon="mdi-camera" outlined dense chips
                                :error-messages="form_register_foto_errors" class="text--error"
                                @input="$v.form_register.foto.$touch()"
                                @blur="$v.form_register.foto.$touch()"></v-file-input>

                                <label>Nombres</label>
                                <v-text-field placeholder="Juan Ignacio"
                                :error-messages="form_register_nombres_errors" class="text--error"
                                @input="$v.form_register.nombres.$touch()"
                                @blur="$v.form_register.nombres.$touch()"></v-text-field>

                                <label>Apellidos</label>
                                <v-text-field placeholder="Perez Perez"
                                :error-messages="form_register_apellidos_errors" class="text--error"
                                @input="$v.form_register.apellidos.$touch()"
                                @blur="$v.form_register.apellidos.$touch()"></v-text-field>

                                <label>Cédula de Identidad</label>
                                <v-text-field placeholder="0987654321"
                                :error-messages="form_register_cedula_errors" class="text--error"
                                @input="$v.form_register.cedula.$touch()"
                                @blur="$v.form_register.cedula.$touch()"></v-text-field>

                                <label>Fecha de Nacimiento</label>
                                <v-text-field placeholder="01/01/2000"
                                :error-messages="form_register_fecha_nacimiento_errors" class="text--error"
                                @input="$v.form_register.fecha_nacimiento.$touch()"
                                @blur="$v.form_register.fecha_nacimiento.$touch()"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <label>Sexo</label>
                                <select class="input100 text--error" v-model="form_register.sexo" :items="items" placeholder="Seleccione..." 
                                :error-messages="form_register_sexo_errors"
                                @input="$v.form_register.sexo.$touch()" 
                                @blur="$v.form_register.sexo.$touch()">
                                    <option value="">Seleccione...</option>
                                    <option value="m">Hombre</option>
                                    <option value="f">Mujer</option>
                                    <option value="u">Término preferido no listado</option>
                                    <option value="u">Prefiero no Contestar</option>
                                </select>
                                
                                <label>Correo</label>
                                <v-text-field v-model="form_register.email" placeholder=" ingrese su correo"
                                    :error-messages="form_login_email_errors" class="text--error"
                                    @input="$v.form_register.email.$touch()"
                                    @blur="$v.form_register.email.$touch()"></v-text-field>

                                <label>Contraseña</label>
                                <v-text-field v-model="form_register.password" placeholder="ingrese su contraseña"
                                    :error-messages="form_login_password_errors" :counter="12" class="text--error"
                                    @input="$v.register.password.$touch()" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show ? 'text' : 'password'" @click:append="show = !show"
                                    @blur="$v.form_register.password.$touch()"></v-text-field>

                                <label>Confirmar Contraseña</label>
                                <v-text-field v-model="form_register.password" placeholder="ingrese su contraseña"
                                    :error-messages="form_login_password_errors" :counter="12" class="text--error"
                                    @input="$v.register.password.$touch()" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show ? 'text' : 'password'" @click:append="show = !show"
                                    @blur="$v.form_register.password.$touch()"></v-text-field>
                            </v-col>
                        </v-row>
                        <center>
                            <v-btn class="pa-2" @click="submitForm">
                                registrar
                            </v-btn>
                            <v-btn class="pa-2" @click="clear">
                                limpiar
                            </v-btn>
                            <br /><br />
                            <label for="">¿Ya estas registrado?
                                <a href="#">¡Inscribirse!</a> </label>
                        </center>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import { required, email, helpers, sameAs } from 'vuelidate/lib/validators'

export default {
    name: 'App',
    data() {
        return {
            show: false,
            form_register: {
                foto: '',
                nombres: '',
                apellidos: '',
                cedula: '',
                fecha_nacimiento: '',
                sexo: '',
                correo: '',
                contrasena: '',
                confirmar_contrasena: ''
            },
        }
    },
    validations: {
        form_register: {
            foto: {
                required
            },
            nombres: {
                required
            },
            apellidos: {
                required
            },
            cedula: {
                required
            },
            fecha_nacimiento: {
                required
            },
            sexo: {
                required
            },
            email: {
                required,
                email
            },
            password: {
                required,
                regex: helpers.regex('password', /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/)
            },
            confirmar_contrasena: {
                required,
                sameAsPassword: sameAs('password')
            }
        }
    },
    computed: {
        form_register_foto_errors() {
            const errors = []
            if (!this.$v.form_register.foto.$dirty) return errors
            !this.$v.form_register.foto.required && errors.push('Foto de perfil es requerida.')
            return errors
        },
        form_register_nombres_errors() {
            const errors = []
            if (!this.$v.form_register.nombres.$dirty) return errors
            !this.$v.form_register.nombres.required && errors.push('Nombres son requeridos.')
            return errors
        },
        form_register_apellidos_errors() {
            const errors = []
            if (!this.$v.form_register.apellidos.$dirty) return errors
            !this.$v.form_register.apellidos.required && errors.push('Apellidos son requeridos.')
            return errors
        },
        form_register_cedula_errors() {
            const errors = []
            if (!this.$v.form_register.cedula.$dirty) return errors
            !this.$v.form_register.cedula.required && errors.push('Cedula es requerida.')
            return errors
        },
        form_register_fecha_nacimiento_errors() {
            const errors = []
            if (!this.$v.form_register.fecha_nacimiento.$dirty) return errors
            !this.$v.form_register.fecha_nacimiento.required && errors.push('Fecha de nacimiento es requerida.')
            return errors
        },
        form_register_sexo_errors() {
            const errors = []
            if (!this.$v.form_register.sexo.$dirty) return errors
            !this.$v.form_register.sexo.required && errors.push('Sexo es requerido.')
            return errors
        },
        form_register_email_errors() {
            const errors = []
            if (!this.$v.form_register.email.$dirty) return errors
            !this.$v.form_register.email.email && errors.push('Debe ser un correo valido')
            !this.$v.form_register.email.required && errors.push('Correo es requerido.')
            return errors
        },
        form_register_password_errors() {
            const errors = []
            if (!this.$v.form_register.password.$dirty) return errors
            !this.$v.form_register.password.regex && errors.push('La contraseña debe tener entre 8 y 12 caracteres y contener almenos un numero, una letra mayuscula.')
            !this.$v.form_register.password.required && errors.push('Contraseña es requerida.')
            console.log(errors)
            return errors
        },
        form_register_confirmar_contrasena_errors() {
            const errors = []
            if (!this.$v.form_register.confirmar_contrasena.$dirty) return errors
            !this.$v.form_register.confirmar_contrasena.sameAsPassword && errors.push('Las contraseñas no coinciden.')
            !this.$v.form_register.confirmar_contrasena.required && errors.push('Confirmar contraseña es requerida.')
            return errors
        }
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
            this.form_register.foto = ''
            this.form_register.nombres = ''
            this.form_register.apellidos = ''
            this.form_register.cedula = ''
            this.form_register.sexo = ''
            this.form_register.email = ''
            this.form_register.password = ''
            this.form_register.confirmar_contrasena = ''
        },
    },
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&display=swap');

* {
    font-family: 'Titillium Web', sans-serif;
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

.v-text-field {
    padding: 0;
}

input {
    padding: unset;
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
    position: fixed;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 0;
    margin: 0;
}

.triangle {
    background: linear-gradient(-45deg, #5b84ac, #161e27);
    width: 40vh;
    margin: 0;
    padding: 0;
    transform: rotate(0deg);
    height: 100vh;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
}

.triangle::after {
    background-image: url(../assets/bg1.jpg);
    background-size: cover;
    background-repeat: repeat;
    background-position: center;
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
    width: 100%;
    justify-self: center;
    align-self: center;
    padding: 0 10px;
}

.column {
    display: grid;
    width: 60vw;
    grid-template-columns: 1fr;
    justify-self: center;
    align-self: center;
}

.pa-2 {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
}

.input100{
    width: 100%;
    height: 3em;
    border: solid gray 1px;
    border-radius: 4%;
    margin-bottom: 1em;
    color: gray;
}

@media(max-width: 1110px) {
    .triangle {
        width: 40vh;
        /* clip-path: polygon(0% 0%, 100% 0%, 0% 50%); */
    }
}

@media(max-width: 960px) {
    form {
        margin-left: 20px;
        margin-right: 20px;
    }

    .triangle {
        display: none;
    }

    .container {
        grid-template-columns: 1fr;
        position: relative;
    }

    .column {
        width: auto;
    }

    .card {
        width: auto;
    }

}
</style>
