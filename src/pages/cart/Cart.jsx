import React, { useEffect } from "react";
import styled from "styled-components";
// import { FREE_SHIPPING_LIMIT, SHIPPING_AMT } from "../../common/constant";

import { useProductContext } from "../../context/productsContext";
import { Flex } from "../../styles/Common.styled";
import { desktop, laptop, tablet } from "../../styles/responsive";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: teal;
  gap: 1rem;
  /* height: calc(100vh - 60px); */
  padding: 5px;

  ${tablet({
    height: "100%",
    width: "100%",
  })};

  ${laptop({
    height: "100%",
    width: "100%",
    padding: "0",
  })};
  ${desktop({
    maxWidth: "65rem",
  })}
`;
const Heading = styled.h1`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  ${laptop({
    fontSize: "1.5rem",
    fontWeight: "300",
  })}
`;

const Main = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.3rem;
  align-items: center;
  padding-bottom: 1rem;

  ${laptop({
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  })}
`;

const CartItem = styled.article`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  margin: ${({ margin }) => margin || "unset"};
  border-radius: 3px;

  ${laptop({
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexFlow: "row nowrap",
  })}
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 2px;
  margin: 0 auto;
`;

const Cart = () => {
  const cartItems = useProductContext((state) => state.cartItems);

  const setErrorMsg = useProductContext((state) => state.setErrorMsg);
  const error = useProductContext((s) => s.error);

  useEffect(() => {
    if (error.msg.length > 0) {
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    }
  }, [error.msg]);

  const totalAmount =
    cartItems.length > 0
      ? cartItems?.map((el) => el.amount)?.reduce((a, b) => a + b)
      : 0;
  return (
    <Wrapper>
      {cartItems.length === 0 ? (
        <CartItem margin="3rem 0">
          <Flex padding="2rem" justifyContent="center" width="100%">
            <Heading>Your cart is empty</Heading>
          </Flex>
        </CartItem>
      ) : (
        <>
          {error.msg.length > 0 && <ErrorMsg>{error.msg}</ErrorMsg>}
          <CartHeader />
          <Main>
            <CartItems cartItems={cartItems} setError={setErrorMsg} />
            <CartSummary totalAmount={totalAmount} />
          </Main>
        </>
      )}
    </Wrapper>
  );
};

export default Cart;
