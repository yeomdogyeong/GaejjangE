import React from "react";

interface Props {
  size?: 28 | 20;
}

export const LeftArrow = (props: Props) => {
  const { size = 28 } = props;

  if (size === 20) {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.85724 10H17.143"
          stroke="#111111"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M7.85718 5L2.85718 10L7.85718 15"
          stroke="#111111"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 14H24"
        stroke="#111111"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 7L4 14L11 21"
        stroke="#111111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
