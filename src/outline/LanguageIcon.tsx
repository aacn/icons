import type { SVGProps } from 'react';

function LanguageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12.5637" cy="12.0188" r="8.76492" stroke="currentColor" />
      <path d="M4.50903 9.36572H20.4639" stroke="currentColor" />
      <path d="M4.50903 14.6987H20.4639" stroke="currentColor" />
      <path
        d="M12.9253 20.484C10.096 17.9107 6.13496 10.9144 12.9253 3.51562"
        stroke="currentColor"
      />
      <path
        d="M12.2665 20.484C15.0959 17.9107 19.0569 10.9144 12.2665 3.51562"
        stroke="currentColor"
      />
    </svg>
  );
}

export { LanguageIcon };
