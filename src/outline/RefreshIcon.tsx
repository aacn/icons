import type { SVGProps } from 'react';

function RefreshIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M18.4894 12.2101C18.4894 8.51663 15.4953 5.52246 11.8018 5.52246C10.0143 5.52246 8.3906 6.22373 7.19081 7.36615M5.11411 12.2101C5.11411 15.9036 8.10828 18.8978 11.8018 18.8978C13.7968 18.8978 15.5878 18.0242 16.8131 16.6387"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6.66678 3.91123L6.66845 7.21549C6.66864 7.58354 6.96705 7.8818 7.3351 7.8818L10.6374 7.8818"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3326 20.0883L17.3309 16.784C17.3308 16.416 17.0323 16.1177 16.6643 16.1177L13.362 16.1177"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { RefreshIcon };
