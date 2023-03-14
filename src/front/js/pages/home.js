import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navigate, Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  //const Navigate = useNavigate();
  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      console.log("Complete la Formacion solicitada");
    } else {
      const ver = await actions.fetchCredentials(email, password);
      ver ? Navigate("/principal") : null;
      //	if (store.login === true)
      //	   {<Link to="/demo"/> }
      console.log(ver);
    }
  };
  //const {store,actions} = useContext(Context)
  // const useNavigate = async () => {
  //    Navigate("/principal") ;
  //	if (store.login === true)
  //	   {<Link to="/demo"/> }
  // console.log(ver);
  //  }

  return (
    <div className="d-flex justify-content-center ">
      <div className="text-center mt-5 border border-warning w-25 border border-3 Todo">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="htmlForm-label text-warning">
              Email address
            </label>
            <input
              type="email"
              className="htmlForm-control m-2 "
              id="exampleInputEmail1"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="htmlForm-text w-25">
              
            </div>
          </div>
          <div className="mb-3 m-2">
            <label htmlFor="exampleInputPassword1" className="htmlForm-label text-warning">
              Password
            </label>
            <input
              type="password"
              className="htmlForm-control m-2 text-warning"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="mb-3 htmlForm-check m-2">
            <input
              type="checkbox"
              className="htmlForm-check-input m-2 text-warning"
              id="exampleCheck1"
            />
            <label className="htmlForm-check-label m-2 text-warning" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-warning m-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <Link to="/Registro">
           <button
            type="submit"
            className="btn btn-outline-warning m-2"
          //  onClick={<Link to="/Registro" />}
           >
            Registrarse
           </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
