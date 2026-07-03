import type { SVGProps } from 'react';

function FunnelIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M18.2576 4.09717L5.7418 4.09717C4.66417 4.09717 4.03174 5.30931 4.64821 6.1932L9.88156 13.6966C10.0376 13.9204 10.1213 14.1866 10.1213 14.4594L10.1213 20.1138C10.1213 20.8836 10.9546 21.3647 11.6213 20.9798L13.3782 19.9654C13.6876 19.7868 13.8782 19.4567 13.8782 19.0994L13.8782 14.4594C13.8782 14.1866 13.9618 13.9204 14.1179 13.6966L19.3512 6.1932C19.9677 5.30932 19.3353 4.09717 18.2576 4.09717Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { FunnelIcon };
