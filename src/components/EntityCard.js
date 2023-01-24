import React from 'react';
import styled from "styled-components";


const EntityCard = ({entity, isMovie}) => {

    if (isMovie)
        return (
            <MainContainer>
                <CardContainer>
                    <Image src={`https://image.tmdb.org/t/p/w500/${entity.backdrop_path}`} alt={"Image d'un film"}/>
                    <Title>{entity.original_title}</Title>
                </CardContainer>
            </MainContainer>
        );

    if (!isMovie)
        return (
            <MainContainer>
                <CardContainer>
                    <Image src={`https://image.tmdb.org/t/p/w500/${entity.backdrop_path}`} alt={"Image d'une série"} />
                    <Title>{entity.name}</Title>
                </CardContainer>
            </MainContainer>
        )
};

export default EntityCard;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
`;

const Title = styled.h2`
  width:100%;
  height: 10%;
  color: white;
`;

const Image = styled.img`
  object-fit: cover;
  width: 200px;
  height: 200px;
  ;
`;