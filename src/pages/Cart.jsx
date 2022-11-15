import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import CartButton from "../components/CartButton";
import { useProductContext } from "../context/productsContext";
import { Flex, Para } from "../styles/Common.styled";
import { laptop } from "../styles/responsive";
// import PropTypes from "prop-types";

const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  color: teal;
  gap: 2rem;
  height: calc(100vh - 70px);

  ${laptop({
    height: "100%",
    width: "100%",
    maxWidth: "45rem",
  })}
`;

const Heading = styled.h2`
  font-size: 1.5rem;
`;
/*
const CartBody = styled.article`
  display: flex;
  flex-flow: column;
  gap: 2rem;
  
  padding: 1rem;
  width: 90%;
`;
*/
const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 0.5rem 1rem;
  /* height: 110px; */
  width: 100%;
  border-bottom: 1px solid teal;
  background-color: #fff;
  /* width: 320px; */
`;

const Image = styled.img`
  width: 8rem;
  height: 8rem;
  border: 2px solid teal;
  border-radius: 3px;
`;

const Cart = () => {
  const cartItems = useProductContext((state) => state.cartItems);

  const incrmtCartItem = useProductContext((s) => s.incrmtCartItem);
  const decrmtCartItem = useProductContext((s) => s.decrmtCartItem);

  const incrementCartItem = (id) => incrmtCartItem(id);

  const decrementCartItem = (id) => decrmtCartItem(id);
  console.log("CartItems", cartItems);
  return (
    <Wrapper>
      <Heading>Shopping Cart</Heading>
      {/* <CartBody> */}
      {cartItems?.map((el) => (
        <CartItem key={el.id}>
          <Flex gap="1rem" alignItems="flex-start">
            <Image src={el.imageURL} />
            <Flex direction="column nowrap" gap=".5rem" alignItems="flex-start">
              <Para fontSize="1.2rem" fontWeight="700">
                {el.name}
              </Para>
              <Para
                fontSize="1.2rem"
                fontWeight="700"
              >{`Rs. ${el.price}`}</Para>
            </Flex>
          </Flex>
          <Flex
            direction="column"
            alignItems="flex-end"
            gap=".5rem"
            justifyContent="space-between"
          >
            <Para>₹ 235</Para>
            <CartButton
              selectedQty={el.selectedQty}
              incrementCartItem={() => incrementCartItem(el.id)}
              decrementCartItem={() => decrementCartItem(el.id)}
            />
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
          </Flex>
        </CartItem>
      ))}
      {/* </CartBody> */}
    </Wrapper>
  );
};

// Cart.propTypes = {};

export default Cart;
