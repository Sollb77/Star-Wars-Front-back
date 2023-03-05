import React, {useState} from "react";
import { FavoritesContext } from "./favoriteContext.jsx";

export const FavoritesProvider = ( {children} ) => {

    
    const [favorites, setFavorites] = useState( [] )
    


    const addFavorites = ( name ) => {
        if (favorites.includes(name) === false)  {
            let tempFavorites = [...favorites];
            tempFavorites.push(name)
            setFavorites(tempFavorites);
        }
    }
   

    const deleteFavorites = (item) => {
        let removeList = favorites.filter((favorite) => favorite !== item);
		setFavorites(removeList);
    }

    return (
        <FavoritesContext.Provider value={ {favorites, addFavorites, deleteFavorites} }>
            {children}
        </FavoritesContext.Provider>
    )
}