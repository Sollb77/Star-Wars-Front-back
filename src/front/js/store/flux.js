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
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {
            // Use getActions to call a function within a fuction
            fetchCredentials: (email, password) => {
                fetch("https: //3001-4geeksacade-reactflaskh-gwxcpsm8kdq.ws-us89.gitpod.io/login", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        })


                    })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("token", data.acces_token)
                        setStore({
                            login: true,
                        })
                        console.log(getStore());
                    })
                    .catch(error => console.log(error))

            }
        },

        getMessage: async () => {
            try {
                // fetching data from the backend
                const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
                const data = await resp.json()
                setStore({
                    message: data.message
                })
                // don't forget to return something, that is how the async resolves
                return data;
            } catch (error) {
                console.log("Error loading message from backend", error)
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
                demo: demo
            });
        }
    }
};


export default getState;