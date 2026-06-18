import type { SVGProps } from 'react';

function BagIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.43359 7.69902C5.43359 6.96266 6.03053 6.36572 6.76689 6.36572H18.7301C19.44 6.36572 20.0254 6.9219 20.0617 7.63083L20.6803 19.7121C20.7194 20.4742 20.1119 21.1136 19.3488 21.1136H6.76689C6.03053 21.1136 5.43359 20.5166 5.43359 19.7803V7.69902Z"
        stroke="currentColor"
      />
      <path
        d="M7.74237 8.73604V7.839C7.74237 5.48767 9.6485 3.58154 11.9998 3.58154C14.3512 3.58154 16.2573 5.48767 16.2573 7.839V8.73604"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6.88739 6.36572H5.40734C4.7249 6.36572 4.15264 6.88102 4.08133 7.55972L2.81212 19.641C2.72942 20.4281 3.34665 21.1136 4.13812 21.1136H6.88739"
        stroke="currentColor"
      />
    </svg>
  );
}

export { BagIcon };
