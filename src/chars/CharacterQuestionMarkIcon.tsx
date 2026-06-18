import type { SVGProps } from 'react';

function CharacterQuestionMarkIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.41504 9.83117C9.41504 8.40374 10.5722 7.24658 11.9996 7.24658C13.4271 7.24658 14.5842 8.40374 14.5842 9.83117C14.5842 11.2586 13.4271 12.4158 11.9996 12.4158V13.73"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="11.9794" cy="15.8379" r="0.915008" fill="currentColor" />
    </svg>
  );
}

export { CharacterQuestionMarkIcon };
