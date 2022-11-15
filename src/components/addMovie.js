import  { React,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const addMovie=({AddingMovie})=>{
    const [newMovie,setNewMovie] = useState({
        id: uuidv4(),
        title:'',
        description:'',
        posterUrl:'',
        rating:0
      })
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow=()=>setShow(true);
      const HandleChange =(e)=>{
       setNewMovie({...newMovie, [e.target.name]: e.target.value})
       const Adding =()=>{
        AddingMovie(newMovie)
        handleClose()
      } 
       return();

    
}
}