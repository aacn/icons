import type { SVGProps } from 'react';

function LinkedIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9882 16.7997L10.4348 18.3532C9.09443 19.6935 6.92131 19.6935 5.58096 18.3532C4.24062 17.0128 4.24062 14.8397 5.58096 13.4994L9.36477 9.71555C10.7051 8.37521 12.8782 8.37521 14.2186 9.71556C14.6117 10.1087 14.8896 10.5735 15.0521 11.068"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M8.7792 12.806C8.93438 13.3469 9.22503 13.8572 9.65115 14.2834C10.9915 15.6237 13.1646 15.6237 14.505 14.2834L18.2888 10.4996C19.6291 9.15921 19.6291 6.98608 18.2888 5.64573C16.9484 4.30539 14.7753 4.30539 13.435 5.64573L12.0044 7.07629"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { LinkedIcon };
