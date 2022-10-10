import React from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../context/apiContext';

import Spinner from './Spinner';

function FilmDetails() {
    const [films, loaded] = useAPI();
    const { id } = useParams();
    let film;
    if (films) {
        film = films.find(item => item.episode_id === parseInt(id))
    }

    if (!film) return null

    return (
        <>
            {!loaded && <Spinner />}
            <h2>{film.title}</h2>
            <pre>{JSON.stringify(film, null, 2)}</pre>
        </>
    )
}

export default FilmDetails;