import type { SVGProps } from 'react';

function ArrowUpCurvedIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10.2978 7.26371L10.2978 15.5776C10.2978 17.0986 11.5308 18.3315 13.0517 18.3315C14.5727 18.3315 15.8057 17.0986 15.8057 15.5776L15.8057 15.5156"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12.4015 8.90133L10.4818 6.98461C10.3776 6.88063 10.2089 6.8807 10.1049 6.98475L8.1883 8.90133"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { ArrowUpCurvedIcon };
