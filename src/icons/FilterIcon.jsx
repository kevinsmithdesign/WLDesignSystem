import React from "react";

const FilterIcon = ({
  width = 32,
  height = 32,
  stroke = "#222",
  strokeWidth = 1.5,
  ...props
}) => {
  return (
    <svg
      id="preferences"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5584 18.8573C18.5496 20.0492 17.5766 21.0086 16.3847 21.0008C15.1967 20.9969 14.2364 20.0307 14.2402 18.8417V18.8281C14.249 17.6352 15.222 16.6759 16.4139 16.6836C17.6058 16.6914 18.5662 17.6644 18.5584 18.8573Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M11.8279 12.0146C11.8192 13.2074 10.8462 14.1668 9.65426 14.159C8.46623 14.1551 7.50589 13.188 7.50978 12V11.9854C7.51853 10.7934 8.49153 9.8331 9.68345 9.84186C10.8754 9.84964 11.8357 10.8226 11.8279 12.0146Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M18.1521 5.17372C18.1434 6.36563 17.1704 7.32501 15.9785 7.31722C14.7904 7.31333 13.8301 6.34715 13.834 5.15815V5.14453C13.8428 3.95164 14.8157 2.99226 16.0077 3.00005C17.1996 3.00783 18.1599 3.98083 18.1521 5.17372Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M4.64844 18.8418H14.2402M18.5611 18.8418H21.3108"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M4.64844 12.002H7.50807M11.8281 12.002H21.3109"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M4.64844 5.1582H13.8296M18.1487 5.1582H21.31"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default FilterIcon;
