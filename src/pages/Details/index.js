import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_KEY, image_path} from '../../config/api';
import { Container } from './styles';

function Details() {

    const { id } = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => {

                const { title, overview, poster_path, release_date } = data

                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    image: `${image_path}${poster_path}`,
                    release_date: release_date,
                }

                setMovie(movie)
            })
    }, [id])


    return (
        <Container>
            <div className='movie'>
                <img src={movie.image} alt={movie.sinopse} />
                <div className='details'>
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className='release-date'>Data de lançamento: {movie.release_date}</span>
                    <Link to='/'>
                        <button>Go Back </button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Details