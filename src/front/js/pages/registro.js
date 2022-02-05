import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Registro = () => {
  const { store, actions } = useContext(Context);

  const [datosRegistro, setDatosRegistro] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState(false);
  const [error, setError] = useState("");

  //Aqui declaro mis controladores de form
  const handleChange = ({ target: { name, value } }) => {
    setDatosRegistro({ ...datosRegistro, [name]: value });
    console.log(datosRegistro);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(datosRegistro);
  };

  // actions.setRegistro();

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
        </div>
        <div className="row">
          <button type="button" className="btn btn-dark btn-sm m-auto w-25">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
