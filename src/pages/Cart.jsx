import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useProductContext } from "../context/productsContext";
import { Flex, Para } from "../styles/Common.styled";
// import PropTypes from "prop-types";

const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  color: teal;
  gap: 2rem;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
`;
const CartBody = styled.article`
  display: flex;
  flex-flow: column;
  gap: 2rem;
  margin-left: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 320px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border: 2px solid teal;
  border-radius: 3px;
`;

const Cart = () => {
  const cartItems = useProductContext((state) => state.cartItems);

  console.log("CartItems", cartItems);
  return (
    <Wrapper>
      <Heading>Shopping Cart</Heading>
      <CartBody>
        {cartItems?.map((el) => (
          <CartItem key={el.id}>
            <Image src={el.imageURL} />
            <Flex direction="column nowrap" gap=".5rem" alignItems="flex-start">
              <Para fontSize="1rem" fontWeight="700">
                {el.name}
              </Para>
              <Para
                fontSize=".85rem"
                fontWeight="700"
              >{`Rs. ${el.price}`}</Para>
            </Flex>
            <Button
              backgroundColor="teal"
              color="#fff"
              border="none"
              height="auto"
              padding="5px 10px"
              borderRadius="3px"
            >
              Delete
            </Button>
          </CartItem>
        ))}
      </CartBody>
    </Wrapper>
  );
};

// Cart.propTypes = {};

export default Cart;
