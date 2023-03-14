import {Link} from "react-router-dom";
import React,{ useEffect,useState,useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/ficha.css";

export const Fichap = () => {
   const { store, actions } = useContext(Context);
   const params = useParams();

useEffect(() => {
// Agregar id a la funcion, lo pide desde flux
   actions.obtener1Planet(parseInt(params.theid));
},[])



        return (
         <> 
          
            <div className = "container flex-column TODO bg-body" >
                <div className="d-flex justify-content-around m-3 p-3 ">
                <img className="m-2" src={store.planet.url} 
                style={{width: "800px", height: "600px" }}
                /> 
                <div />
                  <div className="">
                <h1> {store.planet.name} </h1> 
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus non esse voluptas, enim totam obcaecati harum porro quae voluptates vel dolores, ab reprehenderit repellat facilis itaque necessitatibus aut est.Facere. </p>
                </div>
                </div>
                <div>
                 <table className = "table  ">
                  <thead>
                  <tr>
                  <th scope = "col" > name </th> 
                  <th scope = "col" > Diameter </th> 
                  <th scope = "col" > Gravity </th> 
                  <th scope = "col" > Terrain </th> 
                  <th scope = "col" > Population </th>
                   <th scope = "col" > Climate </th> 
                   </tr> 
                   </thead> 
                   < tbody className = "table-group-divider" >
                   <tr>
                   <th scope = "row" > {store.planet.name} </th> 
                   <td >{store.planet.diameter} </td> 
                   <td > {store.planet.gravity} </td> 
                   <td > {store.planet.terrain} </td> 
                   <td > {store.planet.population} </td> 
                   <td > {store.planet.climate} </td> 
                   
                   </tr> 
                   </tbody> 
                   </table> 
                   </div>
                   
            
            </div>

         </>
        
             );
}