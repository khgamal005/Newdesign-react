import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';



const CardMovie = ({ mov }) => {
  const navigate= useNavigate()


  return (

    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
    <Link to={`/movie/${mov.show.id}`}>
        <div className="card">
          <img src={mov?.show?.image?.medium} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>title:{mov.show.name}</p>
              <p> genres:{mov.show.genres}</p>
              <p>language:{mov.show.language}</p>
              <Button className="text-center" onClick={() => navigate(`movie/${mov.show.id}`)}>View Details</Button>

            </div>

          </div>
        </div>
        </Link>

    </Col >


     
  );
};

export default CardMovie;


