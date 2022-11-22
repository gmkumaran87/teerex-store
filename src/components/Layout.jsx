import React from "react";
import { Outlet, useLocation } from "react-router-dom";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import { laptop, tablet } from "../styles/responsive";

const Wrapper = styled.section`
  padding: 0.51rem;
  background-color: ${({ backgroundColor }) => backgroundColor};

  ${tablet({
    display: "flex",
    justifyContent: "center",
  })}
  ${laptop({
    padding: "1.5rem",
    height: "calc(100vh - 70px)",
    display: "flex",
    justifyContent: "center",
  })}
`;

const Layout = () => {
  const search = useLocation();
  const isCart = search.pathname === "/teerex-store/cart";

  return (
    <Wrapper backgroundColor={isCart ? "#fff" : "#f7f8fb"}>
      <Outlet />
    </Wrapper>
  );
};

Layout.propTypes = {};

export default Layout;
