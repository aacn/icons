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
        d="M17.4543 5.28418L6.54513 5.28418C5.4675 5.28418 4.83507 6.49633 5.45155 7.38021L10.0528 13.9773C10.2088 14.2011 10.2925 14.4673 10.2925 14.7401L10.2925 19.683C10.2925 20.4528 11.1258 20.9339 11.7925 20.549L13.2069 19.7324C13.5163 19.5538 13.7069 19.2236 13.7069 18.8664L13.7069 14.7401C13.7069 14.4673 13.7906 14.2011 13.9466 13.9773L18.5479 7.38021C19.1643 6.49633 18.5319 5.28418 17.4543 5.28418Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { FunnelIcon };
