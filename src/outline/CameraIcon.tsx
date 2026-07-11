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
        d="M18.7577 9.31638C18.7577 7.01449 16.8917 5.14844 14.5898 5.14844"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M20.9194 9.31645C20.9194 5.82069 18.0855 2.98682 14.5898 2.98682"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M3.22266 10.9378C3.22266 8.8164 4.94238 7.09668 7.06377 7.09668H13.1544C15.2758 7.09668 16.9955 8.8164 16.9955 10.9378V17.0285C16.9955 19.1498 15.2758 20.8696 13.1544 20.8696H7.06377C4.94238 20.8696 3.22266 19.1498 3.22266 17.0285V10.9378Z"
        stroke="currentColor"
      />
      <circle cx="10.1124" cy="13.9828" r="3.10343" stroke="currentColor" />
      <circle
        cx="10.113"
        cy="13.9834"
        r="1.19632"
        fill="currentColor"
        stroke="currentColor"
      />
      <circle cx="14.1259" cy="9.96085" r="0.910067" fill="currentColor" />
    </svg>
  );
}

export { CameraIcon };
