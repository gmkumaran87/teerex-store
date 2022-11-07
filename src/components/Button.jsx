import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonElement = styled.button`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor === "teal" ? theme.teal : "blue"};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "36px"};
  cursor: ${({ cursor, disabled }) =>
    !disabled ? cursor || "pointer" : "not-allowed"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "700"};

  border: ${({ border }) => border || "none"};
`;

const Button = ({
  disabled,
  type,
  backgroundColor,
  color,
  padding,
  children,
  border,
  width,
  height,
  cursor,
  fontSize,
}) => {
  return (
    <ButtonElement
      disabled={disabled}
      type={type}
      backgroundColor={backgroundColor}
      color={color}
      padding={padding}
      border={border}
      width={width}
      height={height}
      cursor={cursor}
      fontSize={fontSize}
    >
      {children}
    </ButtonElement>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  cursor: PropTypes.string,
  fontSize: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
