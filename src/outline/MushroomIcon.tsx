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
        d="M4.71179 10.6326C4.71179 6.60764 7.97471 3.34473 11.9997 3.34473C16.0247 3.34473 19.2876 6.60764 19.2876 10.6326V10.8352C19.2876 11.6468 18.6817 12.3308 17.8759 12.4286L16.3807 12.6101C13.4707 12.9633 10.5287 12.9633 7.61875 12.6101L6.12348 12.4286C5.31773 12.3308 4.71179 11.6468 4.71179 10.8352V10.6326Z"
        stroke="currentColor"
      />
      <path
        d="M8.7466 12.9326L7.78366 15.3803C7.42625 16.2888 7.42625 17.299 7.78366 18.2075C8.36463 19.6842 9.78995 20.6552 11.3769 20.6552H12.7041C14.3686 20.6552 15.8458 19.5885 16.3694 18.0085C16.6307 17.2198 16.6307 16.3679 16.3694 15.5793L15.4923 12.9326"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.6188 6.12207C14.1576 6.28438 15.2833 6.90427 15.4756 8.08533"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { MushroomIcon };
