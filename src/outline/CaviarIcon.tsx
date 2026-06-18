import type { SVGProps } from 'react';

function CaviarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="8.55448" cy="15.4447" r="3.44523" stroke="currentColor" />
      <circle cx="15.4449" cy="15.4447" r="3.44523" stroke="currentColor" />
      <circle cx="11.9997" cy="9.29825" r="3.44523" stroke="currentColor" />
      <circle cx="7.91253" cy="14.8531" r="1.00689" fill="currentColor" />
      <circle cx="14.7317" cy="14.8531" r="1.00689" fill="currentColor" />
      <circle cx="11.3604" cy="8.62359" r="1.00689" fill="currentColor" />
    </svg>
  );
}

export { CaviarIcon };
