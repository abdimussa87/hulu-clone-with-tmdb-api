import React, { useEffect, useState } from 'react'
import './Body.css'
import VideoCard from './VideoCard'
import axios from './axios';
import FlipMove from 'react-flip-move';
function Body({ selectedOption }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(selectedOption).then(response => {
            setMovies(response.data.results);
        });

    }, [selectedOption])
    return (
        <div className='body'>
            <FlipMove>
                {
                    movies.map(movie =>
                        <VideoCard key={movie.id} movie={movie} />
                    )}
            </FlipMove>
        </div>
    )
}

export default Body
