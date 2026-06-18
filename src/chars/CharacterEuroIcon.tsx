import type { SVGProps } from 'react';

function CharacterEuroIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.0436 9.32589C15.3111 8.51102 14.2489 7.99854 13.067 7.99854C10.8572 7.99854 9.06586 9.78989 9.06586 11.9996C9.06586 14.2094 10.8572 16.0007 13.067 16.0007C14.2489 16.0007 15.3111 15.4883 16.0436 14.6734"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.95569 11.0894H13.5451"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.95569 13.249H13.5451"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterEuroIcon };
