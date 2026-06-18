import type { SVGProps } from 'react';

function MountainIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M18.4583 12.0806L17.7012 11.3882C17.2726 10.9962 16.6157 10.9962 16.1871 11.3882C15.7585 11.7802 15.1016 11.7802 14.6729 11.3882C14.2443 10.9962 13.5874 10.9962 13.1588 11.3882C12.7302 11.7802 12.0733 11.7802 11.6447 11.3882L10.8876 10.6958"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M9.16901 12.7069L8.54398 13.2785C8.19013 13.6021 7.64778 13.6021 7.29393 13.2785C6.94007 12.9549 6.39773 12.9549 6.04387 13.2785C5.69002 13.6021 5.14767 13.6021 4.79382 13.2785L4.16879 12.7069"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M1.17521 15.6466L5.57277 10.5363C6.15738 9.85691 7.23237 9.93631 7.71083 10.6942L9.01835 12.7653"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M5.44043 17.7382L13.0693 7.66431C13.6028 6.95982 14.6616 6.95982 15.1951 7.66431L22.824 17.7382"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { MountainIcon };
