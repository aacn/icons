import type { SVGProps } from 'react';

function CameraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.8736 9.66179C17.8736 7.66425 16.2543 6.04492 14.2568 6.04492"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M19.7495 9.6617C19.7495 6.62813 17.2903 4.16895 14.2568 4.16895"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M4.39258 11.0686C4.39258 9.2277 5.88493 7.73535 7.72583 7.73535H13.0112C14.8521 7.73535 16.3444 9.2277 16.3444 11.0686V16.354C16.3444 18.1949 14.8521 19.6872 13.0112 19.6872H7.72583C5.88492 19.6872 4.39258 18.1949 4.39258 16.354V11.0686Z"
        stroke="currentColor"
      />
      <circle cx="10.3714" cy="13.7112" r="2.6931" stroke="currentColor" />
      <circle
        cx="10.3719"
        cy="13.7118"
        r="0.972034"
        fill="currentColor"
        stroke="currentColor"
      />
      <circle cx="13.8542" cy="10.2209" r="0.78974" fill="currentColor" />
    </svg>
  );
}

export { CameraIcon };
