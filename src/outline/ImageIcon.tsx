import type { SVGProps } from 'react';

function ImageIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.86554 5.44365C3.86554 4.70729 4.46248 4.11035 5.19884 4.11035H18.8007C19.5371 4.11035 20.134 4.70729 20.134 5.44365V18.5554C20.134 19.2917 19.5371 19.8887 18.8007 19.8887H5.19884C4.46248 19.8887 3.86554 19.2917 3.86554 18.5554V5.44365Z"
        stroke="currentColor"
      />
      <path
        d="M4.21967 15.6416L8.68111 10.7629C8.94534 10.4739 9.40053 10.4738 9.66487 10.7627L14.333 15.8637"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12.8965 14.1496L15.3241 11.9386C15.5958 11.6911 16.0166 11.7102 16.2648 11.9814L19.8172 15.8632"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle
        cx="15.5579"
        cy="7.8564"
        r="1.23433"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
}

export { ImageIcon };
