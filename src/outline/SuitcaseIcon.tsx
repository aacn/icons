import type { SVGProps } from 'react';

function SuitcaseIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M2.32166 9.36914C2.32166 8.26457 3.21709 7.36914 4.32166 7.36914H19.6777C20.7823 7.36914 21.6777 8.26457 21.6777 9.36914V18.0961C21.6777 19.2006 20.7823 20.0961 19.6777 20.0961H4.32166C3.21709 20.0961 2.32166 19.2006 2.32166 18.0961V9.36914Z"
        stroke="currentColor"
      />
      <rect
        x="5.68445"
        y="13.7329"
        width="3.01725"
        height="2.19356"
        rx="1"
        stroke="currentColor"
      />
      <rect
        x="15.2979"
        y="13.7329"
        width="3.01725"
        height="2.19356"
        rx="1"
        stroke="currentColor"
      />
      <path
        d="M8.70166 7.36932V5.90332C8.70166 4.79875 9.59709 3.90332 10.7017 3.90332H13.2978C14.4024 3.90332 15.2978 4.79875 15.2978 5.90332V7.36932"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.19312 7.49219V13.257"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.8064 7.49219V13.257"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.19312 15.9263L7.19312 20.096"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.8064 15.9263L16.8064 20.096"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { SuitcaseIcon };
