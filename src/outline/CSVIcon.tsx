import type { SVGProps } from 'react';

function CSVIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.23107 14.494C6.7503 15.1635 6.08644 15.5776 5.35321 15.5776C3.88573 15.5776 2.69611 13.9191 2.69611 11.8733C2.69611 9.82742 3.88573 8.16895 5.35321 8.16895C6.08644 8.16895 6.7503 8.58299 7.23107 9.25251"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M9.57251 13.5746C9.57251 14.681 10.4694 15.5779 11.5758 15.5779C12.6822 15.5779 13.579 14.681 13.579 13.5746C13.579 12.6961 12.9079 11.9632 12.0328 11.8859L11.0572 11.7999C10.2137 11.7254 9.56683 11.019 9.56683 10.1722C9.56683 9.06584 10.4637 8.16895 11.5701 8.16895C12.6765 8.16895 13.5734 9.06584 13.5734 10.1722"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M15.6397 8.31201L18.2853 15.3341C18.3503 15.5067 18.5946 15.5067 18.6596 15.334L21.3038 8.31201"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { CSVIcon };
