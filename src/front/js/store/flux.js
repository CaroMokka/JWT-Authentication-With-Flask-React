const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      users: [],
      user: {},
    },
    actions: {
      //aca esta la funcion(viene con los parametros desde registro.js)y dentro  en handleSubmit() especificamente, todo esto usando actions.setRegistro(datosRegistro);
      //aca debo declarar mi funcion que llamara a la api, y lo hare con un fetch el metodo(get, post, delete, update) depende de que se solicite
      // Use getActions to call a function within a fuction

      /* getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error)); */

      /* recordar declarar la funcion en AppContext, en el useEffect
			aqui tiene que venir de parametros los datos del registro que ingresaron por Registro componente. almacenados en el estado(useState)
			 */
      //Get all users
      /* getUsers: async () => {
				await fetch('https://3001-4geeksacademy-reactflask-7438xuazf0k.ws-us30.gitpod.io/api/user')
				      .then( response => response.json())
					  .then ( result => console.log(result))
				
					  .catch( error => console.log("error", error))

			} */
      //Post un user --->> esta registrando en base de datos
      setRegistro: (datosRegistro) => {
		  const opts = {
			  method: 'POST',
			  headers: {'Content-Type': 'application/json'},
			  body: JSON.stringify(datosRegistro)
		  }
		  fetch('https://3001-4geeksacademy-reactflask-7438xuazf0k.ws-us30.gitpod.io/api/user', opts)
		  .then(resp => {
			  if (resp.status === 200)  return resp.json();
			  else alert('hERRORTRTY')
		  })
		  .then()
		  .catch( error => console.error( error , "hay un error" ))

	  },
    },
  };
};

export default getState;
