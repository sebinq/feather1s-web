import React from "react";
import Navbar from "./Navbar";
import MainButtons from "./MainButtons";
import styled from "styled-components";
import Logo from "./Logo";

const Header = ({ gTheme, setGlobalTheme, children }) => {
  return (
    <Container>
      <Navbar gTheme={gTheme} setGlobalTheme={setGlobalTheme} />
      <Logo />
      <MainButtons />
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex !important;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-bottom: 70px;
`;

export default Header;
