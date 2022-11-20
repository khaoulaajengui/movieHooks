import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Data';
import NavBar from './NavBar';
import AddMovie from './components/addMovie';
function App() {
  const [Mymovies, setMymovies]=useState(data);
  const[search, setSearch]=useState('');
  const [rate,setRate]=useState(0);
  return (
    <div>
      <NavBar></NavBar>
      <AddMovie></AddMovie>
     
    </div>
  );
}

export default App;
