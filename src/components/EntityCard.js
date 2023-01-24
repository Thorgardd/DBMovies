import React from 'react';
import styled from "styled-components";


const EntityCard = ({entity, isMovie}) => {

    if (isMovie)
        return (
            <CardContainer>
                <LinkOverImg href={`/movies/${entity.id}`}>
                    <Image src={`https://image.tmdb.org/t/p/w500/${entity.backdrop_path}`} alt={"Image d'un film"}/>
                </LinkOverImg>
            </CardContainer>
        );

    if (!isMovie)
        return (
            <CardContainer>
                <LinkOverImg href={`/shows/${entity.id}`}>
                    <Image src={`https://image.tmdb.org/t/p/w500/${entity.backdrop_path}`} alt={"Image d'une serie"}/>
                </LinkOverImg>
            </CardContainer>
        )
};

export default EntityCard;

const CardContainer = styled.div`
  width: 300px;
  height: 350px;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const LinkOverImg = styled.a`
  
`;