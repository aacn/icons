import type { SVGProps } from 'react';

function ImageNoIcon(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="17.5762" cy="16.734" r="3.91663" stroke="currentColor" />
      <path
        d="M14.8997 19.4103L20.2526 14.0576"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2915 18.9873H3.69988C2.96352 18.9873 2.36658 18.3904 2.36658 17.654V4.54228C2.36658 3.80592 2.96352 3.20898 3.69988 3.20898H17.3018C18.0381 3.20898 18.6351 3.80592 18.6351 4.54228V10.3178"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { ImageNoIcon };
