import React from 'react'
import './VideoCard.css'
import TextTruncate from 'react-text-truncate'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { forwardRef } from 'react';
const base_url = 'https://image.tmdb.org/t/p/original/';
const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className='videoCard'>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} loading="lazy" alt={movie.name} />
            <TextTruncate
                line={2}
                element="p"
                truncateText='...'
                text={movie.overview}

            />
            <h2>{movie.name || movie.title}</h2>
            <p className='videoCard__stats'>
                {movie.media_type && `${movie.media_type} •`}
                {movie.release_date || movie.first_air_date} •
                <ThumbUpIcon />
                {movie.vote_count}</p>
        </div>
    );
});

export default VideoCard
