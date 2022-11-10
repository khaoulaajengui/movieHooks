import React from "react";
import { Card, Col } from 'react-bootstrap'

const movieCard=({data})=>{
  return (
    
   
    {data}.map((movies,i)=> (
      <Col key={i}>
        <Card>
          <Card.Img variant="top" src={movies.poster} />
          <Card.Body>
            <Card.Title>{movies.title} </Card.Title>
            <Card.Text>{movies.description} </Card.Text>
          </Card.Body>
          Recommandé à {movies.rating} %
        </Card>
      </Col>
    ))
  )}
    
  ;



export default movieCard;