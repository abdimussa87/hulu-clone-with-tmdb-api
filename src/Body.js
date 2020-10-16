import React, { useEffect, useState } from 'react'
import './Body.css'
import VideoCard from './VideoCard'
import axios from './axios';
import FlipMove from 'react-flip-move';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

function Body({ selectedOption }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    useEffect(() => {
        axios.get(selectedOption).then(response => {
            setMovies(response.data.results);
        });

    }, [selectedOption]);

    // * for youtube player
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleClick = (movie) => {
        // *if trailer url exists, set it to empty to close the youtube player
        console.log("Clicking");
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            console.log(movie?.name);
            movieTrailer(movie?.name || movie?.title || "").then(url => {
                console.log(url);
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch(err => alert("Couldn't find the trailer"));
        }
    }
    return (
        <div className='body'>
            <FlipMove>
                {
                    movies.map(movie =>
                        <div onClick={() => handleClick(movie)} key={movie.id}>

                            <VideoCard key={movie.id} movie={movie} />
                        </div>
                    )}
            </FlipMove>
            { trailerUrl && < YouTube videoId={trailerUrl || ""} opts={opts} />}
        </div>
    )
}

export default Body
