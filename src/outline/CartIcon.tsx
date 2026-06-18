import type { SVGProps } from 'react';

function CartIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.8547 7.63597H18.7033C19.583 7.63597 20.2216 8.47304 19.9892 9.32154L18.7531 13.8336C18.5944 14.413 18.0679 14.8146 17.4672 14.8146L7.61199 14.8146M5.8547 7.63597L7.61199 14.8146M5.8547 7.63597L5.44733 6.11566C5.29114 5.53276 4.76292 5.12744 4.15946 5.12744H3.54858M7.61199 14.8146L7.52133 14.9589C6.96321 15.8468 7.60139 17.0017 8.65015 17.0017H17.8252"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <circle cx="9.23289" cy="19.3717" r="1.21891" fill="currentColor" />
      <circle cx="16.7096" cy="19.3717" r="1.21891" fill="currentColor" />
    </svg>
  );
}

export { CartIcon };
