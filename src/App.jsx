import React,{ useEffect, useState} from 'react'
import { Container  } from 'react-bootstrap'
import NavBar from './components/NavBar';
import axios from 'axios';
import MoviesList from './components/MoviesList';


const App = () =>{
    const [movies, setMovies] = useState([])
    const [pageCount, setpageCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const [error, seterror] = useState(null);


    //get all movies by axios 
    const getAllMovies = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=58eb6469537b396d316caa0b7b9dd385&language=en-US")
    
        setMovies(res.data.results)
        setpageCount(res.data.total_pages)
  
        setIsLoading(false)
  
      
  
      }  catch(error){
        seterror(error.message)

      }
      setIsLoading(false)
    }
     //get current page
  const getPage = async (page) => {
    setIsLoading(true)

    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=58eb6469537b396d316caa0b7b9dd385&language=en-US&page=${page}`)
    setMovies(res.data.results)
    setpageCount(res.data.total_pages)
    setIsLoading(false)

  }

    const search = async (word) => {
      if (word === "") {
        getAllMovies();
      } else {
        setIsLoading(true)

        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=en-US`)
        setMovies(res.data.results)
        setpageCount(res.data.total_pages)
        setIsLoading(false)

      }
      
    }
  
    useEffect(() => {
      getAllMovies();
    }, [])
  

  return (
    <div className="color-body font">
    <NavBar search={search} />
    <Container>
    {isLoading?<p className='fw-bold text-center fs-5'>loading...</p>:error?<p className='fw-bold text-center fs-5'>{error}</p>:<MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />}
    </Container>
  </div>
  )
}

export default App