import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CheckBox from "./CheckBox";
import { useState } from "react";
import { laptop } from "../styles/responsive";
import { useProductContext } from "../context/productsContext";
import { LeftIcon } from "./icons";
import { Flex, HR } from "../styles/Common.styled";

const AsideWrapper = styled.aside`
  flex-flow: column nowrap;
  align-items: flex-start;
  display: flex;
  gap: 1rem;
  width: 100%;
  background-color: #fff;
  overflow: auto;
  height: 100vh;
  padding: 1rem 0.5rem;

  ${laptop({
    display: "none",
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

const FilterMobile = ({ colors, types, price, gender, closeHandler }) => {
  const filterProducts = useProductContext((state) => state.filterProducts);
  const removeFilters = useProductContext((state) => state.removeFilters);
  const filterOptions = useProductContext((state) => state.filterOptions);

  [...filterOptions.color].forEach((el) => {
    colors = colors.map((color) =>
      el === color.name ? { ...color, isChecked: true } : color
    );
  });

  [...filterOptions.type].forEach((el) => {
    types = types.map((type) =>
      type.name === el ? { ...type, isChecked: true } : type
    );
  });

  [...filterOptions.price].forEach((el) => {
    price = price.map((p) => (p.name === el ? { ...p, isChecked: true } : p));
  });

  [...filterOptions.gender].forEach((el) => {
    gender = gender.map((p) => (p.name === el ? { ...p, isChecked: true } : p));
  });

  const [focusbox, setFocusBox] = useState(colors);
  const [priceValues, setPriceValues] = useState(price);
  const [typeValues, setTypeValues] = useState(types);
  const [genderValues, setGenderValues] = useState(gender);

  const handleColor = (index, isChecked) => {
    // Getting the colors selected
    const filteredColor = focusbox[index].name;

    // Setting the colors option in filterOptions order
    // Send {'color' : count}

    setFocusBox(
      focusbox.map((el) => {
        if (el.id === index) {
          return { ...el, isChecked: isChecked };
        } else {
          return el;
        }
      })
    );
    if (isChecked) {
      filterProducts(filteredColor, "color");
    } else {
      removeFilters(filteredColor, "color");
    }
  };

  const handleTypes = (index, isChecked) => {
    const filteredType = typeValues[index].name;

    setTypeValues(
      typeValues.map((el) =>
        el.id === index ? { ...el, isChecked: isChecked } : el
      )
    );

    if (isChecked) {
      filterProducts(filteredType, "type");
    } else {
      removeFilters(filteredType, "type");
    }
  };

  const handlePrice = (index, isChecked) => {
    const filteredPrice = priceValues[index].name;

    setPriceValues(
      priceValues.map((el) => (el.id === index ? { ...el, isChecked } : el))
    );

    if (isChecked) {
      filterProducts(filteredPrice, "price");
    } else {
      removeFilters(filteredPrice, "price");
    }
  };

  const handleGender = (index, isChecked) => {
    const filteredGender = genderValues[index].name;

    setGenderValues(
      genderValues.map((el) => (el.id === index ? { ...el, isChecked } : el))
    );

    if (isChecked) {
      filterProducts(filteredGender, "gender");
    } else {
      removeFilters(filteredGender, "gender");
    }
  };

  return (
    <AsideWrapper>
      <Flex width="100%" justifyContent="flex-start">
        <LeftIcon closeHandler={closeHandler} />
        <span>Back</span>
      </Flex>
      <HR backgroundColor="teal" />
      <FormControl>
        <Heading>Colors</Heading>
        <CheckBox list={focusbox} addingItem={handleColor} />
      </FormControl>
      <FormControl>
        <Heading>Gender</Heading>
        <CheckBox list={genderValues} addingItem={handleGender} />
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

FilterMobile.propTypes = {
  colors: PropTypes.array,
  price: PropTypes.array,
  types: PropTypes.array,
  gender: PropTypes.array,
};

export default FilterMobile;
