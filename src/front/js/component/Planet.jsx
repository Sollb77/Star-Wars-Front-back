import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

//import { useParams } from "react-router-dom";
//import { getCharacters } from "../helpers/getCharacters";
//include your index.scss file into the bundle
import "../../styles/index.css";
import { useContext } from "react";
import { FavoritesContext } from "../context/favoriteContext.jsx";



export const Planetas = () => {

const { addFavorites, favorites } = useContext(FavoritesContext);	  

const [planets, setPlanets] = useState([]);

const planeta =async () => { 
	try {
      const response = await fetch("https://swapi.dev/api/planets");
	  const data = await response.json();
	  console.log(data.results);

	  setPlanets(data.results);
	}
   catch (error) {
	console.log(error);
   }
}
//personajes();
useEffect(() => {
   console.log(planeta)
  planeta();
},[])


return (
 <>
<h1 className="p-3 m-3 text-danger Liberation Sans">Planets</h1>

<div className="card d-flex flex-row overflow-scroll p-3 m-3" >
   {planets.map((it,num) => ( 
  <div key={num} className= "p-2 m-2 border border-dark "id="tarjeta2"  >
  <img src={"https://starwars-visualguide.com/assets/img/planets/"+(num+1)+".jpg"} className="card-img-top " alt="..." id="imagen2"/>
  <div className="card-body">
    <h5 className="card-title text-decoration-underline">{it.name}</h5>
    <p className="card-text">
		<strong>Climate:</strong> <span className="emphasized">{it.climate} </span><br />
		<strong>Diameter:</strong> <span className="emphasized">{it.diameter}</span> <br />
        <strong>Population:</strong> <span className="emphasized">{it.population}</span> <br />

	</p>
	<div className="d-flex justify-content-between mt-auto ">
	 <Link  to={"/planetficha/"+(num+1)}>
	 <button className="btn btn-outline-primary p-2 mb-2 rounded"> Mas detalles</button>

      </Link>
      <button className="p-2 mb-3 text-warning border border-warning push-right rounded"> 

    <i className={favorites.includes(it.name) ? "fas fa-heart" : "far fa-heart"}onClick={()=>{addFavorites(it.name)}} ></i></button>


    </div>
    {/* <a href="" className="btn btn-primary">Mas detalles</a> */}
  </div>
  </div>
   ))}

</div>
 
 
 
 
 
 </>



)

   }