import React, { useState } from 'react';
import MovieCard from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './Data';
function App() {
  const [movies, setMovies]=useState([data])
  const[search, setSearch]=useState([])
  return (
    <div>
      <MovieCard movies={data}></MovieCard>
     
    </div>
  );
}

export default App;
