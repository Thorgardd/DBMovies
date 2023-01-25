import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {GetMovieById, GetShowById} from "../tools/Requests";
import {CheckIsMovieParams} from "../tools/ExternalsMethods";

const Details = () => {

    const params = useParams();
    const urlId = params.id;
    const [object, setObject] = useState({})
    const [isMovie, setIsMovie] = useState(false)

    useEffect(() => {
        if (CheckIsMovieParams(setIsMovie)){
            GetMovieById(urlId, setObject)
        } else if (!CheckIsMovieParams(setIsMovie)) {
            GetShowById(urlId, setObject)
        }
    }, [urlId])

    if (!isMovie)
        return (
            <DetailContainer>
                <DetailTitle>{object.original_name}</DetailTitle>
                <Image src={`https://image.tmdb.org/t/p/w500/${object.backdrop_path}`}/>
                <SubInfos>{object.overview}</SubInfos>
                <SubInfos>Statut : {object.status} in {object.release_date}</SubInfos>
                <SubInfos>Limite d'âge : {object.adult ? "Enfants interdits" : "Tout public" }</SubInfos>
            </DetailContainer>
        );

    if (isMovie)
        return (
        <DetailContainer>
            <DetailTitle>{object.title}</DetailTitle>
                <Image src={`https://image.tmdb.org/t/p/w500/${object.backdrop_path}`}/>
                <SubInfos>{object.overview}</SubInfos>
                <SubInfos>Statut : {object.status} in {object.release_date}</SubInfos>
                <SubInfos>Limite d'âge : {object.adult ? "Enfants interdits" : "Tout public" }</SubInfos>
        </DetailContainer>
    );
};

export default Details;

const DetailContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  color: white;
  font-family: "American Typewriter", sans-serif;
`;

const SubInfos = styled.h4`
  color: white;
`;

const Image = styled.img`
  height: 400px;
  width: 400px;
`;

const DetailTitle = styled.h1`
  
`;