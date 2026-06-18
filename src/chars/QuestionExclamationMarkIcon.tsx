import type { SVGProps } from 'react';

function QuestionExclamationMarkIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.47479 9.81286C7.47479 8.37343 8.64168 7.20654 10.0811 7.20654C11.5205 7.20654 12.6874 8.37343 12.6874 9.81286C12.6874 11.2523 11.5205 12.4192 10.0811 12.4192V13.7444"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.6337 7.27344V13.7449"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="10.0606" cy="15.8705" r="0.9227" fill="currentColor" />
      <circle cx="15.6019" cy="15.8705" r="0.9227" fill="currentColor" />
    </svg>
  );
}

export { QuestionExclamationMarkIcon };
