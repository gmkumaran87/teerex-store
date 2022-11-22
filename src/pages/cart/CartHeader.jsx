import React from "react";
import styled from "styled-components";
import { laptop } from "../../styles/responsive";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Top = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
const CartHeader = () => {
  const navigate = useNavigate();

  const continueShopping = () => navigate("/teerex-store");
  return (
    <>
      <Heading>Your Cart</Heading>
      <Top>
        <Button
          backgroundColor="transparent"
          color="#000"
          fontWeight="600"
          fontSize=".8rem"
          padding="5px"
          border="1px solid #000"
          clickHandler={continueShopping}
        >
          CONTINUE SHOPPING
        </Button>
        <Button
          backgroundColor="#000"
          color="#fff"
          fontWeight="600"
          fontSize=".8rem"
          padding="5px"
          border="none"
        >
          CHECKOUT NOW
        </Button>
      </Top>
    </>
  );
};

CartHeader.propTypes = {};

export default CartHeader;
