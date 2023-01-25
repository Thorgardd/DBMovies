import React, {useEffect, useState} from 'react';
import EntityCard from "../components/EntityCard";
import styled from "styled-components";
import {SendRequestForTrendingMovies} from "../tools/Requests";

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        SendRequestForTrendingMovies(setMovies)
    }, [])

    return (
        <>
            <MoviePageContainer>
                <Introduction>Voici un accès à une base de données de films et séries. Vous pouvez effectuer vos recherches dans une des onglets disponibles.</Introduction>
                <MovieList>
                    {movies.map((movie, index) => (
                        <EntityCard isMovie={true} key={index} entity={movie}/>
                    ))}
                </MovieList>
            </MoviePageContainer>
        </>
    );
};

export default Home;

const Introduction = styled.h3`
  color: white;
`;

const MoviePageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 40px;
`;