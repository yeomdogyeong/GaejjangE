import React from "react";
import { useMemo } from "react";

interface Props {
  fill?: boolean;
  color?: string;
}

export default function FeedIcon(props: Props) {
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
          d="M6.5 9.32C6.5 7.80786 6.5 7.05179 6.82698 6.47423C7.1146 5.96619 7.57354 5.55314 8.13803 5.29428C8.77976 5 9.61984 5 11.3 5H17.7C19.3802 5 20.2202 5 20.862 5.29428C21.4265 5.55314 21.8854 5.96619 22.173 6.47423C22.5 7.05179 22.5 7.80786 22.5 9.32V18.68C22.5 20.1921 22.5 20.9482 22.173 21.5258C21.8854 22.0338 21.4265 22.4469 20.862 22.7057C20.2202 23 19.3802 23 17.7 23H11.3C9.61984 23 8.77976 23 8.13803 22.7057C7.57354 22.4469 7.1146 22.0338 6.82698 21.5258C6.5 20.9482 6.5 20.1921 6.5 18.68V9.32Z"
          fill={color}
        />
        <path
          d="M16.5 13.1H10.5M12.5 16.7H10.5M18.5 9.5H10.5M22.5 9.32V18.68C22.5 20.1921 22.5 20.9482 22.173 21.5258C21.8854 22.0338 21.4265 22.4469 20.862 22.7057C20.2202 23 19.3802 23 17.7 23H11.3C9.61984 23 8.77976 23 8.13803 22.7057C7.57354 22.4469 7.1146 22.0338 6.82698 21.5258C6.5 20.9482 6.5 20.1921 6.5 18.68V9.32C6.5 7.80786 6.5 7.05179 6.82698 6.47423C7.1146 5.96619 7.57354 5.55314 8.13803 5.29428C8.77976 5 9.61984 5 11.3 5H17.7C19.3802 5 20.2202 5 20.862 5.29428C21.4265 5.55314 21.8854 5.96619 22.173 6.47423C22.5 7.05179 22.5 7.80786 22.5 9.32Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.5 9.32C6.5 7.80786 6.5 7.05179 6.82698 6.47423C7.1146 5.96619 7.57354 5.55314 8.13803 5.29428C8.77976 5 9.61984 5 11.3 5H17.7C19.3802 5 20.2202 5 20.862 5.29428C21.4265 5.55314 21.8854 5.96619 22.173 6.47423C22.5 7.05179 22.5 7.80786 22.5 9.32V18.68C22.5 20.1921 22.5 20.9482 22.173 21.5258C21.8854 22.0338 21.4265 22.4469 20.862 22.7057C20.2202 23 19.3802 23 17.7 23H11.3C9.61984 23 8.77976 23 8.13803 22.7057C7.57354 22.4469 7.1146 22.0338 6.82698 21.5258C6.5 20.9482 6.5 20.1921 6.5 18.68V9.32Z"
          fill={color}
        />
        <path
          d="M16.5 13.1H10.5M12.5 16.7H10.5M18.5 9.5H10.5M22.5 9.32V18.68C22.5 20.1921 22.5 20.9482 22.173 21.5258C21.8854 22.0338 21.4265 22.4469 20.862 22.7057C20.2202 23 19.3802 23 17.7 23H11.3C9.61984 23 8.77976 23 8.13803 22.7057C7.57354 22.4469 7.1146 22.0338 6.82698 21.5258C6.5 20.9482 6.5 20.1921 6.5 18.68V9.32C6.5 7.80786 6.5 7.05179 6.82698 6.47423C7.1146 5.96619 7.57354 5.55314 8.13803 5.29428C8.77976 5 9.61984 5 11.3 5H17.7C19.3802 5 20.2202 5 20.862 5.29428C21.4265 5.55314 21.8854 5.96619 22.173 6.47423C22.5 7.05179 22.5 7.80786 22.5 9.32Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.5 13.1H10.5M12.5 16.7H10.5M18.5 9.5H10.5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
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
        d="M16.4688 13.1H10.4688M12.4688 16.7H10.4688M18.4688 9.5H10.4688M22.4688 9.32V18.68C22.4688 20.1921 22.4687 20.9482 22.1418 21.5258C21.8541 22.0338 21.3952 22.4469 20.8307 22.7057C20.189 23 19.3489 23 17.6687 23H11.2688C9.58859 23 8.74851 23 8.10678 22.7057C7.54229 22.4469 7.08335 22.0338 6.79573 21.5258C6.46875 20.9482 6.46875 20.1921 6.46875 18.68V9.32C6.46875 7.80786 6.46875 7.05179 6.79573 6.47423C7.08335 5.96619 7.54229 5.55314 8.10678 5.29428C8.74851 5 9.58859 5 11.2688 5H17.6687C19.3489 5 20.189 5 20.8307 5.29428C21.3952 5.55314 21.8541 5.96619 22.1418 6.47423C22.4687 7.05179 22.4688 7.80786 22.4688 9.32Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
