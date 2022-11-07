import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Product from "../components/Product";
import { fetchData } from "../services/products.service";
import { Flex } from "../styles/Common.styled";
// import PropTypes from "prop-types";

const resource = fetchData();

const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`;
const Products = () => {
  const products = resource?.products?.read();

  console.log("Products", products);
  const content = products.map((el) => <Product key={el.id} item={el} />);
  return (
    <Flex direction="column nowrap" gap="2rem" width="100%">
      <Header />
      <Wrapper>{content}</Wrapper>
    </Flex>
  );
};

Products.propTypes = {};

export default Products;
