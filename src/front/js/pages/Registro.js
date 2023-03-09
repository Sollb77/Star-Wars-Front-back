import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Registro = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
    <div className="text-center mt-5">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label">
            Email address
          </label>
          <input
            type="email"
            className="htmlForm-control"
            id="exampleInputEmail1"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="htmlForm-text w-25">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">
            Password
          </label>
          <input
            type="password"
            className="htmlForm-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="mb-3 htmlForm-check">
          <input
            type="checkbox"
            className="htmlForm-check-input"
            id="exampleCheck1"
          />
          <label className="htmlForm-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
       
        <Link to="/principal">
         <button
          type="submit"
          className="btn btn-primary"
        //  onClick={<Link to="/Principal" />}
         >
          Registrarse
         </button>
        </Link>
      </form>
    </div>
  </>
  );
};
