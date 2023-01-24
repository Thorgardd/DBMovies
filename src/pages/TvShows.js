import React, {useState} from 'react';
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import axios from "axios";
import EntityCard from "../components/EntityCard";

const TvShows = () => {

    const [shows, setShows] = useState([]);
    const [search, setSearch] = useState("");
    const apiKey = "6eb21f772f8f904f7f8e43a3b60a13d8";
    const [isLoading, setIsLoading] = useState(false);

    const SendRequestForShows = () => {
        setIsLoading(true);
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${search}`)
            .then((res) => {
                setShows(res.data.results)
                setIsLoading(false)
                console.log(res.data.results)
            })
            .catch((err) => {
                console.log("Erreur:", err)
                setIsLoading(false)
            });
    }

    if (isLoading)
        return <div>Chargement en cours...</div>

    return (
        <>
            <SearchBar type={"text"}
                       placeholder={"Veuillez renseigner votre série..."}
                       request={() => SendRequestForShows()}
                       searchState={search}
                       setState={setSearch}/>
            <ShowsPageContainer>
                <ShowList>
                    {shows.map((show, index) => (
                        <EntityCard isMovie={false} key={index} entity={show}/>
                    ))}
                </ShowList>
            </ShowsPageContainer>
        </>
    );
};

export default TvShows;

const ShowsPageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ShowList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 40px;
`;
