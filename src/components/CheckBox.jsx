import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { laptop } from "../styles/responsive";

const CheckWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;

  ${laptop({
    flexFlow: "column nowrap",
    gap: "0.25rem",
  })}
`;

const ItemWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;
const InputCheckbox = styled.input`
  width: 1rem;
  margin: 0;
`;

const Lable = styled.label`
  font-size: 1.25rem;
  text-transform: capitalize;
`;

const CheckBox = ({ list, addingItem }) => {
  const handleChecked = (id, e) => {
    addingItem(id, e.target.checked);
  };
  return (
    <CheckWrapper>
      {list.map((el, index) => (
        <ItemWrapper key={el.id}>
          <InputCheckbox
            type="checkbox"
            value={el.name}
            id={index}
            checked={el.isChecked}
            onChange={(e) => handleChecked(el.id, e)}
          />
          <Lable htmlFor={el.index}>{el.name}</Lable>
        </ItemWrapper>
      ))}
    </CheckWrapper>
  );
};

CheckBox.propTypes = {
  list: PropTypes.array,
  addingItem: PropTypes.func,
};

export default CheckBox;
