import type { SVGProps } from 'react';

function SportsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="9.43346" cy="13.4389" r="5.84074" stroke="currentColor" />
      <path
        d="M5.73312 17.4531C6.7889 16.4415 7.44627 15.0173 7.44627 13.4397C7.44627 11.862 6.7889 10.4379 5.73312 9.42627"
        stroke="currentColor"
      />
      <path
        d="M13.5358 17.8932C12.3643 16.7707 11.6349 15.1905 11.6349 13.44C11.6349 11.6895 12.3643 10.1093 13.5358 8.98682"
        stroke="currentColor"
      />
      <path
        d="M9.43192 8.25049L9.43192 18.6897"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.12213 13.3975H14.6974"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="19.0513" cy="13.3836" r="1.56769" stroke="currentColor" />
      <path
        d="M17.9964 14.9653L16.4196 17.9871C16.1879 18.431 16.5099 18.9622 17.0106 18.9622H21.0627C21.571 18.9622 21.8923 18.4163 21.6456 17.9719L19.9763 14.9653"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16.2377" cy="6.95789" r="3.31922" stroke="currentColor" />
      <path
        d="M14.2773 9.2937C14.8917 8.70505 15.2742 7.87638 15.2742 6.95837C15.2742 6.04036 14.8917 5.21169 14.2773 4.62305"
        stroke="currentColor"
      />
      <path
        d="M18.1094 9.2937C17.4951 8.70505 17.1126 7.87638 17.1126 6.95837C17.1126 6.04036 17.4951 5.21169 18.1094 4.62305"
        stroke="currentColor"
      />
    </svg>
  );
}

export { SportsIcon };
