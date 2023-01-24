import React, {useState} from 'react';
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import EntityCard from "../components/EntityCard";
import {SendRequestForMovies} from "../tools/Requests";

const Movies = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    const apiKey = "6eb21f772f8f904f7f8e43a3b60a13d8"
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading)
        return <div>Chargement en cours...</div>

    return (
        <>
            <SearchBar type={"text"}
                       placeholder={"Veuillez renseigner votre film..."}
                       state={search}
                       setState={setSearch}
                       request={() => SendRequestForMovies(setIsLoading, setMovies, apiKey, search)}/>
            <MoviePageContainer>
                <MovieList>
                    {movies.map((movie, index) => (
                        <EntityCard isMovie={true} key={index} entity={movie}/>
                    ))}
                </MovieList>
            </MoviePageContainer>
        </>
    );
};

export default Movies;

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