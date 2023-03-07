import React from "react";
import { FavoritesContext } from "../context/favoriteContext.jsx";
import {Link} from "react-router-dom";
import { useContext } from "react";

export const Navbar = () => {

return (
    <nav className = "navbar bg-light d-flex justify-content-between" >
    <div className = "container-fluid d-flex justify-content-between" >
    <div>
    <a className = "navbar-brand" href = "#" />
    <Link to="/">
     <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_wars_1977_us.svg/2560px-Star_wars_1977_us.svg.png"
    width ={120}
    height ={80}/> 
    </Link> 
    </div>
    <div className="dropdown ml-auto">
            <button className="btn btn-primary dropdown-toggle p-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
                <span className="badge bg-secondary rounded-pill">"0"</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
            
            </ul>
        </div>
             
        </div>

     </nav>

)
//const {deleteFavorites,favorites} = useContext(FavoritesContext)
/*
    return ( <nav className = "navbar bg-light d-flex justify-content-between" >
        <div className = "container-fluid d-flex justify-content-between" >
        <div>
        <a className = "navbar-brand" href = "#" />
        <Link to="/">
         <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_wars_1977_us.svg/2560px-Star_wars_1977_us.svg.png"
        width ={120}
        height ={80}/> 
        </Link> 
        </div>
        <div className="dropdown ml-auto">
				<button className="btn btn-primary dropdown-toggle p-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="badge bg-secondary rounded-pill">{favorites.length}</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
                {favorites.map( ( name, i ) => (
						<li key={i} className="dropdown-item favorite d-flex justify-content-between p-2">{name}<i className="fas fa-trash" onClick={()=>{deleteFavorites(name)}} ></i></li>
					))}	
				</ul>
			</div>
                 
            </div>

         </nav>



    );*/
};