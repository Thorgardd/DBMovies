import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import styled from "styled-components";

const Details = () => {

    const ApiKey = "6eb21f772f8f904f7f8e43a3b60a13d8"
    const params = useParams();
    const [movieId, setMovieId] = useState(params.id)
    const [movie, setMovie] = useState({})

    useEffect(() => {
        GetMovieById(movieId)
    }, [])
    
    const GetMovieById = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`)
            .then((res) => {
                setMovie(res.data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <Infos>{movie.id}</Infos>
            <Infos>{movie.overview}</Infos>
            <Infos>{movie.title}</Infos>
            <Infos>{movie.vote_count}</Infos>
        </div>
    );
};

export default Details;

const Infos = styled.p`
  color: white;
`;