import type { SVGProps } from 'react';

function CalculatorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="4.82812"
        y="4.57959"
        width="11.5474"
        height="16.243"
        rx="1"
        stroke="currentColor"
      />
      <path
        d="M15.4817 4.57978L17.2184 4.57966C17.7707 4.57962 18.2185 5.02735 18.2185 5.57966V19.8227C18.2185 20.375 17.7708 20.8227 17.2185 20.8227H15.4817"
        stroke="currentColor"
      />
      <rect
        x="6.87781"
        y="6.77002"
        width="7.32593"
        height="3.99121"
        rx="1"
        stroke="currentColor"
      />
      <rect
        x="11.7136"
        y="16.1978"
        width="2.49013"
        height="2.49517"
        rx="1"
        stroke="currentColor"
      />
      <path
        d="M8.04382 12.3071V14.6521"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6.87781 13.4863L9.22278 13.4863"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.7136 13.4863L14.0586 13.4863"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.70886 7.46777L9.22278 10.6567"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M9.61536 6.77002L11.3898 10.6567"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CalculatorIcon };
