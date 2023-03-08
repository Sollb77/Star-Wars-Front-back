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
    <div>
      <h1>HELLO</h1>
    </div>
  );
};
