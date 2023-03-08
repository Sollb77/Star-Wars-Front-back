//import {Characters} from "./component/characters.jsx";
let url = "https://3001-sollb77-starwarsfrontba-gk558oqrrft.ws-us89b.gitpod.io"

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            personajes: [],
            personaje: {},
            planets: [],
            planet: {},
            favoritos: [],
            auth: false,
            registro: {},
            login: {},
            //  Characters: {},
        },
        actions: {
            // Use getActions to call a function within a fuction
            fetchCredentials: async (email, password) => {
                const resp = await fetch(
                    url + "/api/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        }),
                    }
                );
                if (resp.status === 200) {
                    const data = await resp.json();
                    // localStorage.setItem("token", data ? .access_token)
                    setStore({
                        login: true,
                    });
                    console.log(getStore());
                    return true;
                }
                return false;
            },


            // All Characters
            obtenerCharacters: async () => {
                try {
                    const response = await fetch(url + "/api/people");
                    const data = await response.json();
                    setStore({
                        personajes: data.list_people,

                    });
                } catch (error) {
                    console.log(error);
                }
            },

            // 1 Character
            obtener1Character: async (id) => {
                try {
                    const response = await fetch(url + "/api/people" + id);
                    const data = await response.json();
                    //console.log(data)
                    setStore({
                        personaje: data.list_people,
                    });
                } catch (error) {
                    console.log(error);
                }
            },

            // Todos los planets
            obtenerPlanets: async () => {
                try {
                    const response = await fetch(url + "/api/planet");
                    const data = await response.json();
                    //console.log(data.results)
                    setStore({
                        planets: data.list_planet,
                    });
                } catch (error) {
                    console.log(error);
                }
            },

            //1 Planet
            obtener1Planet: async (id) => {
                try {
                    const response = await fetch(url + "/api/people" + id);
                    const data = await response.json();
                    //console.log(data.results)
                    setStore({
                        planet: data.list_planet,
                    });
                } catch (error) {
                    console.log(error);
                }
            },

            // Favoritos
            addFavorites: (item) => {
                const store = getStore();
                if (store.favoritos.includes(item)) {
                    // Si esta incluido, que lo borre
                    const actions = getActions();
                    actions.removeFavorito(item);
                } else {
                    setStore({
                        favoritos: [...store.favoritos, item],
                    });
                    //console.log(store.favoritos)
                }
            },

            // Borra favorito
            removeFavorito: (item) => {
                const store = getStore();
                //console.log(item)
                let sinEliminar = [];
                //setStore(store.favoritos.filter((elem) => elem !== item))
                //console.log(store.favoritos)
                sinEliminar = store.favoritos.filter((elem) => elem !== item);
                //console.log(sinEliminar)
                setStore({
                    favoritos: sinEliminar,
                });
                //console.log(store.favoritos)
            },


            //Registrarse
            registro: async (name, lastname, username, email, password) => {
                try {
                    const response = await fetch(
                        url + "/api/registro", {
                            method: "POST",
                            body: JSON.stringify({
                                name: name,
                                lastname: lastname,
                                username: username,
                                email: email,
                                password: password,
                            }),
                            headers: {
                                "Content-type": "application/json",
                            },
                        }
                    );
                    if (response.status === 200) {
                        const data = await response.json();
                        localStorage.setItem("token", data.access_token);
                        //console.log(data)
                        setStore({
                            auth: true,
                        });
                        return true;
                    }
                } catch (error) {
                    console.log(error);
                }
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({
                        message: data.message,
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },
        }

    }
};

export default getState;