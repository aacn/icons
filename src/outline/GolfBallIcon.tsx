import type { SVGProps } from 'react';

function GolfBallIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9997" cy="9.0035" r="6.62166" stroke="currentColor" />
      <circle
        cx="11.0328"
        cy="5.20755"
        r="1.06966"
        transform="rotate(45 11.0328 5.20755)"
        stroke="currentColor"
      />
      <circle
        cx="13.8115"
        cy="7.98685"
        r="1.06966"
        transform="rotate(45 13.8115 7.98685)"
        stroke="currentColor"
      />
      <circle
        cx="14.9022"
        cy="4.36478"
        r="1.06966"
        transform="rotate(45 14.9022 4.36478)"
        stroke="currentColor"
      />
      <path
        d="M8.72632 16.7549V16.8451C8.72632 17.3974 9.17403 17.8451 9.72632 17.8451H10.699M15.2729 16.7549V16.8451C15.2729 17.3974 14.8252 17.8451 14.2729 17.8451H13.2613M10.699 17.8451L11.1723 20.911C11.235 21.3173 11.5847 21.6172 11.9959 21.6172C12.4102 21.6172 12.7616 21.3128 12.8207 20.9027L13.2613 17.8451M10.699 17.8451H13.2613"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { GolfBallIcon };
