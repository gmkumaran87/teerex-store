import styled from "styled-components";

export const Flex = styled.div `
  display: flex;
  flex-flow: ${({ direction }) => direction || "row"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  gap: ${({ gap }) => gap || "unset"};
  color: ${({ color }) => color || "unset"};
  background-color: ${({ backgroundColor }) => backgroundColor || "unset"};
  background: ${({ background }) => background || "unset"};
  border-radius: ${({ borderRadius }) => borderRadius || "unset"};
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "unset"};
  flex: ${({ flex }) => flex || "unset"};
  position: ${({ position }) => position || "unset"};
`;

export const Para = styled.p `
  font-family: "Ubuntu", sans-serif;
  line-height: ${({ lineHeight }) => lineHeight || "unset"};
  font-size: ${({ fontSize }) => fontSize || "1.25rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "unset"};
  text-align: ${({ textAlign }) => textAlign};
  margin: ${({ margin }) => margin || "unset"};
  /* padding-right: 4rem; */
`;

export const InputEl = styled.input `
  border-top: none;
  border-right: none;
  border-left: none;
  border-width: 1px;
  border-bottom-color: ${({ theme }) => theme.grey};
  width: 100%;
  padding: 0.5rem;
  font-family: "Urbanist", sans-serif;

  &::placeholder {
    font-family: "Urbanist", sans-serif;
    font-weight: 500;
    font-size: 1rem;
  }
`;

export const SpanEl = styled.span `
  position: ${({ position }) => position || "unset"};
  top: ${({ top }) => top || "unset"};
  left: ${({ left }) => left || "unset"};
  font-weight: ${({ fontWeight }) => fontWeight || "unset"};
`;
// ${({ theme }) => theme.backgroundBlue}