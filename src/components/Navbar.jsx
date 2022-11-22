import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "../context/productsContext";
import { Flex } from "../styles/Common.styled";
import { laptop, tablet } from "../styles/responsive";
import { CartIcon } from "./icons";

const Nav = styled.nav`
  height: 50px;
  background-color: ${({ theme }) => theme.backgroundBlue};
  color: teal;
  ${laptop({
    height: "60px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${tablet({
    padding: "10px 20px",
  })}
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

const H3 = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: teal;
`;

const UL = styled.ul`
  display: flex;
  flex-flow: "row nowrap";
  align-items: center;
  padding: 0;
  gap: 0.5rem;
  margin: 0;
  ${tablet({
    fontSize: "1.25rem",
  })}
`;
const List = styled.li`
  list-style-type: none;

  & a {
    color: teal;
    font-weight: 500;
  }
`;

const SpanWrapper = styled.div`
  position: ${({ position }) => position || "unset"};
  min-width: 15px;
  height: 15px;
  top: ${({ top }) => top || "unset"};
  right: ${({ right }) => right || "unset"};
  padding: 0 5px;
  background-color: rgb(156, 39, 176);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 500;
  color: #fff;

  ${laptop({
    width: "20px",
    height: "20px",
    fontSize: "0.75rem",
    fontWeight: "600",
  })}
`;
const Navbar = () => {
  const cartItems = useProductContext((state) => state.cartItems);

  const totalQuantity =
    cartItems.length > 0
      ? cartItems.map((el) => el.selectedQty).reduce((a, b) => a + b)
      : 0;

  return (
    <Nav>
      <Wrapper>
        <Left>
          <H3>Teerex Store</H3>
        </Left>
        <Right>
          <UL>
            <List>
              <NavLink to="/teerex-store">Products</NavLink>
            </List>
            <List>
              <NavLink to="/teerex-store/cart">
                <Flex position="relative">
                  <CartIcon />
                  <SpanWrapper position="absolute" top="-6px" right="-11px">
                    {totalQuantity}
                  </SpanWrapper>
                </Flex>
              </NavLink>
            </List>
          </UL>
        </Right>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
