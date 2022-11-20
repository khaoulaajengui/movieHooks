import  { React,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuidv4 } from 'uuid';


const AddMovie=({AddingMovie})=>{
    const [newMovie,setNewMovie] = useState({
        id: uuidv4(),
        title:'',
        description:'',
        posterUrl:'',
        rating:0
      })
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const showing=()=>setShow(true);
      const handleChange=(e)=> {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
        const Add =() =>{
              AddingMovie(newMovie);
              handleClose();
          };
          return (
            <>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Add movie</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input placeholder='type the title'></input>
                    <input placeholder='type the description'></input>
                    <input placeholder='type the URL of the poster'></input>
                    <input placeholder='type the rating'></input>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save </Button>
                </Modal.Footer>
            </Modal.Dialog>
            </>
        );
        
      


    }
}
export default AddMovie;