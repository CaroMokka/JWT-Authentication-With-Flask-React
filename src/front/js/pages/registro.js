import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Lista } from "../component/lista";

//componente controlado, react manda el control aqui sobre los input o elementeos html

export const Registro = () => {
  const { store, actions } = useContext(Context);

  const [datosRegistro, setDatosRegistro] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState(true);
  

  //Aqui declaro mis controladores de form
  const handleChange = ({ target: { name, value } }) => {
    setDatosRegistro({ ...datosRegistro, [name]: value });
    console.log(datosRegistro);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //validacion de formmulario
    if(datosRegistro.name !== "" || datosRegistro.email !== "" || datosRegistro.password !== ""){
      console.log(datosRegistro); //captura datos ingresados
      setDatosRegistro({name: "", email:"", password:""});
      setValidation(true);
    } else 
      setValidation(false)
   };

  actions.setRegistro(datosRegistro);

  //Aqui tengo que obtener los datos que entrar del formulario registro onchange
  //luego tengo con la function handleChange() debo intervenir en el estado de mi app,
  //como el useState() setData debo guardar con un operador spread setData({...datosRegistro, [event.target.name] : event.target.value})
  //luego a traves de handleSubmit primero valido mi formulario, y envio en una funcion () (fetch+metodo) y como parametro el estado actual, o sea datosRegistro
  //
  return (
    <div className="container w-50 mt-5 bg-light p-4">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="p-3 text-center">Registro</h2>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              onChange={handleChange}
              name="name"
              type="text"
              className="form-control"
              value={datosRegistro.name}
            />
          </div>
        </div>
        {!validation && <div className="validation text-danger">Debe ingresar un nombre</div>}
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              onChange={handleChange}
              name="email"
              type="email"
              className="form-control"
              value={datosRegistro.email}
            />
          </div>
          {!validation && <div className="validation text-danger">Debe ingresar un email</div>}
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="form-control"
              value={datosRegistro.password}
            />
          </div>
          {!validation && <div className="validation text-danger">Debe ingresar un password</div>}
        </div>
        <div className="row">
          <button type="submit" className="btn btn-dark btn-sm m-auto w-25">
            Submit
          </button>
        </div>
      </form>
     
    </div>
  );
};
