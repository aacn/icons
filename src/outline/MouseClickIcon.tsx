import type { SVGProps } from 'react';

function MouseClickIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.1463 15.1463L12.851 17.4416C12.718 17.5746 12.4927 17.5317 12.4179 17.3592L8.90464 9.25913C8.80846 9.03737 9.03337 8.81234 9.25518 8.9084L17.3588 12.4181C17.5315 12.4928 17.5744 12.7181 17.4414 12.8512L15.1463 15.1463ZM15.1463 15.1463L17.0981 17.0982"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M8.88135 6.0656V4.32959"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.06585 9.02295L4.32983 9.02295"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.06577 6.06577L5.52881 5.52881"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.942 6.06577L12.479 5.52881"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.06577 11.9792L5.52881 12.5161"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { MouseClickIcon };
