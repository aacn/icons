import type { SVGProps } from 'react';

function PaperclipIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M18.0135 11.8158L11.0462 18.7842C9.71765 20.113 7.57325 20.1442 6.20658 18.8547C4.78268 17.5112 4.74994 15.2569 6.13422 13.8727L15.5687 4.43822C16.4574 3.54953 17.8982 3.54953 18.7869 4.43822C19.6745 5.32585 19.6757 6.76461 18.7896 7.65374L9.52317 16.9514C9.09032 17.3857 8.39449 17.4089 7.93367 17.0044C7.42754 16.5602 7.40394 15.78 7.88229 15.3059L14.4556 8.79143"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { PaperclipIcon };
