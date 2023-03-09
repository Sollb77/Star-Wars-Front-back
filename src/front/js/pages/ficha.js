
import {Link} from "react-router-dom";
import React,{ useEffect,useState,useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Ficha = () => {
 let url = "https://3001-sollb77-starwarsfrontba-gk558oqrrft.ws-us89b.gitpod.io"
 const { store, actions } = useContext(Context);
 const params = useParams();
 const [persona,setPersona]= useState({})
 const personaje =async () => { 
	try {
      const response = await fetch(url+"/api/people/"+i);
      //console.log(response);
	  const data = await response.json();
	  //console.log(data);

	  setCharacters(data.result);
	}
   catch (error) {
	console.log(error);
   }
}
//personajes();
useEffect(() => {
  actions.obtener1Character();
},[])



        return (
         <> 
          
         
         
         


            <div className = "container flex-column" >
                <div className="d-flex justify-content-around m-3 p-3 ">
                <img src = {url+"/api/.jpg"} alt = "" width = {800}
                height = {600} className="m-2"/> 
                <div />
                  <div className="">
                <h1> {personaje.name} </h1> 
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus non esse voluptas, enim totam obcaecati harum porro quae voluptates vel dolores, ab reprehenderit repellat facilis itaque necessitatibus aut est.Facere. </p>
                </div>
                </div>
                <div>
                 <table className = "table  ">
                  <thead>
                  <tr>
                  <th scope = "col" > name </th> 
                  <th scope = "col" > Birth yeard </th> 
                  <th scope = "col" > Gender </th> 
                  <th scope = "col" > Height </th> 
                  <th scope = "col" > Skin Color </th>
                   <th scope = "col" > Eye Color </th> 
                   </tr> 
                   </thead> 
                   < tbody className = "table-group-divider" >
                   <tr>
                   <th scope = "row" > {persona.name} </th> 
                   <td >{personaje.birth_year} </td> 
                   <td > {personaje.genero} </td> 
                   <td > {personaje.height} </td> 
                   <td > {personaje.skin_color} </td> 
                   <td > {personaje.eye_color} </td> 
                   
                   </tr> 
                   </tbody> 
                   </table> 
                   </div>
                   
            
            </div>

         </>
        
             );
}