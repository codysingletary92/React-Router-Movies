import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';


import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data)
          
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };
  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      
    
      
        
        <Switch>
          <Route exact path='/'>
            <MovieList props = {movieList} />
          </Route>

          <Route path='/Movies/:movieId'>
            <Movie props = {movieList} />
          </Route>
        </Switch>
      
    </div>
  );
}
