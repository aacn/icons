import type { SVGProps } from 'react';

function MushroomIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.37195 10.9441C6.37195 7.83601 8.89155 5.31641 11.9996 5.31641C15.1077 5.31641 17.6273 7.83601 17.6273 10.9441V11.1005C17.6273 11.7273 17.1594 12.2554 16.5372 12.3309L15.3826 12.4711C13.1355 12.7438 10.8637 12.7438 8.61669 12.4711L7.46205 12.3309C6.83985 12.2554 6.37195 11.7273 6.37195 11.1005V10.9441Z"
        stroke="currentColor"
      />
      <path
        d="M9.48758 12.7202L8.74401 14.6103C8.46801 15.3118 8.46801 16.0919 8.74401 16.7934C9.19263 17.9338 10.2933 18.6835 11.5187 18.6835H12.5435C13.8289 18.6835 14.9695 17.8598 15.3738 16.6398C15.5756 16.0308 15.5756 15.373 15.3738 14.764L14.6966 12.7202"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2499 7.46094C13.666 7.58627 14.5352 8.06495 14.6837 8.97696"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { MushroomIcon };
