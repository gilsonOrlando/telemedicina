new Vue({
  el: '#app',
  data: {
    email: '',
    password: ''
  },
  methods: {
    submitForm() {
      // Crea un objeto con los datos del formulario
      const userData = {
        email: this.email,
        password: this.password
      };

      // Realiza la solicitud POST a la API utilizando Axios
      axios.post('URL_DE_TU_API', null, { params: userData })
        .then(response => {
          // Maneja la respuesta de la API
          console.log(response.data);
          alert('Inicio de sesión exitoso');
        })
        .catch(error => {
          // Maneja los errores de la solicitud
          console.error(error);
          alert('Error en el inicio de sesión');
        });
    }
  }
});
