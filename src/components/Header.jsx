import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useProductContext } from "../context/productsContext";
import useDebounce from "../hooks/useDebounce";
import { Flex, InputEl } from "../styles/Common.styled";
import { laptop } from "../styles/responsive";
import { Filter, Search } from "./icons";
import Modal from "./Modal";
import { createCheckboxItems } from "../common/helper";
import { GENDER } from "../common/constant";
import FilterMobile from "./FilterMobile";

const Wrapper = styled.div`
  flex: 7;
  /* padding: 0.25rem; */
`;

const IconWrapper = styled.div`
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.backgroundBlue};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FilterWrapper = styled.div`
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.backgroundBlue};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${laptop({
    display: "none",
  })}
`;
const Header = () => {
  const [product, setProduct] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const debouncedValue = useDebounce(product, 500);

  const searchProduct = useProductContext((state) => state.searchProduct);

  const products = useProductContext((state) => state.products);

  const { colorsArray, typesArray, priceArray } = createCheckboxItems(products);

  useEffect(() => {
    searchProduct(debouncedValue);
  }, [debouncedValue]);

  const handleChange = (e) => {
    setProduct(e.target.value);
  };

  return (
    <>
      {showFilters && (
        <Modal>
          <FilterMobile
            colors={colorsArray}
            types={typesArray}
            price={priceArray}
            gender={GENDER}
            closeHandler={() => setShowFilters(false)}
          />
        </Modal>
      )}
      <Flex gap=".5rem" margin="0 auto" width="100%" padding="4px 10px">
        <Wrapper>
          <InputEl
            type="text"
            placeholder="Search for products..."
            value={product}
            onChange={handleChange}
          />
        </Wrapper>
        <Flex flex="3" justifyContent="flex-start" gap=".75rem" color="teal">
          <IconWrapper>
            <Search />
          </IconWrapper>
          <FilterWrapper onClick={() => setShowFilters(true)}>
            <Filter />
          </FilterWrapper>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
