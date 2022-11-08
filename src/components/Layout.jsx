import React from "react";
import { Outlet } from "react-router-dom";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import { laptop } from "../styles/responsive";

const Wrapper = styled.section`
  padding: 0.51rem;
  ${laptop({
    padding: "1.5rem",
  })}
`;

const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

Layout.propTypes = {};

export default Layout;
