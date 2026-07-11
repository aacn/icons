import type { SVGProps } from 'react';

function CharacterQIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.6664 5.63574C14.364 5.63582 16.7202 8.37922 16.7202 11.9951C16.7201 15.611 14.3639 18.3544 11.6664 18.3545C8.96889 18.3545 6.61276 15.611 6.61273 11.9951C6.61273 8.37916 8.96888 5.63574 11.6664 5.63574Z"
        stroke="currentColor"
      />
      <path
        d="M12.5687 13.5459L17.8867 18.864"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterQIcon };
