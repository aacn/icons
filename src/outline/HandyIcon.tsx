import type { SVGProps } from 'react';

function HandyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.807" cy="15.601" r="1.32467" fill="currentColor" />
      <path
        d="M7.12642 18.3432H16.9004M7.45779 20.6596H16.5075C16.8757 20.6596 17.1742 20.3611 17.1742 19.9929V3.95132C17.1742 3.58314 16.8757 3.28467 16.5075 3.28467H7.45779C7.08961 3.28467 6.79114 3.58314 6.79114 3.95132V19.9929C6.79114 20.3611 7.08961 20.6596 7.45779 20.6596Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export { HandyIcon };
