import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CheckBox from "./CheckBox";
import { useState } from "react";
import { laptop } from "../styles/responsive";

const AsideWrapper = styled.aside`
  box-shadow: ${({ theme }) => theme.boxShadow};
  flex-flow: column nowrap;
  align-items: flex-start;
  display: none;
  ${laptop({
    flex: "2",
    display: "flex",
    padding: "1rem 2rem",
    height: "100vh",
    overflow: "auto",
  })}
`;

const FormControl = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 0.751rem;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h3`
  letter-spacing: 2px;
`;

const Filters = ({ colors, types, price }) => {
  const [focusbox, setFocusBox] = useState(colors);
  const [priceValues, setPriceValues] = useState(price);
  const [typeValues, setTypeValues] = useState(types);

  const handleColor = (index, isChecked) => {
    setFocusBox(
      focusbox.map((el) => {
        if (el.id === index) {
          return { ...el, isChecked: isChecked };
        } else {
          return el;
        }
      })
    );
  };

  const handleTypes = (index, isChecked) => {
    setTypeValues(
      typeValues.map((el) =>
        el.id === index ? { ...el, isChecked: isChecked } : el
      )
    );
  };

  const handlePrice = (index, isChecked) => {
    setPriceValues(
      priceValues.map((el) => (el.id === index ? { ...el, isChecked } : el))
    );
  };

  return (
    <AsideWrapper>
      <FormControl>
        <Heading>Colors</Heading>
        <CheckBox list={focusbox} addingItem={handleColor} />
      </FormControl>
      <FormControl>
        <Heading>Types</Heading>
        <CheckBox list={typeValues} addingItem={handleTypes} />
      </FormControl>
      <FormControl>
        <Heading>Price</Heading>
        <CheckBox list={priceValues} addingItem={handlePrice} />
      </FormControl>
    </AsideWrapper>
  );
};

Filters.propTypes = {
  colors: PropTypes.array,
  price: PropTypes.array,
  types: PropTypes.array,
  gender: PropTypes.array,
};

export default Filters;
