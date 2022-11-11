import React, { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

import styled from "styled-components";
import { GENDER } from "../common/constant";
import { createCheckboxItems } from "../common/helper";
import Filters from "../components/Filters";
import Header from "../components/Header";
import Product from "../components/Product";
import { useProductContext } from "../context/productsContext";
import { fetchData } from "../services/products.service";
import { Flex } from "../styles/Common.styled";
// import PropTypes from "prop-types";

import { laptop, tablet, desktop } from "../styles/responsive";

const resource = fetchData();

const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  ${tablet({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    placeItems: "center",
  })}

  ${laptop({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "0 2rem",
    gap: "2rem",
  })}

  ${desktop({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    padding: "0 3rem",
  })}
`;
const ItemsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  ${laptop({
    flexFlow: "row nowrap",
    gridTemplateColumns: "250px 1fr",
  })};
`;
const Products = () => {
  const products = resource?.products?.read();

  const addProducts = useProductContext((state) => state.addProducts);
  const filteredProducts = useProductContext((state) => state.fProducts);

  const { colorsArray, typesArray, priceArray } = createCheckboxItems(products);

  useEffect(() => {
    addProducts(products);
  }, [products]);

  // console.log("Checkboxes", colorsArray, typesArray, priceArray);
  const finalProducts = filteredProducts || products;

  const content = finalProducts.map((el) => <Product key={el.id} item={el} />);

  console.log("Products", filteredProducts);
  return (
    <Flex direction="column nowrap" gap="2rem" width="100%">
      <Header />
      <ItemsWrapper>
        <ErrorBoundary fallback={<h3>Filters are not available</h3>}>
          <Filters
            colors={colorsArray}
            types={typesArray}
            price={priceArray}
            gender={GENDER}
          />
        </ErrorBoundary>
        <Wrapper>{content}</Wrapper>
      </ItemsWrapper>
    </Flex>
  );
};

Products.propTypes = {};

export default Products;
