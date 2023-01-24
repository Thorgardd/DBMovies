import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContainer>
            <Title><NavButtons href={"/"}>The Movie Database</NavButtons></Title>
            <Navigation>
                <NavButtons href={"/movies"}>Films</NavButtons>
                <NavButtons href={"/shows"}>Séries</NavButtons>
            </Navigation>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  height: 70px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

const Navigation = styled.nav`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const NavButtons = styled.a`
  display: flex;
  width: auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  font-family: "American Typewriter", sans-serif;
`;