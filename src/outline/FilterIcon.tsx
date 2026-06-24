import type { SVGProps } from 'react';

function FilterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="7.11518" cy="14.5868" r="0.783577" fill="currentColor" />
      <circle cx="9.38856" cy="13.2924" r="0.783577" fill="currentColor" />
      <circle cx="7.11518" cy="11.9994" r="0.783577" fill="currentColor" />
      <circle cx="9.38856" cy="10.7069" r="0.783577" fill="currentColor" />
      <circle cx="7.11518" cy="9.40467" r="0.783577" fill="currentColor" />
      <path
        d="M1.21661 13.6502H2.90741C3.64377 13.6502 4.24071 14.2471 4.24071 14.9835V15.5243C4.24071 16.2607 4.83765 16.8576 5.57401 16.8576H15.2274C15.9637 16.8576 16.5607 16.2607 16.5607 15.5243V14.9835C16.5607 14.2471 17.1576 13.6502 17.894 13.6502H18.4866C19.4666 13.6502 20.3808 14.1435 20.9189 14.9626M1.21661 10.349H2.90741C3.64377 10.349 4.24071 9.75209 4.24071 9.01573V8.47441C4.24071 7.73805 4.83765 7.14111 5.57401 7.14111H15.2274C15.9637 7.14111 16.5607 7.73805 16.5607 8.47441V9.62796C16.5607 10.0262 16.8835 10.349 17.2818 10.349H18.5132C20.307 10.349 21.9522 11.3457 22.7828 12.9355"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M12.0048 9.24854L12.0048 14.7516"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.8315 9.24854L13.8315 14.7516"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { FilterIcon };
