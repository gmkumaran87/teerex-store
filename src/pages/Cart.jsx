import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import CartButton from "../components/CartButton";
import { useProductContext } from "../context/productsContext";
import { Flex } from "../styles/Common.styled";
import { laptop, tablet } from "../styles/responsive";
// import PropTypes from "prop-types";

const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  color: teal;
  gap: 1rem;
  height: calc(100vh - 70px);

  ${tablet({
    height: "100%",
    width: "100%",
    maxWidth: "35rem",
  })}

  ${laptop({
    height: "100%",
    width: "100%",
    maxWidth: "45rem",
  })}
`;
const Heading = styled.h2`
  font-size: 1rem;
  ${laptop({
    fontSize: "1.5rem",
  })}
`;

const CartItem = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 0.5rem;
  width: 100%;
  margin: ${({ margin }) => margin || "unset"};

  border-radius: 3px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 2px 4px 0px;

  ${laptop({
    padding: "0.7rem 1rem",
  })}
`;

const Image = styled.img`
  width: 5rem;
  height: 100%;
  border: 2px solid teal;
  border-radius: 3px;
  ${laptop({
    width: "8rem",
    height: "8rem",
  })}
`;

const ParaEl = styled.p`
  font-size: 0.85rem;
  font-weight: 500;

  ${laptop({
    fontSize: "1.2rem",
    fontWeight: 700,
  })}
`;
const ParaRuppee = styled.span`
  margin-left: ${({ marginLeft }) => marginLeft || "unset"};
  &::before {
    content: "₹ ";
  }
`;
const Cart = () => {
  const cartItems = useProductContext((state) => state.cartItems);

  const incrmtCartItem = useProductContext((s) => s.incrmtCartItem);
  const decrmtCartItem = useProductContext((s) => s.decrmtCartItem);

  const removeFromCart = useProductContext((state) => state.removeFromCart);
  const incrementCartItem = (id) => incrmtCartItem(id);

  const decrementCartItem = (id) => decrmtCartItem(id);

  const removeCartItem = (id) => removeFromCart(id);
  console.log("CartItems", cartItems);

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
          <Heading>Shopping Cart</Heading>
          {/* <CartBody> */}
          {cartItems?.map((el) => (
            <CartItem key={el.id}>
              <Flex gap="1rem" alignItems="flex-start" height="100%">
                <Image src={el.imageURL} />
                <Flex
                  direction="column nowrap"
                  gap=".5rem"
                  alignItems="flex-start"
                >
                  <ParaEl fontSize="1.2rem" fontWeight="700">
                    {el.name}
                  </ParaEl>
                  <ParaRuppee fontSize="1.2rem" fontWeight="700">
                    {el.price}
                  </ParaRuppee>
                </Flex>
              </Flex>
              <Flex
                direction="column"
                alignItems="flex-end"
                gap=".5rem"
                justifyContent="space-between"
                height="100%"
              >
                <ParaRuppee>{el.amount}</ParaRuppee>
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
                  padding="4px 8px"
                  borderRadius="3px"
                  fontSize={"1.1rem"}
                  clickHandler={() => removeCartItem(el.id)}
                >
                  Delete
                </Button>
              </Flex>
            </CartItem>
          ))}
          {/* </CartBody> */}
          <Flex
            justifyContent="center"
            width="100%"
            padding="1rem"
            alignItems="center"
          >
            <Heading>
              Total amount
              <ParaRuppee fontSize="1.2rem" fontWeight="700" marginLeft="1rem">
                {totalAmount}
              </ParaRuppee>
            </Heading>
          </Flex>
        </>
      )}
    </Wrapper>
  );
};

// Cart.propTypes = {};

export default Cart;
