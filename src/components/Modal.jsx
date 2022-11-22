import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalWrapper>{children}</ModalWrapper>,
        document.body
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
