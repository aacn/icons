import type { SVGProps } from 'react';

function DanceIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.8955 9.48011L15.8955 12.5971C15.8955 13.6586 15.035 14.519 13.9736 14.519C12.9122 14.519 12.0517 13.6586 12.0517 12.5971L12.0517 11.4601C12.0517 10.3666 11.1652 9.48011 10.0717 9.48011C8.97821 9.48011 8.09175 10.3666 8.09175 11.4601L8.09175 14.519"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M4.7915 7.4581C4.7915 5.98538 5.98538 4.7915 7.4581 4.7915H16.5412C18.0139 4.7915 19.2078 5.98538 19.2078 7.4581V16.5412C19.2078 18.0139 18.0139 19.2078 16.5412 19.2078H7.4581C5.98538 19.2078 4.7915 18.0139 4.7915 16.5412V7.4581Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export { DanceIcon };
