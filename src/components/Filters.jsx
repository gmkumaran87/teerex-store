import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CheckBox from "./CheckBox";
import { useState } from "react";
import { laptop } from "../styles/responsive";
import { useProductContext } from "../context/productsContext";

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

const Filters = ({ colors, types, price, gender }) => {
  const filterProducts = useProductContext((state) => state.filterProducts);
  const removeFilters = useProductContext((state) => state.removeFilters);
  const filterOptions = useProductContext((state) => state.filterOptions);
  // const filterOrder = useProductContext((state) => state.filterOrder);

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

  // const newColors = colors.map((el) => el.n);
  // console.log("ColorCheck", colors);
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
    // console.log("Gender", index, isChecked, genderValues);
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

  /* console.log("Filter color", {
    filterOptions,
    filterOrder,
  });*/
  return (
    <AsideWrapper>
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

Filters.propTypes = {
  colors: PropTypes.array,
  price: PropTypes.array,
  types: PropTypes.array,
  gender: PropTypes.array,
};

export default Filters;
