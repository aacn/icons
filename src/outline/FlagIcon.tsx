import type { SVGProps } from 'react';

function FlagIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.25146 6.0542V13.332C6.25146 13.376 6.27492 13.4166 6.313 13.4386L6.69579 13.6596C8.43894 14.666 10.5866 14.666 12.3298 13.6596C13.6238 12.9125 15.1616 12.7101 16.6049 13.0968L17.5542 13.3512C17.652 13.3774 17.7481 13.3037 17.7481 13.2024V6.12822C17.7481 6.08242 17.7236 6.0401 17.684 6.0172L17.1677 5.71916C15.4246 4.71275 13.2769 4.71275 11.5338 5.71916C10.2397 6.46627 8.70193 6.66873 7.25862 6.28199L6.25146 6.01213"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25146 4.09277V19.9067"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { FlagIcon };
