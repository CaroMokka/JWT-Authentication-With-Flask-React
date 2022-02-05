import React from "react";

export const Login = () => {
  return (
    <div className="container w-50 mt-5 bg-light p-4">
      <h2 className="p-3 text-center">Login</h2>

      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        <div className="row">
        <button type="button" className="btn btn-dark btn-sm m-auto w-25 mt-4">Entrar</button>
      </div>
      </div>
    </div>
  );
};
