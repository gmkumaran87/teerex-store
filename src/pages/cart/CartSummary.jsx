import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex, SpanEl } from "../../styles/Common.styled";
import { laptop } from "../../styles/responsive";
import { FREE_SHIPPING_LIMIT, SHIPPING_AMT } from "../../common/constant";
import Button from "../../components/Button";

const Summary = styled.section`
  padding: 20px;
  height: 45vh;
  border: 1px solid lightsteelblue;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  ${laptop({
    width: "300px",
    flex: 1.75,
    height: "50vh",
    padding: "20px 10px",
  })}
`;

const SummaryItemWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Item = styled.p`
  font-size: ${({ fontSize }) => fontSize || "1.2rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
`;

const Price = styled.span`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
  &::before {
    content: "₹ ";
  }
`;
const Heading = styled.h1`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;

  ${laptop({
    fontSize: "1.5rem",
    fontWeight: "300",
  })}
`;
const CartSummary = ({ totalAmount }) => {
  return (
    <Summary>
      <Heading fontSize="1.5rem">Order Summary </Heading>
      <SummaryItemWrapper>
        <Flex justifyContent="space-between" width="100%">
          <Item>Subtotal</Item>
          <Price>{totalAmount}</Price>
        </Flex>
        <Flex justifyContent="space-between" width="100%">
          <Flex direction="column" alignItems="flex-start">
            <Item>Shipping Amount</Item>
            <SpanEl fontSize=".65rem" color="#003">
              Applicable if the total amount is less than {FREE_SHIPPING_LIMIT}
            </SpanEl>
          </Flex>
          <Price>{SHIPPING_AMT}</Price>
        </Flex>
        <Flex justifyContent="space-between" width="100%">
          <Item fontSize="24px" fontWeight="500">
            Total amount
          </Item>
          <Price fontSize="20px" fontWeight="400">
            {totalAmount < FREE_SHIPPING_LIMIT
              ? totalAmount + SHIPPING_AMT
              : totalAmount}
          </Price>
        </Flex>
      </SummaryItemWrapper>
      <Flex width="100%" justifyContent="center">
        <Button
          backgroundColor="#000"
          color="#fff"
          fontWeight="600"
          fontSize=".8rem"
          padding="10px"
          border="none"
          width="90%"
        >
          CHECKOUT NOW
        </Button>
      </Flex>
    </Summary>
  );
};

CartSummary.propTypes = {
  totalAmount: PropTypes.number,
};

export default CartSummary;
