import type { SVGProps } from 'react';

function FilesIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M18.9049 10.4277H5.09424C4.54195 10.4277 4.09424 10.8754 4.09424 11.4277V18.9781C4.09424 19.5304 4.54195 19.9781 5.09424 19.9781H18.9049C19.4572 19.9781 19.9049 19.5304 19.9049 18.9781V14.0009V11.4277C19.9049 10.8754 19.4572 10.4277 18.9049 10.4277Z"
        stroke="currentColor"
      />
      <path
        d="M19.206 10.428V8.09521C19.206 7.54293 18.7583 7.09521 18.206 7.09521H5.79297C5.24068 7.09521 4.79297 7.54293 4.79297 8.09522V10.428"
        stroke="currentColor"
      />
      <path
        d="M18.4762 7.09584V5.02148C18.4762 4.4692 18.0285 4.02148 17.4762 4.02148H6.52295C5.97066 4.02148 5.52295 4.4692 5.52295 5.02149V7.09584"
        stroke="currentColor"
      />
    </svg>
  );
}

export { FilesIcon };
