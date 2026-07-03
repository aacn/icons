import type { SVGProps } from 'react';

function Shortcut2Icon(props: SVGProps<SVGSVGElement>) {
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
        d="M14.2978 19.1708L12.0711 16.9441C9.46095 14.334 9.47056 10.0991 12.0925 7.50088L13.079 6.51435L11.488 4.92327C11.3256 4.76095 11.4406 4.4834 11.6702 4.4834L18.9081 4.4834C19.0503 4.4834 19.1656 4.59864 19.1657 4.74087L19.1714 11.9845C19.1716 12.2141 18.8939 12.3293 18.7315 12.1669L17.141 10.5763L14.3268 13.3905C12.7254 14.9919 12.6964 17.5694 14.2978 19.1708Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.60184 4.49707H6.52527C5.4207 4.49707 4.52527 5.3925 4.52527 6.49707V17.1708C4.52527 18.2754 5.4207 19.1708 6.52527 19.1708H17.199C18.3036 19.1708 19.199 18.2754 19.199 17.1708V15.1882"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { Shortcut2Icon };
