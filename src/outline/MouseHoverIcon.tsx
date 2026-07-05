import type { SVGProps } from 'react';

function MouseHoverIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.8582 15.8621L13.5629 18.1574C13.4299 18.2904 13.2047 18.2476 13.1298 18.075L9.61656 9.97495C9.52037 9.75319 9.74528 9.52816 9.96709 9.62422L18.0707 13.1339C18.2434 13.2087 18.2864 13.434 18.1533 13.567L15.8582 15.8621ZM15.8582 15.8621L17.8101 17.814"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M8.69781 13.7256C7.22662 13.1697 6.18042 11.7482 6.18042 10.0823C6.18042 7.93209 7.92354 6.18896 10.0738 6.18896C11.7062 6.18896 13.104 7.19361 13.6825 8.61833"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.85478 16.2996C5.37842 15.3639 3.61743 12.9712 3.61743 10.1672C3.61743 6.54785 6.55151 3.61377 10.1709 3.61377C12.9186 3.61377 15.2714 5.30481 16.2452 7.70295"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { MouseHoverIcon };
