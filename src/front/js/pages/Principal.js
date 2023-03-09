import React from "react";

import "../../styles/home.css";
import {Characters} from "../component/characters.jsx";
import {Planet} from "../component/Planet.jsx";
//import {Ficha} from "../component/ficha";
//import {Navbar} from "../component/navbar";
//import {Footer} from "../component/footer";

export const Principal = () => {
  return (
    <>
     
      {/* <Navbar/>  */}
      <Characters/>
      <Planet />
    </>
  );
};
