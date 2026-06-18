import type { SVGProps } from 'react';

function RainbowIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M20.9153 15.9152C20.9153 10.9912 16.9236 6.99951 11.9996 6.99951C7.07556 6.99951 3.08386 10.9912 3.08386 15.9152"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M18.391 15.9153C18.391 12.3854 15.5295 9.52393 11.9996 9.52393C8.46978 9.52393 5.60828 12.3854 5.60828 15.9153"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.6567 15.9155C15.6567 13.8957 14.0193 12.2583 11.9996 12.2583C9.97977 12.2583 8.34241 13.8957 8.34241 15.9155"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { RainbowIcon };
