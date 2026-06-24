import type { SVGProps } from 'react';

function AppleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M14.4143 8.50569C17.1827 8.68393 19.2503 11.5774 19.0322 14.9687C18.8139 18.3598 16.3927 20.9646 13.6244 20.7867C13.079 20.7516 12.5616 20.609 12.0827 20.3801C11.7725 20.5276 11.4433 20.6399 11.0963 20.7056C8.4088 21.2138 5.71735 18.9192 5.08535 15.5804C4.45343 12.2415 6.1202 9.12152 8.80761 8.61257C9.85156 8.41499 10.8957 8.6423 11.8198 9.18749C12.5992 8.69808 13.4874 8.44608 14.4143 8.50569Z"
        stroke="currentColor"
        stroke-linejoin="round"
      />
      <path
        d="M12.0651 8.50695C11.8231 7.24951 12.7975 3.67923 16.8764 3.21338C17.457 5.21685 17.8385 7.14401 13.3359 8.50695"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.80322 2.89404C10.9904 4.19664 11.6937 6.12121 11.6937 8.84871"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.7159 11.2573C15.3524 11.6819 16.5364 12.8657 16.1807 14.2047"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { AppleIcon };
