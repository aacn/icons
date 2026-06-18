import type { SVGProps } from 'react';

function LinearIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.02983 15.6859L14.8383 8.87744"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12.3318 8.12349L15.3726 8.12588C15.5198 8.12599 15.639 8.24535 15.639 8.39254V11.4307"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M4.79163 7.4581C4.79163 5.98538 5.9855 4.7915 7.45823 4.7915H16.5413C18.0141 4.7915 19.2079 5.98538 19.2079 7.4581V16.5412C19.2079 18.0139 18.0141 19.2078 16.5413 19.2078H7.45822C5.9855 19.2078 4.79163 18.0139 4.79163 16.5412V7.4581Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export { LinearIcon };
