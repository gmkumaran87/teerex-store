import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CartIcon } from "./icons";

const Nav = styled.nav`
  height: 70px;
  background-color: ${({ theme }) => theme.backgroundBlue};
  color: teal;
`;

const Wrapper = styled.div`
  padding: 1rem 1.5rem;
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
  align-items: center;
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: teal;
`;

const UL = styled.ul`
  display: flex;
  flex-flow: "row nowrap";
  align-items: center;
  padding: 0;
  margin: 0;
`;
const List = styled.li`
  list-style-type: none;
  margin-right: 1rem;

  & a {
    color: teal;
    font-weight: 500;
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <Wrapper>
        <Left>
          <H3>Teerex Store</H3>
        </Left>
        <Right>
          <UL>
            <List>
              <NavLink to="/">Products</NavLink>
            </List>
            <List>
              <NavLink to="/cart">
                <CartIcon />
              </NavLink>
            </List>
          </UL>
        </Right>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
