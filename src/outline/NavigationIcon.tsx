import type { SVGProps } from 'react';

function NavigationIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.83398 13.677L17.9538 5.55713"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.1738 5.47269L5.31981 10.4818C4.78323 10.7086 4.7751 11.4661 5.30669 11.7043L9.56975 13.6145C9.71908 13.6814 9.83859 13.8009 9.90551 13.9503L11.8158 18.2134C12.054 18.7449 12.8115 18.7368 13.0382 18.2002L18.0473 6.34625C18.2803 5.79495 17.7251 5.23973 17.1738 5.47269Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { NavigationIcon };
