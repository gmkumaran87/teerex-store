import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex } from "../styles/Common.styled";
import Button from "./Button";
import { laptop } from "../styles/responsive";
import { useProductContext } from "../context/productsContext";

const Card = styled.article`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.75rem;
  align-items: flex-start;
  justify-content: center;
  width: clamp(285px, 100%, 345px);
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 0.51rem;
  height: auto;
  background-color: ${({ theme }) => theme.backgroundBlue};
  ${laptop({
    width: "310px",
  })}
`;

const Heading = styled.h2`
  font-size: 0.91rem;
  font-weight: 700;
  letter-spacing: 2px;
  /* color: ${({ theme }) => theme.teal}; */
  color: teal;
`;

const Image = styled.img`
  width: 100%;
  height: 210px;
  border: 0.25rem solid rgb(20 125 125);
  border-radius: 4px;
`;

const Product = ({ item }) => {
  const { name, imageURL, price, id, isSelected, isSelectedQty } = item;
  // console.log("Products", name, imageURL);
  const addToCart = useProductContext((state) => state.addToCart);
  const addItemToCart = () => {
    console.log("ADding item", id);
    addToCart(id);
  };
  return (
    <Card>
      <Heading>{name}</Heading>
      <Image src={imageURL} />
      <Flex
        direction="row nowrap"
        justifyContent="space-between"
        width="100%"
        padding=".5rem"
      >
        <Heading>{`Rs.${price}`}</Heading>
        {isSelected ? (
          <>
            <button>+</button>
            <span>{isSelectedQty}</span>
            <button>-</button>
          </>
        ) : (
          <Button
            height={"30px"}
            padding="5px 10px"
            fontSize={".85rem"}
            backgroundColor={"teal"}
            color={"#fff"}
            clickHandler={addItemToCart}
          >
            Add to Cart
          </Button>
        )}
      </Flex>
    </Card>
  );
};

Product.propTypes = {
  products: PropTypes.object,
};

export default Product;
