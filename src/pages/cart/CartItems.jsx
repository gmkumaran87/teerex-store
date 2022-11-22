import React from "react";
import PropTypes from "prop-types";
import { useProductContext } from "../../context/productsContext";
import { Flex, HR, Para, SpanEl } from "../../styles/Common.styled";
import Button from "../../components/Button";
import CartButton from "../../components/CartButton";
import styled from "styled-components";
import { laptop } from "../../styles/responsive";

const Price = styled.span`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
  &::before {
    content: "₹ ";
  }
`;
const ProductsWrapper = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  margin-top: 1rem;
`;
const CartItem = styled.article`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  margin: ${({ margin }) => margin || "unset"};
  border-radius: 3px;

  ${laptop({
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexFlow: "row nowrap",
  })}
`;

const CartItemDetail = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;

  ${laptop({
    gap: "1rem",
  })}
`;

const CartActionWrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 2rem;

  ${laptop({
    flexFlow: "column nowrap",
    justifyContent: "space-between",
  })}
`;
const Image = styled.img`
  width: 175px;
  height: 100%;

  ${laptop({
    width: "180px",
  })}
`;

const CartItems = ({ cartItems, setError }) => {
  const incrmtCartItem = useProductContext((s) => s.incrmtCartItem);
  const decrmtCartItem = useProductContext((s) => s.decrmtCartItem);

  const removeFromCart = useProductContext((state) => state.removeFromCart);

  const incrementCartItem = (indx, id) => {
    if (cartItems[indx].quantity === cartItems[indx].selectedQty) {
      setError("No stocks available");
    } else {
      incrmtCartItem(id);
    }
  };

  const decrementCartItem = (indx, id) => decrmtCartItem(id);

  const removeCartItem = (id) => removeFromCart(id);

  return (
    <div>
      <ProductsWrapper>
        {cartItems?.map((el, index) => (
          <>
            <CartItem key={el.id}>
              <CartItemDetail>
                <Flex>
                  <Image src={el.imageURL} />
                </Flex>
                <Flex
                  direction="column nowrap"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  padding="10px"
                  gap="1rem"
                >
                  <Para fontSize="1rem" fontWeight="600">
                    Product: <SpanEl fontWeight="300">{el.name}</SpanEl>
                  </Para>
                  <Para fontSize="1rem">
                    Color: <SpanEl>{el.color}</SpanEl>
                  </Para>
                  <Para fontSize="1rem">
                    Price: <Price>{el.price}</Price>
                  </Para>
                </Flex>
              </CartItemDetail>
              <CartActionWrapper
                direction="row"
                alignItems="flex-end"
                gap=".5rem"
                justifyContent="space-around"
                width="100%"
                height="100%"
              >
                <CartButton
                  selectedQty={el.selectedQty}
                  incrementCartItem={() => incrementCartItem(index, el.id)}
                  decrementCartItem={() => decrementCartItem(index, el.id)}
                />
                <Button
                  backgroundColor="teal"
                  color="#fff"
                  border="none"
                  height="auto"
                  padding="4px 8px"
                  borderRadius="3px"
                  fontSize={"1.1rem"}
                  clickHandler={() => removeCartItem(el.id)}
                >
                  Delete
                </Button>
              </CartActionWrapper>
            </CartItem>
            <HR />
          </>
        ))}
      </ProductsWrapper>
    </div>
  );
};

CartItems.propTypes = {
  cartItems: PropTypes.array,
};

export default CartItems;
