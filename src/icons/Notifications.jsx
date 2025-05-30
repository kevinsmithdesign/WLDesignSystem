import React from "react";

const NotificationIcon = ({
  width = 32,
  height = 32,
  stroke = "#222",
  strokeWidth = 1.5,
  ...props
}) => {
  return (
    <svg
      id="Ringtone 2"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0006 4.2373C8.62335 4.2373 5.88475 6.97479 5.88475 10.352L5.88378 11.58C5.88378 12.3068 5.72324 13.0239 5.4148 13.6806L4.97987 14.603C4.31727 16.0129 5.34572 17.6339 6.90347 17.6339H17.0955C18.6543 17.6339 19.6827 16.0129 19.0191 14.603L18.5852 13.6806C18.2758 13.0239 18.1152 12.3068 18.1152 11.58V10.352C18.1152 6.97479 15.3778 4.2373 12.0006 4.2373Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M12 3V4.23764"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M8.98828 9.09873C9.12547 8.23568 9.72775 7.53221 10.546 7.2627"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M9.11328 18.1143C9.11328 19.708 10.4054 21.0001 11.9992 21.0001C13.5939 21.0001 14.886 19.708 14.886 18.1143"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default NotificationIcon;
