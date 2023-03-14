import {Link} from "react-router-dom";
import React,{ useEffect,useState,useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/ficha.css";

export const Ficha = () => {
   const { store, actions } = useContext(Context);
   const params = useParams();

useEffect(() => {
// Agregar id a la funcion, lo pide desde flux
   actions.obtener1Character(parseInt(params.theid));
},[])



        return (
         <> 
          
            <div className = "container flex-column TODO bg-body" >
                <div className="d-flex justify-content-around m-3 p-3 ">
                <img className="m-2" src={store.personaje.url} 
                style={{width: "800px", height: "600px" }}
                /> 
                <div />
                  <div className="">
                <h1> {store.personaje.name} </h1> 
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus non esse voluptas, enim totam obcaecati harum porro quae voluptates vel dolores, ab reprehenderit repellat facilis itaque necessitatibus aut est.Facere. </p>
                </div>
                </div>
                <div>
                 <table className = "table  ">
                  <thead>
                  <tr>
                  <th scope = "col" > name </th> 
                  <th scope = "col" > Birth year </th> 
                  <th scope = "col" > Gender </th> 
                  <th scope = "col" > Height </th> 
                  <th scope = "col" > Skin Color </th>
                   <th scope = "col" > Eye Color </th> 
                   </tr> 
                   </thead> 
                   < tbody className = "table-group-divider" >
                   <tr>
                   <th scope = "row" > {store.personaje.name} </th> 
                   <td >{store.personaje.birth_year} </td> 
                   <td > {store.personaje.genero} </td> 
                   <td > {store.personaje.height} </td> 
                   <td > {store.personaje.skin_color} </td> 
                   <td > {store.personaje.eye_color} </td> 
                   
                   </tr> 
                   </tbody> 
                   </table> 
                   </div>
                   
            
            </div>

         </>
        
             );
}