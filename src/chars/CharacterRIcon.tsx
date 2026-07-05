import type { SVGProps } from 'react';

function CharacterRIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.37854 17.8489V11.9999M8.37854 11.9999V6.15088H12.6963C14.3115 6.15088 15.6208 7.46023 15.6208 9.07539C15.6208 10.6906 14.3115 11.9999 12.6963 11.9999H11.9997M8.37854 11.9999H11.9997M11.9997 11.9999L15.6208 17.8489"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterRIcon };
