import type { SVGProps } from 'react';

function Checkbox2Icon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.7167 8.73789C15.7167 7.26517 16.9106 6.07129 18.3833 6.07129H19.1441C20.6169 6.07129 21.8107 7.26517 21.8107 8.73789V15.2613C21.8107 16.734 20.6169 17.9279 19.1441 17.9279H18.3833C16.9106 17.9279 15.7167 16.734 15.7167 15.2613V8.73789Z"
        stroke="currentColor"
      />
      <path
        d="M11.3779 6.07148C12.8504 6.07173 14.0439 7.2659 14.0439 8.73847V15.2619C14.0437 16.7343 12.8503 17.9277 11.3779 17.9279H4.85449C3.38192 17.9279 2.18774 16.7344 2.1875 15.2619V8.73847C2.1875 7.26575 3.38177 6.07148 4.85449 6.07148H11.3779Z"
        stroke="currentColor"
      />
      <path
        d="M4.86426 12.2861L6.83276 14.2561"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M6.84351 14.2559L11.3596 9.74304"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { Checkbox2Icon };
