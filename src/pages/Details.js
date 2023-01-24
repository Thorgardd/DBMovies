import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import styled from "styled-components";

const Details = () => {

    const ApiKey = "6eb21f772f8f904f7f8e43a3b60a13d8"
    const params = useParams();
    const [urlId, setUrlId] = useState(params.id)
    const [object, setObject] = useState({})
    const [isMovie, setIsMovie] = useState(false)

    useEffect(() => {
        if (CheckIsMovieParams()){
            GetMovieById(urlId)
        } else if (!CheckIsMovieParams()){
            GetShowById(urlId)
        }
    }, [])

    const CheckIsMovieParams = () => {
        if (window.location.href.indexOf("movies") !== -1){
            setIsMovie(true);
            return true;
        } else {
            setIsMovie(false);
            return false;
        }
    }

    const GetMovieById = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`)
            .then((res) => {
                setObject(res.data)
            })
            .catch((err) => console.log(err))
    }

    const GetShowById = (id) => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${ApiKey}&language=en-US`)
            .then((res) => {
                setObject(res.data)
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <Infos>{object.id}</Infos>
            <Infos>{object.overview}</Infos>
            <Infos>{object.title}</Infos>
            <Infos>{object.vote_count}</Infos>
        </div>
    );
};

export default Details;

const Infos = styled.p`
  color: white;
`;