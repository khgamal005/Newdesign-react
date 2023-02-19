import React,{ useEffect, useState} from 'react'
import { Container  } from 'react-bootstrap'
import axios from 'axios';
import MoviesList from './components/MoviesList';


const App = () =>{
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, seterror] = useState(null);


    //get all movies by axios 
    const getAllMovies = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get("https://api.tvmaze.com/search/shows?q=all")
        
    
        setMovies(res.data)
        // setpageCount(res.data.total_pages)
  
        setIsLoading(false)
  
      
  
      }  catch(error){
        seterror(error.message)

      }
      setIsLoading(false)
    }
   
    useEffect(() => {
      getAllMovies();
    }, [])
  

  return (
    <div className="color-body font">
    <Container>
    {isLoading?<p className='fw-bold text-center fs-5'>loading...</p>:
    error?<p className='fw-bold text-center fs-5'>{error}</p>:
    <MoviesList movies={movies}/>}
    </Container>
  </div>
  )
}

export default App