import type { SVGProps } from 'react';

function CharacterBIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10.2315 11.968H12.7631M12.7631 11.968L13.1322 11.7038C13.6426 11.3385 13.9454 10.7493 13.9454 10.1216C13.9454 9.04704 13.0743 8.1759 11.9997 8.17586L9.78128 8.17578V15.8232L12.2904 15.8233C13.355 15.8233 14.2181 14.9603 14.2181 13.8957V13.423C14.2181 12.6194 13.5667 11.968 12.7631 11.968Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterBIcon };
