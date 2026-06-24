import type { SVGProps } from 'react';

function WrenchIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.27136 3.25733L7.93657 4.93783C8.45319 5.4592 8.45127 6.30007 7.93227 6.81908L6.80988 7.94146C6.28921 8.46214 5.44503 8.46215 4.92434 7.94149L3.32947 6.3467"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M6.27584 3.25373C8.78904 3.25373 11.8159 4.4885 11.8159 7.0017C11.8159 9.5149 9.77858 11.5522 7.26539 11.5522C4.75219 11.5522 3.34027 8.9124 3.34027 6.39921"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M9.1983 11.2158L17.7198 19.7374C18.2765 20.294 19.1791 20.294 19.7357 19.7374C20.2924 19.1807 20.2924 18.2781 19.7357 17.7215L11.2142 9.19993"
        stroke="currentColor"
      />
    </svg>
  );
}

export { WrenchIcon };
