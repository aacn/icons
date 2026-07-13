import type { SVGProps } from 'react';

function CoffeeIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.4502 11.3838C16.6284 11.3839 16.7733 11.5279 16.7734 11.7061V15.7266C16.7734 17.1875 16.1404 18.5772 15.0391 19.5371C14.5683 19.9474 13.9653 20.1737 13.3408 20.1738H7.19531C6.57691 20.1738 5.97834 19.9538 5.50684 19.5537C4.3653 18.5848 3.70716 17.1633 3.70703 15.666V11.7012C3.70703 11.5258 3.84909 11.384 4.02441 11.3838H16.4502Z"
        stroke="currentColor"
      />
      <path
        d="M17.4704 12.7866H17.8198C19.1857 12.7866 20.2929 13.8939 20.2929 15.2598C20.2929 16.6256 19.1857 17.7329 17.8198 17.7329L16.7728 17.7329"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.09206 8.4043C6.43966 7.78066 6.43966 6.7387 7.09206 6.11507C7.74446 5.49144 7.74446 4.44947 7.09206 3.82584"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M10.2401 8.4043C9.58774 7.78066 9.58774 6.7387 10.2401 6.11507C10.8925 5.49144 10.8925 4.44947 10.2401 3.82584"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M13.3878 8.4043C12.7354 7.78066 12.7354 6.7387 13.3878 6.11507C14.0402 5.49144 14.0402 4.44947 13.3878 3.82584"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CoffeeIcon };
