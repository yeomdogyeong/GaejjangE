import React from "react";

export const Health = () => {
  return (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g clipPath="url(#clip0_1163_5241)">
        <rect x="0.75" width="28" height="28" fill="url(#pattern0_1163_5241)" />
      </g>
      <defs>
        <pattern
          id="pattern0_1163_5241"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1163_5241" transform="scale(0.01)" />
        </pattern>
        <clipPath id="clip0_1163_5241">
          <rect
            width="28"
            height="28"
            fill="white"
            transform="translate(0.75)"
          />
        </clipPath>
        <image
          id="image0_1163_5241"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
