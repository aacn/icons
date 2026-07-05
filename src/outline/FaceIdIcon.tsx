import type { SVGProps } from 'react';

function FaceIdIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.96228 14.4369C10.4997 14.7685 11.2148 14.9707 11.9997 14.9707C12.7847 14.9707 13.4997 14.7685 14.0372 14.4369"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="10.0842" cy="10.7453" r="0.790207" fill="currentColor" />
      <circle cx="13.9151" cy="10.7453" r="0.790207" fill="currentColor" />
      <path
        d="M7.97986 2.4458H4.16882C3.61654 2.4458 3.16882 2.89352 3.16882 3.4458V7.25684"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.0197 21.5264L19.8307 21.5264C20.383 21.5264 20.8307 21.0787 20.8307 20.5264L20.8307 16.7153"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.97986 21.5264L4.16882 21.5264C3.61654 21.5264 3.16882 21.0787 3.16882 20.5264L3.16882 16.7153"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.0197 2.4458H19.8307C20.383 2.4458 20.8307 2.89352 20.8307 3.4458V7.25684"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="11.9997" cy="12.0001" r="6.88629" stroke="currentColor" />
    </svg>
  );
}

export { FaceIdIcon };
