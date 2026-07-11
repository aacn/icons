import type { SVGProps } from 'react';

function BaloonIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9997 2.32666C8.55066 2.32666 5.75464 5.12269 5.75464 8.57176C5.75464 11.5246 7.30966 14.2862 9.81814 15.8441C11.1445 16.6678 12.855 16.6678 14.1813 15.8441C16.6898 14.2862 18.2448 11.5246 18.2448 8.57176C18.2448 5.12269 15.4488 2.32666 11.9997 2.32666Z"
        stroke="currentColor"
      />
      <path
        d="M11.9998 4.64551C14.3172 4.64551 16.1959 6.5242 16.1959 8.84169"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12.1591 18.6973L11.9181 18.9881C11.5156 19.4736 11.6809 20.2086 12.2525 20.4751C12.7985 20.7298 12.9792 21.4176 12.6289 21.9077L12.1591 22.5649"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M10.7703 16.6714L10.5746 17.1166C10.2843 17.7774 10.7683 18.5189 11.4902 18.5189L12.5094 18.5189C13.2312 18.5189 13.7152 17.7774 13.4249 17.1166L13.2293 16.6714"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { BaloonIcon };
