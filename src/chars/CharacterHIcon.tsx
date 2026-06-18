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
        d="M9.64197 15.8232V11.9995M9.64197 8.17578V11.9995M9.64197 11.9995H14.3574M14.3574 15.8232V11.9995M14.3574 8.17578V11.9995"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterHIcon };
