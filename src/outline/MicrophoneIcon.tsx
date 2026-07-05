import type { SVGProps } from 'react';

function MicrophoneIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.17523 9.99817C8.17523 8.47986 9.40606 7.24902 10.9244 7.24902C12.4427 7.24902 13.6735 8.47986 13.6735 9.99817V14.1081C13.6735 15.6264 12.4427 16.8573 10.9244 16.8573C9.40606 16.8573 8.17523 15.6264 8.17523 14.1081V9.99817Z"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6.29114 12.9253V14.255C6.29114 16.8154 8.36673 18.891 10.9271 18.891C13.4875 18.891 15.5631 16.8154 15.5631 14.255V12.9253"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.5597 9.39864C15.5597 6.83828 13.4841 4.7627 10.9237 4.7627"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.7082 9.39975C17.7082 5.65277 14.6707 2.61523 10.9237 2.61523"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M10.976 19.0605V21.3838"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0922 21.3833H7.87624"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { MicrophoneIcon };
