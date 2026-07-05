import type { SVGProps } from 'react';

function SoccerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9997" cy="11.9998" r="8.50128" stroke="currentColor" />
      <path
        d="M11.4118 9.05889C11.7623 8.80424 12.2369 8.80424 12.5874 9.05889L14.6148 10.5319C14.9653 10.7865 15.112 11.2379 14.9781 11.6499L14.2037 14.0333C14.0698 14.4453 13.6859 14.7242 13.2526 14.7242H10.7466C10.3134 14.7242 9.92945 14.4453 9.79558 14.0333L9.02118 11.6499C8.88731 11.2379 9.03397 10.7865 9.38445 10.5319L11.4118 9.05889Z"
        stroke="currentColor"
      />
      <path
        d="M11.9997 5.41823L9.90501 3.89631M11.9997 5.41823L14.0945 3.89631M11.9997 5.41823L11.9997 8.78467"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M8.50233 17.4613L9.55547 19.8267M8.50233 17.4613L5.92728 17.732M8.50233 17.4613L10.1856 14.5459"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.4971 17.4613L14.4439 19.8267M15.4971 17.4613L18.0721 17.732M15.4971 17.4613L13.8138 14.5459"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M18.3319 10.1239L19.2598 7.70664M18.3319 10.1239L20.3441 11.7534M18.3319 10.1239L15.0802 10.9952"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M5.78005 10.1239L4.85215 7.70664M5.78005 10.1239L3.76783 11.7534M5.78005 10.1239L9.03178 10.9952"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { SoccerIcon };
