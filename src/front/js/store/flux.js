const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			users: [],
			user: {}
		},
		actions: {
			//aca esta la funcion(viene con los parametros desde registro.js)y dentro  en handleSubmit() especificamente, todo esto usando actions.setRegistro(datosRegistro);
			//aca debo declarar mi funcion que llamara a la api, y lo hare con un fetch el metodo(get, post, delete, update) depende de que se solicite
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//recordar declarar la funcion en AppContext, en el useEffect
			//aqui tiene que venir de parametros los datos del registro que ingresaron por Registro componente. almacenados en el estado(useState)
			setRegistro: () => {
				//tengo que especificar el metodo POST, headers(que se trata de un archivo Json), body (JSON.stringify(estado))
				fetch("https://3001-4geeksacademy-reactflask-7438xuazf0k.ws-us30.gitpod.io/api/user")
					.then(resp => resp.json())
					.then(data => setStore({ users: data.users }))
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
