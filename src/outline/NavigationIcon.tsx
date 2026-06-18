import type { SVGProps } from 'react';

function NavigationIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.52734 15.4634L16.3658 7.625"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5603 7.56555L4.21846 12.3583C3.68188 12.585 3.67375 13.3425 4.20534 13.5807L8.26418 15.3994C8.41351 15.4664 8.53302 15.5859 8.59994 15.7352L10.4187 19.7941C10.6569 20.3256 11.4144 20.3175 11.6411 19.7809L16.4338 8.43911C16.6668 7.88781 16.1116 7.33258 15.5603 7.56555Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { NavigationIcon };
