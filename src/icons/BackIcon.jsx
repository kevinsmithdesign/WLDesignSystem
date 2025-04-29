import React from "react";

const BackIcon = ({
  width = 32,
  height = 32,
  stroke = "#222",
  strokeWidth = 1.5,
  ...props
}) => {
  return (
    <svg
      id="Arrow - Left"
      width="32px"
      height="32px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>Iconly/Light/Arrow - Left</title>
      <g
        id="Iconly/Light/Arrow---Left"
        stroke="none"
        stroke-width="1.5"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g
          id="Arrow---Left"
          transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) translate(5.500000, 4.000000)"
          stroke={stroke}
          stroke-width="1.5"
        >
          <line
            x1="6.7743"
            y1="15.75"
            x2="6.7743"
            y2="0.75"
            id="Stroke-1"
          ></line>
          <polyline
            id="Stroke-3"
            points="12.7987 9.7002 6.7747 15.7502 0.7497 9.7002"
          ></polyline>
        </g>
      </g>
    </svg>
  );
};

export default BackIcon;
