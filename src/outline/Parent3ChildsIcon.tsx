import type { SVGProps } from 'react';

function Parent3ChildsIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10.6207 10.5239C11.383 10.5239 10.2061 10.5239 12.4405 10.5239M18.6854 10.5239C17.1221 10.5239 14.6806 10.5239 12.4405 10.5239M12.4405 10.5239L14.97 14.9051C15.0891 15.1114 15.3091 15.2385 15.5473 15.2385H18.6854"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4404 10.5239L14.9699 6.1427C15.089 5.93644 15.309 5.80938 15.5472 5.80938L18.6853 5.80938"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.41008" cy="10.6106" r="3.20921" stroke="currentColor" />
      <circle cx="18.2868" cy="10.6108" r="1.51171" fill="currentColor" />
      <circle cx="18.2868" cy="5.80956" r="1.51171" fill="currentColor" />
      <circle cx="18.2868" cy="15.0859" r="1.51171" fill="currentColor" />
    </svg>
  );
}

export { Parent3ChildsIcon };
