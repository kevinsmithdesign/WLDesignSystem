import React from "react";

const SendIcon = ({
  width = 32,
  height = 32,
  stroke = "#222",
  strokeWidth = 1.5,
  ...props
}) => {
  return (
    <svg
      id="Send"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>Iconly/Light/Send</title>
      <g
        id="Iconly/Light/Send"
        stroke="none"
        stroke-width="1.5"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g
          id="Send"
          transform="translate(3.000000, 3.000000)"
          stroke={stroke}
          stroke-width="1.5"
        >
          <path d="M12.8324759,5.17463303 L7.10903824,10.9591851 L0.599436312,6.88767232 C-0.333249591,6.30414294 -0.139234755,4.88743509 0.915720913,4.57892564 L16.3712257,0.0527673159 C17.3372579,-0.230371288 18.2325555,0.67283071 17.9455752,1.6419969 L13.3730902,17.0867511 C13.059837,18.1431929 11.6512085,18.331952 11.073206,17.3952605 L7.10600676,10.9602"></path>
        </g>
      </g>
    </svg>
  );
};

export default SendIcon;
