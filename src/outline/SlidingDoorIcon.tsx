import type { SVGProps } from 'react';

function SlidingDoorIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.22357 8.35864C4.22357 6.51774 5.71592 5.02539 7.55682 5.02539H8.45505C10.2959 5.02539 11.7883 6.51774 11.7883 8.35864V15.6404C11.7883 17.4813 10.2959 18.9736 8.45504 18.9736H7.55682C5.71592 18.9736 4.22357 17.4813 4.22357 15.6404V8.35864Z"
        stroke="currentColor"
      />
      <path
        d="M17.5312 8.73068L19.4778 11.6281C19.6288 11.8529 19.6288 12.1468 19.4778 12.3716L17.5312 15.269"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M14.2733 8.73068L16.2198 11.6281C16.3708 11.8529 16.3708 12.1468 16.2198 12.3716L14.2733 15.269"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M14.0572 18.7339H19.9568"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0572 5.28809H19.9568"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.40586 11.9985H8.01672"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { SlidingDoorIcon };
