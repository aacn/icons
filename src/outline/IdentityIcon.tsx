import type { SVGProps } from 'react';

function IdentityIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M2.23804 6.14548C2.23804 5.40444 2.83902 4.80371 3.58037 4.80371L20.2795 4.80371C21.0208 4.80371 21.6218 5.40444 21.6218 6.14548V17.8529C21.6218 18.5939 21.0208 19.1947 20.2795 19.1947L3.58037 19.1947C2.83902 19.1947 2.23804 18.5939 2.23804 17.8529V6.14548Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M12.1687 9.60352H19.1244"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1687 11.9995H19.1244"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1687 14.3779H15.6467"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.16991" cy="11.0871" r="1.55297" stroke="currentColor" />
      <path
        d="M8.93283 14.4018C8.93283 13.4291 8.14432 12.6406 7.17165 12.6406C6.19897 12.6406 5.41046 13.4291 5.41046 14.4018"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { IdentityIcon };
