import React from "react";
import styled from "styled-components";
import { Cart } from "./icons";

const Nav = styled.nav`
  height: 70px;
  background-color: ${({ theme }) => theme.backgroundBlue};
  color: teal;
`;

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 70%;
`;

const Right = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: teal;
`;

const Navbar = () => {
  return (
    <Nav>
      <Wrapper>
        <Left>
          <H3>Teerex Store</H3>
        </Left>
        <Right>
          <Cart />
        </Right>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
