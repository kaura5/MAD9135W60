import React from 'react';
import { NavLink } from 'react-router-dom';
import Spinner from './Spinner';
import { useAPI } from '../context/apiContext';
import './FilmList.css';

function FilmList() {
    const [films, loaded] = useAPI();
    // const [loaded, setLoaded] = useState(false);

    // useEffect(() => {
    //     // setLoaded(true);
    //     setTimeout(setLoaded, 1000, true);
    // }, [films])
    if (!films) {
        return (<p>Fetching...</p>)
    } else {
        return (
            <aside>
                <h2>Film Titles</h2>
                {!loaded && <Spinner />}
                {films.map(film => (
                    <NavLink className="navlinks" to={"/" + film.episode_id} key={film.episode_id}>{film.title}</NavLink>
                ))}
            </aside>
        )
    }
}

export default FilmList;