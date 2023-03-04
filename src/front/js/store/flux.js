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
            ],
            login:{}

        },
        actions: {
            // Use getActions to call a function within a fuction
            fetchCredentials: async(email, password) => {
                const resp = await fetch("https://3001-sollb77-login-gx5dc8qjwbi.ws-us89.gitpod.io/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        })
                    })
                    if (resp.status === 200)
                     
                    {
                        const data = await resp.json()
                        localStorage.setItem("token", data?.access_token)
                        setStore({
                            login: true,
                        })
                        console.log(getStore());
                        return true

                    }
                   return false

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