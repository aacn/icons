import type { SVGProps } from 'react';

function PresentationIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M2.91727 5.07227H20.8399"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.22418 5.07227V13.6339C4.22418 14.3702 4.82112 14.9672 5.55748 14.9672H18.3865C19.1229 14.9672 19.7198 14.3702 19.7198 13.6339V5.07227"
        stroke="currentColor"
      />
      <path
        d="M7.89693 11.2304L9.15723 9.96969C9.67789 9.44887 10.5222 9.4488 11.0429 9.96954L11.7196 10.6462C12.2403 11.1669 13.0845 11.1669 13.6052 10.6462L16.0591 8.19238"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.9191 18.9267L11.8785 14.9673L15.8378 18.9267"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { PresentationIcon };
