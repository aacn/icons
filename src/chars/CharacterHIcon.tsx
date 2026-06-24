import type { SVGProps } from 'react';

function CharacterHIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.39313 17.8489V11.9999M8.39313 6.15088V11.9999M8.39313 11.9999H15.6062M15.6062 17.8489V11.9999M15.6062 6.15088V11.9999"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { CharacterHIcon };
