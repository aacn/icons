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
        d="M8.04614 8.59468C8.04614 6.41119 9.81621 4.64111 11.9997 4.64111C14.1832 4.64111 15.9533 6.41119 15.9533 8.59468C15.9533 10.7782 14.1832 12.5482 11.9997 12.5482V14.5585"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="11.9688" cy="17.9583" r="1.39966" fill="currentColor" />
    </svg>
  );
}

export { CharacterQuestionMarkIcon };
