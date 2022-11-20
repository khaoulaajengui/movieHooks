import React from "react";
import { Card, Col } from 'react-bootstrap'

const movieCard=({data})=>{
  return (
    
   
    {data.map((movie,i)=> (
      <Col key={i}>
        <Card>
          <Card.Img variant="top" src={movie.poster} />
          <Card.Body>
            <Card.Title>{movie.title} </Card.Title>
            <Card.Text>{movie.description} </Card.Text>
            Recommandé à {movie.rating} %  
          </Card.Body>


        </Card>
      </Col>
    ))}
  )}
    
  ;



export default movieCard;