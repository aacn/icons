import type { SVGProps } from 'react';

function CharacterRIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.63239 15.8232V11.9995M9.63239 11.9995V8.17578H12.4551C13.5109 8.17578 14.3669 9.03175 14.3669 10.0876C14.3669 11.1435 13.511 11.9995 12.4551 11.9995H11.9997M9.63239 11.9995H11.9997M11.9997 11.9995L14.3669 15.8232"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterRIcon };
