import React from "react";

import "../../styles/home.css";
import {Characters} from "../component/characters";
import {Planet} from "../component/planet";
//import {Ficha} from "../component/ficha";
//import {Navbar} from "../component/navbar";
//import {Footer} from "../component/footer";

export const Principal = () => {

    return(
    <>
      {/* <Navbar/>  */}
      <Characters/>
      <Planet/>
    </>
)
};
