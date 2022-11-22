import React from "react";
import PropTypes from "prop-types";

const CloseIcon = ({ closeHandler }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
      onClick={closeHandler}
      width="25"
      height="25"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

CloseIcon.propTypes = {
  clickHandler: PropTypes.func,
};

export default CloseIcon;
