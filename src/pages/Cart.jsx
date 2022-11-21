import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import CartButton from "../components/CartButton";
import { useProductContext } from "../context/productsContext";
import { Flex, Para, SpanEl } from "../styles/Common.styled";
import { laptop, tablet } from "../styles/responsive";
// import PropTypes from "prop-types";

const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: teal;
  gap: 1rem;
  /* height: calc(100vh - 60px); */
  padding: 5px;

  ${tablet({
    height: "100%",
    width: "100%",
    // maxWidth: "35rem",
  })};

  ${laptop({
    height: "100%",
    width: "100%",
    // maxWidth: "45rem",
    padding: "0",
  })};
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

const Top = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* padding: 20px; */
`;

const Main = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.3rem;
  align-items: center;

  ${laptop({
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    width: "100%",
  })}
`;

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
    height: "100%",
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
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "300"};
`;

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
  gap: 2rem;
`;
const CartItem = styled.article`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  /* padding: 0.5rem; */
  width: 100%;
  margin: ${({ margin }) => margin || "unset"};

  border-radius: 3px;
  /* background-color: #fff; */
  /* box-shadow: rgb(0 0 0 / 12%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 2px 4px 0px; */

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
  /* border: 2px solid teal; */
  /* border-radius: 3px; */
  ${laptop({
    width: "180px",
    //   height: "8rem",
  })}
`;

/*const ParaEl = styled.p`
  font-size: 0.85rem;
  font-weight: 500;

  ${laptop({
    fontSize: "1.2rem",
    fontWeight: 700,
  })}
`;
const ParaRuppee = styled.span`
  margin-left: ${({ marginLeft }) => marginLeft || "unset"};
  &::before {
    content: "₹ ";
  }
`;
*/
const ErrorMsg = styled.p`
  color: red;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 2px;
  margin: 0 auto;
`;

const Cart = () => {
  const cartItems = useProductContext((state) => state.cartItems);

  const incrmtCartItem = useProductContext((s) => s.incrmtCartItem);
  const decrmtCartItem = useProductContext((s) => s.decrmtCartItem);

  const removeFromCart = useProductContext((state) => state.removeFromCart);

  const setErrorMsg = useProductContext((state) => state.setErrorMsg);
  const error = useProductContext((s) => s.error);
  // const [isError, setIsError] = useState(null);

  const incrementCartItem = (indx, id) => {
    console.log("Incrementing the items", cartItems[id], cartItems, id);
    if (cartItems[indx].quantity === cartItems[indx].selectedQty) {
      setErrorMsg("No stocks available");
      // setIsError(true);
    } else {
      incrmtCartItem(id);
    }
  };

  useEffect(() => {
    if (error.msg.length > 0) {
      setTimeout(() => {
        setErrorMsg("");
        // setIsError(true);
      }, 3000);
    }
  }, [error.msg]);
  const decrementCartItem = (indx, id) => decrmtCartItem(id);

  const removeCartItem = (id) => removeFromCart(id);
  console.log("CartItems", cartItems, error);

  const totalAmount =
    cartItems.length > 0
      ? cartItems?.map((el) => el.amount)?.reduce((a, b) => a + b)
      : 0;
  return (
    <Wrapper>
      {cartItems.length === 0 ? (
        <CartItem margin="3rem 0">
          <Flex padding="2rem" justifyContent="center" width="100%">
            <Heading>Your cart is empty</Heading>
          </Flex>
        </CartItem>
      ) : (
        <>
          <Heading>Your Cart</Heading>
          {/* <CartBody> */}
          {error.msg.length > 0 && <ErrorMsg>{error.msg}</ErrorMsg>}
          <Top>
            <Button
              backgroundColor="transparent"
              color="#000"
              fontWeight="600"
              fontSize=".8rem"
              padding="5px"
              border="1px solid #000"
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
          <Main>
            <ProductsWrapper>
              {cartItems?.map((el, index) => (
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
              ))}
            </ProductsWrapper>
            {/* </CartBody> */}
            <Summary>
              <Heading fontSize="1.5rem">Order Summary </Heading>
              <SummaryItemWrapper>
                <Flex justifyContent="space-between" width="100%">
                  <Item>Subtotal</Item>
                  <Price>{totalAmount}</Price>
                </Flex>
                <Flex justifyContent="space-between" width="100%">
                  <Item>Shipping Amount</Item>
                  <Price>
                    {totalAmount < 1000 ? totalAmount + 250 : totalAmount}
                  </Price>
                </Flex>
                <Flex justifyContent="space-between" width="100%">
                  <Item fontSize="24px" fontWeight="500">
                    Total amount
                  </Item>
                  <Price fontSize="20px" fontWeight="400">
                    {totalAmount}
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
          </Main>
        </>
      )}
    </Wrapper>
  );
};

// Cart.propTypes = {};

export default Cart;
