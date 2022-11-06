import React, { useState } from 'react';
import movieCard from './components/Card';
import'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [movies, setMovies]=useState([])
  const[fav, setFav]=useState([])
  return (
    <div>
      <movieCard> </movieCard>
     
    </div>
  );
}

export default App;
