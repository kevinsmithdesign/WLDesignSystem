import React from "react";

const SearchIcon = ({
  width = 32,
  height = 32,
  stroke = "#222",
  strokeWidth = 1.5,
  ...props
}) => {
  return (
    <svg
      id="Search"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>Iconly/Light-Outline/Search</title>
      <g
        id="Iconly/Light-Outline/Search"
        stroke="none"
        stroke-width="1.5"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Search" transform="translate(2.000000, 2.000000)" fill={stroke}>
          <path
            d="M9.7388,8.8817842e-14 C15.1088,8.8817842e-14 19.4768,4.368 19.4768,9.738 C19.4768,12.2715459 18.5045194,14.5822774 16.9134487,16.3164943 L20.0442,19.4407 C20.3372,19.7337 20.3382,20.2077 20.0452,20.5007 C19.8992,20.6487 19.7062,20.7217 19.5142,20.7217 C19.3232,20.7217 19.1312,20.6487 18.9842,20.5027 L15.8156604,17.3430042 C14.1488713,18.6778412 12.0354764,19.477 9.7388,19.477 C4.3688,19.477 -0.0002,15.108 -0.0002,9.738 C-0.0002,4.368 4.3688,8.8817842e-14 9.7388,8.8817842e-14 Z M9.7388,1.5 C5.1958,1.5 1.4998,5.195 1.4998,9.738 C1.4998,14.281 5.1958,17.977 9.7388,17.977 C14.2808,17.977 17.9768,14.281 17.9768,9.738 C17.9768,5.195 14.2808,1.5 9.7388,1.5 Z"
            id="Combined-Shape"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default SearchIcon;
