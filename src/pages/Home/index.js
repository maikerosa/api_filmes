import { Container, MovieList, Movie } from "./styles"
import {useState, useEffect} from "react"
import { API_KEY, image_path } from "../../config/api"
import {Link} from "react-router-dom"

function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results)
        })

    }, [])

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>


                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img src={`${image_path}${movie.poster_path}`} alt={movie.title}></img>
                            </Link>                         
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}

               
            </MovieList>
        </Container>
    )
}

export default Home