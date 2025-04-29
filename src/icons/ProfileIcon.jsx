import React from "react";

const ProfileIcon = ({
  width = 32,
  height = 32,
  stroke = "#222",
  strokeWidth = 1.5,
  ...props
}) => {
  return (
    <svg
      id="user"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.1504 12C21.1504 7.02908 17.1213 3 12.1504 3C7.17947 3 3.15039 7.02908 3.15039 12C3.15039 16.9699 7.17947 21 12.1504 21C17.1213 21 21.1504 16.9699 21.1504 12Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M7.00195 19.3744C7.20628 17.7884 8.61709 16.0273 12.1198 16.0273C15.6614 16.0273 17.0625 17.7982 17.2571 19.4036"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.4181 10.3267C15.4181 12.1471 13.943 13.6222 12.1226 13.6222C10.3022 13.6222 8.82617 12.1471 8.82617 10.3267C8.82617 8.50628 10.3022 7.03125 12.1226 7.03125C13.943 7.03125 15.4181 8.50628 15.4181 10.3267Z"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default ProfileIcon;
