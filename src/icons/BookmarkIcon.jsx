import React from "react";

const BookmarkIcon = ({
  width = 32,
  height = 32,
  stroke = "#222",
  strokeWidth = 1.5,
  ...props
}) => {
  return (
    <svg
      id="Bookmark"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.2269 6.58638C19.2269 4.02357 17.4766 3 14.9566 3H9.0399C6.59774 3 4.76758 3.95643 4.76758 6.41514V20.1165C4.76661 20.604 5.16163 21 5.65007 21C5.80185 21 5.95072 20.9611 6.08304 20.8871L12.026 17.5557L17.9134 20.8813C18.3386 21.1206 18.8776 20.9708 19.117 20.5456C19.1919 20.4133 19.2318 20.2644 19.2318 20.1117L19.2269 6.58638Z"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default BookmarkIcon;
