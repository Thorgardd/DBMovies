import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {GetMovieById, GetShowById} from "../tools/Requests";
import {CheckIsMovieParams} from "../tools/ExternalsMethods";

const Details = () => {

    const ApiKey = "6eb21f772f8f904f7f8e43a3b60a13d8"
    const params = useParams();
    const [urlId, setUrlId] = useState(params.id)
    const [object, setObject] = useState({})
    const [isMovie, setIsMovie] = useState(false)

    useEffect(() => {
        if (CheckIsMovieParams(setIsMovie)){
            GetMovieById(urlId, setObject, ApiKey)
        } else if (!CheckIsMovieParams(setIsMovie)) {
            GetShowById(urlId, setObject, ApiKey)
        }
    }, [])

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