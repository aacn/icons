import type { SVGProps } from 'react';

function HomeIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M14.098 20.6646V13.5845C14.098 13.4372 13.9786 13.3178 13.8313 13.3178H9.75559C9.60832 13.3178 9.48893 13.4372 9.48893 13.5845V20.6646M4.73538 10.874V19.8646C4.73538 20.3064 5.09355 20.6646 5.53536 20.6646H18.5288C18.9706 20.6646 19.3288 20.3064 19.3288 19.8646V10.874"
        stroke="currentColor"
      />
      <path
        d="M3.2962 12.0383L4.7354 10.593L11.4341 3.90033C11.7465 3.58791 12.253 3.58791 12.5654 3.90033L19.3288 10.6637L20.7033 12.0383"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { HomeIcon };
