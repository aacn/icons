import type { SVGProps } from 'react';

function ShareIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.31616 19.7968L3.31616 15.8109C3.31616 11.1386 7.11506 7.35686 11.7873 7.37807H13.5533L13.5533 4.52993C13.5533 4.23936 13.9046 4.09384 14.11 4.29931L20.5882 10.7775C20.7155 10.9048 20.7156 11.1111 20.5884 11.2385L14.1102 17.7269C13.9048 17.9326 13.5533 17.7871 13.5533 17.4964V14.6491H8.51566C5.64908 14.6491 3.31616 16.9302 3.31616 19.7968Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { ShareIcon };
