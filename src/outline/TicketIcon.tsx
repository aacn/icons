import type { SVGProps } from 'react';

function TicketIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M18.7346 7.06104C19.471 7.06104 20.0676 7.65866 20.0676 8.39502V9.91064C18.9144 9.91097 17.9797 10.8462 17.9797 11.9995C17.9797 13.1528 18.9144 14.0871 20.0676 14.0874V15.605C20.0676 16.3413 19.471 16.938 18.7346 16.938H5.26392C4.52777 16.9377 3.93091 16.3412 3.93091 15.605V14.0884C5.08445 14.0884 6.01977 13.153 6.01978 11.9995C6.01978 10.846 5.08445 9.91064 3.93091 9.91064V8.39502C3.93091 7.65882 4.52777 7.06129 5.26392 7.06104H18.7346Z"
        stroke="currentColor"
      />
      <path
        d="M9.01099 7.60547L9.01099 16.3937"
        stroke="currentColor"
        strokeLinecap="round"
        strokeDasharray="2.67 2.67"
      />
      <path
        d="M11.7151 10.9849L15.3816 10.9849"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { TicketIcon };
