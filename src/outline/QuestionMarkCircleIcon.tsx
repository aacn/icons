import type { SVGProps } from 'react';

function QuestionMarkCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9998" cy="11.9996" r="8.07379" stroke="currentColor" />
      <path
        d="M9.41528 9.83117C9.41528 8.40374 10.5724 7.24658 11.9999 7.24658C13.4273 7.24658 14.5845 8.40374 14.5845 9.83117C14.5845 11.2586 13.4273 12.4158 11.9999 12.4158V13.73"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <circle cx="11.9797" cy="15.8379" r="0.915008" fill="currentColor" />
    </svg>
  );
}

export { QuestionMarkCircleIcon };
