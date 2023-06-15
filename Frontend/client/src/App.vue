<template>
  <div class="container">
    <div class="triangle"></div>
    <div class="div2">
      <div id="app">
        <div class="login-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-person-circle"
            viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
          <h2 style="margin-top: -1px;">Iniciar sesión</h2>
          <form @submit="submitForm">
            <div class="form-group">
              <label for="username">Correo:</label>
              <input type="text" id="email" v-model="email" required>
            </div>
            <div class="form-group">
              <label for="password">Contraseña:</label>
              <input type="password" id="password" v-model="password" required>
            </div>
            <div class="form-group-button">
              <label></label>
              <button type="submit">Ingresar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm: function (e) {
      //e.preventDefault();
      const data = {
        email: this.email,
        password: this.password
      };

      this.axios.post('http://127.0.0.1:3000/auth/login', data)
        .then(response => {

          if (response.data === "") {
            console.log(JSON.stringify(response))
            alert('Inicio de sesión incorrecto');
          } else {
            alert('Inicio de sesión exitoso');
            console.log(JSON.stringify(response))
          }
        })
        .catch(error => {
          alert('Error al realizar la solicitud');
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&display=swap');

* {
  font-family: 'Titillium Web', sans-serif;
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

input[type="text"],
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
  /* Rota el triángulo rectángulo */
  height: 100vh;
  clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
}

.triangle::after {
  background-image: url(assets/bg1.jpg);
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