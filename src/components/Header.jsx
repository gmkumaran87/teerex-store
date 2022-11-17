import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useProductContext } from "../context/productsContext";
import useDebounce from "../hooks/useDebounce";
import { Flex, InputEl } from "../styles/Common.styled";
import { Filter, Search } from "./icons";

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
const Header = () => {
  const [product, setProduct] = useState(null);

  const debouncedValue = useDebounce(product, 500);

  const searchProduct = useProductContext((state) => state.searchProduct);

  useEffect(() => {
    if (debouncedValue) searchProduct(debouncedValue);
  }, [debouncedValue]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setProduct(e.target.value);
    // searchProduct(debouncedValue);
  };
  return (
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
        <IconWrapper>
          <Filter />
        </IconWrapper>
      </Flex>
    </Flex>
  );
};

export default Header;