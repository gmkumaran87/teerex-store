import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  border-color: ${({ theme }) => theme.teal};
  border-style: solid;
  border-width: 1px;
  max-width: 6rem;
  border-radius: 3px;
  cursor: pointer;
`;

const Span = styled.span`
  font-weight: 500;
  padding: 4px 10px;
  border-left-style: solid;
  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.teal};
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.teal};
  color: ${({ theme }) => theme.teal};
`;

const CartButton = ({
  // quantity,
  selectedQty,
  decrementCartItem,
  incrementCartItem,
}) => {
  return (
    <Wrapper>
      <Button
        backgroundColor="transparent"
        height="24px"
        border="none"
        width="25px"
        color="teal"
        fontWeight="700"
        clickHandler={incrementCartItem}
      >
        +
      </Button>
      <Span>{selectedQty}</Span>
      <Button
        backgroundColor="transparent"
        height="24px"
        border="none"
        width="25px"
        color="teal"
        fontWeight="700"
        clickHandler={decrementCartItem}
        disabled={selectedQty === 1}
      >
        -
      </Button>
    </Wrapper>
  );
};

CartButton.propTypes = {
  selectedQty: PropTypes.number,
  incrementCartItem: PropTypes.func,
  decrementCartItem: PropTypes.func,
};

export default CartButton;
