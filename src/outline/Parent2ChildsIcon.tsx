import type { SVGProps } from 'react';

function Parent2ChildsIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10.7644 10.5239C11.5267 10.5239 10.2062 10.5239 12.4406 10.5239M18.6855 10.5239C17.1222 10.5239 14.6807 10.5239 12.4406 10.5239M12.4406 10.5239L14.9701 14.9051C15.0892 15.1114 15.3093 15.2385 15.5474 15.2385H18.6855"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.41014" cy="10.6106" r="3.20921" stroke="currentColor" />
      <circle cx="18.2869" cy="10.6108" r="1.51171" fill="currentColor" />
      <circle cx="18.2869" cy="15.0859" r="1.51171" fill="currentColor" />
    </svg>
  );
}

export { Parent2ChildsIcon };
