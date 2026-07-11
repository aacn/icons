import type { SVGProps } from 'react';

function CharacterSIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.59456 14.7131C8.59456 16.478 10.1212 17.9086 12.0045 17.9086C13.8878 17.9086 15.4145 16.478 15.4145 14.7131C15.4145 13.3138 14.3414 12.1483 12.9468 12.033L10.9633 11.869C9.6192 11.7579 8.5849 10.6345 8.5849 9.28581C8.5849 7.521 10.1116 6.09033 11.9948 6.09033C13.8781 6.09033 15.4048 7.521 15.4048 9.28581"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CharacterSIcon };
