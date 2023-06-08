new Vue({
  el: '#app',
  data: {
    email: '',
    password: ''
  },
  methods: {
    submitForm: function() {
      // Crear el objeto con los datos del formulario
      const data = {
        email: this.email,
        password: this.password
      };

      // Realizar la solicitud POST a la API
      axios.post('http://localhost:3000/auth/login', data)
        .then(response => {
          // Comprobar el resultado del inicio de sesión
          if (response.data.success) {
            alert('Inicio de sesión exitoso');
          } else {
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
