import React, { useMemo } from "react";
import styled from "styled-components";
import { useProductContext } from "../context/productsContext";
import Button from "./Button";
// import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 1rem;
`;

const Pagination = ({ pages }) => {
  const handlePage = useProductContext((state) => state.handlePage);
  const pageNumbers = useMemo(
    () => Array.from({ length: pages }, (_, i) => i + 1),
    [pages]
  );

  const buttons = pageNumbers.map((btn) => (
    <Button
      key={btn}
      backgroundColor="teal"
      color="#fff"
      padding="3px 6px"
      width="35px"
      clickHandler={() => handlePage(btn)}
    >
      {btn}
    </Button>
  ));
  return <Wrapper>{buttons}</Wrapper>;
};

Pagination.propTypes = {};

export default Pagination;
