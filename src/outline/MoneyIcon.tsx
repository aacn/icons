import type { SVGProps } from 'react';

function MoneyIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.83893 8.88457C3.83893 8.14821 4.43587 7.55127 5.17223 7.55127H17.5994C18.3357 7.55127 18.9327 8.14821 18.9327 8.88457V14.5625C18.9327 15.2988 18.3357 15.8958 17.5994 15.8958H5.17223C4.43587 15.8958 3.83893 15.2988 3.83893 14.5625V8.88457Z"
        stroke="currentColor"
      />
      <path
        d="M18.8502 9.49554L19.4651 9.51724C20.201 9.54321 20.7656 10.1603 20.7261 10.8956L20.4213 16.5695C20.3818 17.3048 19.7532 17.8798 19.0173 17.8538L5.96565 17.3932C5.22975 17.3672 4.6652 16.7501 4.7047 16.0148L4.70829 15.9481"
        stroke="currentColor"
      />
      <circle cx="11.3858" cy="11.7238" r="2.12073" fill="currentColor" />
    </svg>
  );
}

export { MoneyIcon };
