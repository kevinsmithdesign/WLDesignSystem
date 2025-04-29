import React from "react";

const AddIcon = ({
  width = 32,
  height = 32,
  stroke = "#222",
  strokeWidth = 1.5,
  ...props
}) => {
  return (
    <svg
      id="Plus 4"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12H18"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M12 6V18"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default AddIcon;
