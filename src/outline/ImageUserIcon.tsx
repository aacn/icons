import type { SVGProps } from 'react';

function ImageUserIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M2.7207 14.106L7.18271 9.22661C7.44674 8.93789 7.90149 8.93754 8.16596 9.22587L11.3003 12.643"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.1587 10.9189L13.3837 9.14384C13.1301 8.89024 12.7213 8.88273 12.4585 9.12685L11.5517 9.96938"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle
        cx="15.5903"
        cy="6.30368"
        r="0.885712"
        fill="currentColor"
        stroke="currentColor"
      />
      <path
        d="M11.2921 18.9873H3.70049C2.96413 18.9873 2.36719 18.3904 2.36719 17.654V4.54228C2.36719 3.80592 2.96413 3.20898 3.70049 3.20898H17.3024C18.0387 3.20898 18.6357 3.80592 18.6357 4.54228V10.3178"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M19.6123 19.9828C19.6123 18.7621 18.6227 17.7725 17.4019 17.7725C16.1811 17.7725 15.1915 18.7621 15.1915 19.9828"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="17.3899" cy="16.2331" r="1.53977" stroke="currentColor" />
      <circle cx="17.4019" cy="16.8319" r="4.04675" stroke="currentColor" />
    </svg>
  );
}

export { ImageUserIcon };
