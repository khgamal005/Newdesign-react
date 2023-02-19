import React from 'react'
import { Row, } from "react-bootstrap";
import CardMovie from "./CardMovie";



const MoviesList = ({movies}) => {
 
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (movies.map((mov,idx) => {
        return (<CardMovie key={idx} mov={mov} />)
      })) : <h2 className="text-center p-5"> No movie...</h2>}

     

    </Row>
  );
};

export default MoviesList;
