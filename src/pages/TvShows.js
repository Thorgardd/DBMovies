import React, {useState} from 'react';
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import EntityCard from "../components/EntityCard";
import {SendRequestForShows} from "../tools/Requests";

const TvShows = () => {

    const [shows, setShows] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading)
        return <div>Chargement en cours...</div>

    return (
        <>
            <SearchBar type={"text"}
                       placeholder={"Veuillez renseigner votre série..."}
                       request={() => SendRequestForShows(setIsLoading, setShows, search)}
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

