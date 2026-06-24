import type { SVGProps } from 'react';

function RadioIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M19.5068 8.00586L4.49249 8.00637C3.57908 8.00637 2.83862 8.74651 2.83862 9.65953V17.7003C2.83862 18.6133 3.57908 19.3534 4.49249 19.3534L16.3416 19.3529H19.5068C20.4202 19.3529 21.1606 18.6128 21.1606 17.6998L21.1606 9.65903C21.1606 8.74601 20.4202 8.00586 19.5068 8.00586Z"
        stroke="currentColor"
        stroke-linejoin="round"
      />
      <path
        d="M4.81567 7.89026L16.355 2.58203"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="8.46327"
        cy="13.6796"
        r="2.87511"
        transform="rotate(180 8.46327 13.6796)"
        stroke="currentColor"
      />
      <path
        d="M16.355 11.3545H17.9374"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.355 13.8228H17.9374"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.355 16.1782H17.9374"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="8.46311" cy="13.6799" r="0.966531" fill="currentColor" />
    </svg>
  );
}

export { RadioIcon };
