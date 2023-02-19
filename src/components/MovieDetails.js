import React, { useState, useEffect } from 'react'
import { Button, Col, Row } from "react-bootstrap";
import {  useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import LightBox from './LightBox';
import AddUser from './AddUser';
const MovieDetails = () => {
    const {id} = useParams();
    const navigate= useNavigate()
    const [toggleLightBox, setToggleLightBox] = useState(false);
    const [movie, setMovie] = useState([])

let users ;
if (localStorage.getItem('users')==null){
    users=[]
}else{
    users=JSON.parse(localStorage.getItem('users'))
}
    //get  movie by details 
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)
        setMovie(res.data)


    }
    useEffect(() => {
        getMovieDetails();
    }, [])


    const lightBoxHandler = () => {
        setToggleLightBox(prev=>!prev);
        
      };


      const orderUserHandeler=async (userData)=>{
        userData.id = Math.random().toString();
        users.push(userData)

       localStorage.setItem('users', JSON.stringify(users))
       setToggleLightBox(false);


      }
  




    return (
        <div>
             {toggleLightBox ?(<LightBox  closeForm ={lightBoxHandler}>
            <AddUser  orderUserHandeler={orderUserHandeler}  selectedMovie={movie} />
      </LightBox>):null}
      
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        
                        <div className="justify-content-center text-center  mx-auto">
                            <h4 className="card-text-details border-bottom">
                                summary <span dangerouslySetInnerHTML={{__html:movie.summary}}/>
                            </h4>
                            <Button onClick={() => navigate('/')}>hide Details</Button>
                            <Button onClick={lightBoxHandler} className='add ms-2'>book a ticket  </Button>

                        </div>
                    </div>
                </Col>
            </Row>

           
        </div>
    )
}

export default MovieDetails
