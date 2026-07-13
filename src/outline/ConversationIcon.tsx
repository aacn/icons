import type { SVGProps } from 'react';

function ConversationIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.353 3.29688C17.2037 3.29688 17.8929 3.98636 17.8931 4.83695V12.1176C17.8931 12.9683 17.2037 13.6577 16.353 13.6577H8.78463L5.41 17.1689C5.31383 17.2684 5.14486 17.2002 5.14486 17.0617V13.6577H3.54047C2.68974 13.6577 1.9993 12.9683 1.99927 12.1176V4.83695C1.99945 3.98636 2.68984 3.29688 3.54047 3.29688H16.353Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0911 17.1442H15.2148L18.5894 20.6553C18.6856 20.7548 18.8545 20.6867 18.8545 20.5482V17.1442H20.4589C21.3096 17.1442 22.0001 16.4548 22.0001 15.6041V8.32344C21.9999 7.47284 21.3096 6.78336 20.4589 6.78336L20.2055 6.7832"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.71716 6.1543H15.1752"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.71716 8.66943H15.1752"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.71716 11.1406H9.94616"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ConversationIcon };
