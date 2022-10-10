import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FilmList from './components/FilmList';
import FilmDetails from './components/FilmDetails';
import { APIContextProvider } from './context/apiContext';
import './App.css';

function App() {
  // const [films, setFilms] = useState();


  // useEffect(() => {
  //   fetch(`https://swapi.dev/api/films/`)
  //     .then(res => res.json())
  //     .then(data => setFilms(data.results))
  //     .catch(err => console.log)
  //   // getFilms().then(response => setFilms(response.results))
  // }, [])

  // async function getFilms() {
  //   const URL = `https://swapi.dev/api/films/`

  //   try {
  //     const response = await fetch(URL)
  //     if (!response.ok) throw new Error(response.statusText)
  //     return response.json()
  //   } catch (error) {
  //     // handle error
  //     console.log(error)
  //   }
  // }

  return (
    <APIContextProvider>
      <div className="App">
        <Header />
        <FilmList />
        {/* <FilmList films={films} /> */}
        <Routes>
          {/* <Route path="/" element={<FilmList films={films} />} /> */}
          {/* <Route path="/:id" element={<FilmDetails films={films} />} /> */}
          <Route path="/:id" element={<FilmDetails />} />
        </Routes>
      </div>
    </APIContextProvider>
  );
}

export default App;
