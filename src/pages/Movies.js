import React, {useState} from 'react';
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import EntityCard from "../components/EntityCard";

const Movies = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    const apiKey = "6eb21f772f8f904f7f8e43a3b60a13d8"
    const [isLoading, setIsLoading] = useState(false)
    const SendRequestForMovie = () => {
        setIsLoading(true);
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&query=${search}`)
            .then((res) => {
                setMovies(res.data.results)
                console.log(res.data.results[1])
                setIsLoading(false)
            })
            .catch((err) => {
                console.log("Erreur: ", err)
                setIsLoading(false)
            });
    }

    if (isLoading)
        return <div>Chargement en cours...</div>

    return (
        <>
            <SearchBar type={"text"}
                       placeholder={"Veuillez renseigner votre film..."}
                       state={search}
                       setState={setSearch}
                       request={() => SendRequestForMovie()}/>
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