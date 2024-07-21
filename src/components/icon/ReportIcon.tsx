import React from "react";
import { useMemo } from "react";

interface Props {
  fill?: boolean;
  color?: string;
}

export default function ReportIcon(props: Props) {
  const { fill, color = "#999999" } = props;

  if (fill) {
    return (
      <svg
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 9.33333C4.5 7.46649 4.5 6.53307 4.86331 5.82003C5.18289 5.19282 5.69282 4.68289 6.32003 4.36331C7.03307 4 7.96649 4 9.83333 4H19.1667C21.0335 4 21.9669 4 22.68 4.36331C23.3072 4.68289 23.8171 5.19282 24.1367 5.82003C24.5 6.53307 24.5 7.46649 24.5 9.33333V18.6667C24.5 20.5335 24.5 21.4669 24.1367 22.18C23.8171 22.8072 23.3072 23.3171 22.68 23.6367C21.9669 24 21.0335 24 19.1667 24H9.83333C7.96649 24 7.03307 24 6.32003 23.6367C5.69282 23.3171 5.18289 22.8072 4.86331 22.18C4.5 21.4669 4.5 20.5335 4.5 18.6667V9.33333Z"
          fill={color}
        />
        <path d="M10.0556 15.1111V19.5556V15.1111Z" fill="#2FA464" />
        <path d="M18.9444 12.8889V19.5556V12.8889Z" fill="#2FA464" />
        <path d="M14.5 8.44444V19.5556V8.44444Z" fill="#2FA464" />
        <path
          d="M10.0556 15.1111V19.5556M18.9444 12.8889V19.5556M14.5 8.44444V19.5556M9.83333 24H19.1667C21.0335 24 21.9669 24 22.68 23.6367C23.3072 23.3171 23.8171 22.8072 24.1367 22.18C24.5 21.4669 24.5 20.5335 24.5 18.6667V9.33333C24.5 7.46649 24.5 6.53307 24.1367 5.82003C23.8171 5.19282 23.3072 4.68289 22.68 4.36331C21.9669 4 21.0335 4 19.1667 4H9.83333C7.96649 4 7.03307 4 6.32003 4.36331C5.69282 4.68289 5.18289 5.19282 4.86331 5.82003C4.5 6.53307 4.5 7.46649 4.5 9.33333V18.6667C4.5 20.5335 4.5 21.4669 4.86331 22.18C5.18289 22.8072 5.69282 23.3171 6.32003 23.6367C7.03307 24 7.96649 24 9.83333 24Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10.0557 15.111V19.5554V15.111Z" fill={color} />
        <path d="M18.9446 12.8888V19.5554V12.8888Z" fill={color} />
        <path d="M14.5001 8.44434V19.5554V8.44434Z" fill={color} />
        <path
          d="M10.0557 15.111V19.5554M18.9446 12.8888V19.5554M14.5001 8.44434V19.5554"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0556 15.1111V19.5556M18.9444 12.8889V19.5556M14.5 8.44444V19.5556M9.83333 24H19.1667C21.0335 24 21.9669 24 22.68 23.6367C23.3072 23.3171 23.8171 22.8072 24.1367 22.18C24.5 21.4669 24.5 20.5335 24.5 18.6667V9.33333C24.5 7.46649 24.5 6.53307 24.1367 5.82003C23.8171 5.19282 23.3072 4.68289 22.68 4.36331C21.9669 4 21.0335 4 19.1667 4H9.83333C7.96649 4 7.03307 4 6.32003 4.36331C5.69282 4.68289 5.18289 5.19282 4.86331 5.82003C4.5 6.53307 4.5 7.46649 4.5 9.33333V18.6667C4.5 20.5335 4.5 21.4669 4.86331 22.18C5.18289 22.8072 5.69282 23.3171 6.32003 23.6367C7.03307 24 7.96649 24 9.83333 24Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
