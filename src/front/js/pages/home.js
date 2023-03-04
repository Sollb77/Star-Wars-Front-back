import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navigate, Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      console.log("Complete la Formacion solicitada");
    } else {
      const ver = await actions.fetchCredentials(email, password);
      ver ? Navigate("/demo") : null;
      //	if (store.login === true)
      //	   {<Link to="/demo"/> }
      console.log(ver);
    }
  };
  //const {store,actions} = useContext(Context)

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
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
