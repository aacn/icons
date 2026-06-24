import type { SVGProps } from 'react';

function CharacterVIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.24384 5.68652L11.7513 17.6504C11.838 17.8807 12.1637 17.8806 12.2504 17.6504L16.7555 5.68652"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { CharacterVIcon };
