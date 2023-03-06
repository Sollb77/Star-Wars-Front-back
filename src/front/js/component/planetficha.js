import React from "react";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useState} from "react";

export const Planetficha = () => {

    const params = useParams();
    const [planet, setPlanet] = useState({})
    const planeta = async () => {
        try {
            const response = await fetch("https://swapi.dev/api/planets/" + params.theid);
            //console.log(response);
            const data = await response.json();
            console.log(data);

            setPlanet(data);
        } 
        catch (error) {
            console.log(error);
        }
    }
    //personajes();
    useEffect(() => {
        planeta();
    }, [])



    return (
       <>


        <div className = "container flex-column" >
        <div className = "d-flex justify-content-around m-3 p-3 " >
        <img src = {"https://starwars-visualguide.com/assets/img/planets/" + params.theid + ".jpg"}
        alt = ""
        width = {800}
        height = {600}
        className = "m-2" />
        <div />
        <div className = "" >
        <h1> {planet.name} 
        </h1>  
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus non esse voluptas, enim totam obcaecati harum porro quae voluptates vel dolores, ab reprehenderit repellat facilis itaque necessitatibus aut est.Facere. </p>
         </div> 
         </div> 
         <div>
        <table className = "table  ">
        <thead>
        <tr>
        <th scope = "col" > Name </th>  
        <th scope = "col" > Diameter </th> 
        <th scope = "col" > Gravity </th> 
        <th scope = "col" > Terrain </th> 
        <th scope = "col" > Population </th>
        <th scope = "col" > Climate </th> 
      </tr>  
      </thead>  
      <tbody class = "table-group-divider" >
        <tr>
        <th scope = "row" > 
        {planet.name} </th> 
         <td> 
            {planet.diameter} </td> 
             <td> 
               {planet.gravity} </td> 
                <td> 
                  {planet.terrain } 
                  </td>  
                  <td> 
                     {planet.population}
                      </td>  
                      <td> 
                        {planet.climate} 
                        </td> 

        </tr>  
        </tbody>  
        </table>  
        </div>


        </div>

        </>

    );
}