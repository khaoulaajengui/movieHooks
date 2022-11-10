import React, { useState } from 'react';
import movieCard from './components/Card';
import'bootstrap/dist/css/bootstrap.min.css';
import { data } from './Data';
function App() {
  const [movies, setMovies]=useState([data])
  const[search, setSearch]=useState([])
  return (
    <div>
      <movieCard movies={data}></movieCard>
     
    </div>
  );
}

export default App;
