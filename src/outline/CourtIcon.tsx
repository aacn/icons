import type { SVGProps } from 'react';

function CourtIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="12.41"
        y="2.07031"
        width="2.91252"
        height="8.7657"
        rx="1.45626"
        transform="rotate(45 12.41 2.07031)"
        stroke="currentColor"
      />
      <rect
        x="19.9006"
        y="9.56104"
        width="2.91252"
        height="8.7657"
        rx="1.45626"
        transform="rotate(45 19.9006 9.56104)"
        stroke="currentColor"
      />
      <path
        d="M13.5127 5.04492L18.8304 10.3626"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M8.98242 9.57471L14.3001 14.8924"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M10.755 11.3479L2.97336 19.1295C2.45783 19.6451 2.45783 20.4809 2.97336 20.9964C3.48889 21.512 4.32473 21.512 4.84025 20.9964L12.6219 13.2148"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M8.78894 13.3135L10.6558 15.1803"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12.0558 6.56152L15.5629 10.0686"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CourtIcon };
