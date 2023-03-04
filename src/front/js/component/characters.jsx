import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
//import { getCharacters } from "../helpers/getCharacters";
//include your index.scss file into the bundle
import "../../styles/index.css";
import { useContext } from "react";
import { FavoritesContext } from "../context/favoriteContext.jsx";


export const Characters = () => {

const { addFavorites, favorites } = useContext(FavoritesContext);	

const [characters, setCharacters] = useState([]);

const personajes =async () => { 
	try {
      const response = await fetch("https://swapi.dev/api/people/");
	  const data = await response.json();
	  console.log(data.results);

	  setCharacters(data.results);
	}
   catch (error) {
	console.log(error);
   }
}
//personajes();
useEffect(() => {
  personajes();
},[])


return (
 <>
<h1 className="p-3 m-3 text-danger Liberation Sans">Charaters</h1>

<div className="card d-flex flex-row overflow-scroll p-3 m-3" >
   {characters.map((item,i) => ( 
  <div key={i} className= "p-2 m-2 border border-dark "id="tarjeta"  >
  <img src={"https://starwars-visualguide.com/assets/img/characters/"+(i+1)+".jpg"} className="card-img-top " alt="..." id="imagen"/>
  <div className="card-body">
    <h5 className="card-title text-decoration-underline">{item.name}</h5>
    <p className="card-text">
		<strong>Genero:</strong> {item.gender} <br />
		<strong>Color de pelo:</strong> {item.hair_color} <br />
        <strong>Peso:</strong> {item.mass} <br />

	</p>
	<div className="d-flex justify-content-between">
	 <Link  to={"/ficha/"+(i+1)}>
	 <button className="btn btn-outline-primary p-2 mb-2 rounded"> Mas detalles</button>

      </Link>
     <button className="p-2 mb-3 text-warning border border-warning push-right rounded"> 

    <i className={favorites.includes(item.name) ? "fas fa-heart" : "far fa-heart"}onClick={()=>{addFavorites(item.name)}} ></i></button>

    </div>
    {/* <a href="" className="btn btn-primary">Mas detalles</a> */}
  </div>
  </div>
   ))}

</div>
 
 
 
 
 
 </>



)
   }