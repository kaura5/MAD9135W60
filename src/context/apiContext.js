import React, { useState, useEffect, useContext, createContext } from 'react';

const APIContext = createContext();

function APIContextProvider(props) {
    const [films, setFilms] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(setLoaded, 800, true);
    }, [])

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/`)
            .then(res => res.json())
            .then(data => {
                setFilms(data.results)
                // setLoaded(true)
            })

            .catch(err => console.log)
        // getFilms().then(response => setFilms(response.results))
    }, [])

    return (
        <APIContext.Provider value={[films, loaded]} {...props} />
    )
}

function useAPI() {
    const context = useContext(APIContext);
    //we use the built-in useContext hook to access our own Context object.
    if (!context) throw new Error('Not inside the Provider');
    return context;
}

export { useAPI, APIContextProvider };