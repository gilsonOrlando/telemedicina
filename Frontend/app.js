new Vue({
  el: '#app',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm: function() {
      // Crear el objeto con los datos del formulario
      const data = {
        email: this.email,
        password: this.password
      };

      // Realizar la solicitud POST a la API
      axios.post('http://127.0.0.1:3000/auth/login', data)
        .then(response => {
          // Comprobar el resultado del inicio de sesión
          if (response.data.success) {
            alert('Inicio de sesión exitoso');
          } else {
            console.log(response)
            alert('Inicio de sesión incorrecto');
          }
        })
        .catch(error => {
          alert('Error al realizar la solicitud');
          console.error(error);
        });
    }
  }
});
