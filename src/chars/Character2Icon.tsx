import type { SVGProps } from 'react';

function Character2Icon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.59457 9.25993C8.59457 7.49512 10.1213 6.06445 12.0045 6.06445C13.8878 6.06445 15.4145 7.49512 15.4145 9.25993C15.4145 10.6548 14.4467 11.863 13.0855 12.1676L11.9997 12.4106C10.0038 12.8572 8.5849 14.6287 8.5849 16.6739V17.9349H15.4145"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { Character2Icon };
