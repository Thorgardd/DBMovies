import React from 'react';
import styled from "styled-components";

const SearchBar = ({type, placeholder, setState, request, search, key}) => {

    return (
        <Container>
            <Bar key={key} type={type} placeholder={placeholder} onChange={(e) => setState(e?.target.value)} value={search}/>
            <ValidateButton type={"submit"} onClick={request}>
                Valider
            </ValidateButton>
        </Container>
    );
};

export default SearchBar;

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Bar = styled.input`
  display: flex;
  height: 100%;
  width: 30%;
  border-radius: 5px;
  padding-left: 5px;
`;

const ValidateButton = styled.button`
  height: 100%;
  border: none;
  width: 10%;
  display: flex;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;