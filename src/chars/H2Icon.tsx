import type { SVGProps } from 'react';

function H2Icon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.08008 17.4588V11.9994M5.08008 6.54004V11.9994M5.08008 11.9994H11.8126M11.8126 17.4588V11.9994M11.8126 6.54004V11.9994"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6177 11.9872C14.6177 10.874 15.5806 9.97168 16.7684 9.97168C17.9563 9.97168 18.9192 10.874 18.9192 11.9872C18.9192 12.867 18.3088 13.629 17.4502 13.8211L16.7654 13.9744C15.5065 14.2561 14.6116 15.3734 14.6116 16.6634V17.4587H18.9192"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { H2Icon };
