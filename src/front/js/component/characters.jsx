import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
//import { getCharacters } from "../helpers/getCharacters";
//include your index.scss file into the bundle
import "../../styles/index.css";
import { Context } from "../store/appContext";



export const Characters = () => {
  let url = "https://3001-sollb77-starwarsfrontba-26ejchj0062.ws-us89b.gitpod.io"
  const { store, actions } = useContext(Context);
  const { addFavorites } = actions;
//  const [characters, setCharacters] = useState([]);
//  console.log(addFavorites)
//  console.log(actions)
  const { favoritos } = store;
  const personajes = async () => {
    try {
      const response = await fetch(url+"/api/people");
      const data = await response.json();
      //console.log(data.results);

      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  //personajes();
  useEffect(() => {
    actions.obtenerCharacters();
  }, []);
  //console.log(store.personajes)
  return (
    <>
      <h1 className="p-3 m-3 text-danger Liberation Sans">Charaters</h1>

       <div className="card d-flex flex-row overflow-scroll p-3 m-3">
        {store.personajes.map((item, i) => (
          <div key={i} className="p-2 m-2 border border-dark " id="tarjeta">
            <img
              src={
                item.url 
              }
              className="card-img-top "
              alt="..."
              id="imagen"
            />
            <div className="card-body">
              <h5 className="card-title text-decoration-underline">
                {item.name}
              </h5>
              <p className="card-text">
                <strong>Genero:</strong> {item.genero} <br />
                <strong>Color de pelo:</strong> {item.color_de_pelo} <br />
                <strong>Peso:</strong> {item.peso} <br />
              </p>
              <div className="d-flex justify-content-between">
                <Link to={"/ficha/"}>
                  <button className="btn btn-outline-primary p-2 mb-2 rounded">
                    {" "}
                    Mas detalles
                  </button>
                </Link>
                 <button className="p-2 mb-3 text-warning border border-warning push-right rounded">
                  <i
                    className={
                      favoritos.includes(item.name)
                        ? "fas fa-heart"
                        : "far fa-heart"
                    }
                    onClick={() => {
                      addFavorites(item.name);
                    }}
                  ></i>
                </button> 
              </div>
               <a href="" className="btn btn-primary">Mas detalles</a> 
             </div>
          </div>
        ))}
      </div>  
    </>
  );
};
