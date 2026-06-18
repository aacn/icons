import type { SVGProps } from 'react';

function TemperatureIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.1243" cy="16.8506" r="1.39211" fill="currentColor" />
      <path
        d="M11.1188 5.95654C12.1242 5.95658 12.9389 6.77158 12.9391 7.77686V14.5171C13.6171 15.0557 14.0534 15.8857 14.0534 16.8188C14.0533 18.4427 12.7368 19.7593 11.113 19.7593C9.48913 19.7593 8.17263 18.4427 8.17255 16.8188C8.17255 15.8804 8.61397 15.0467 9.29852 14.5083V7.77686C9.29873 6.77156 10.1135 5.95654 11.1188 5.95654Z"
        stroke="currentColor"
      />
      <path
        d="M14.7188 5.67188H16.4867"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M14.7188 7.56836L15.2466 7.56848"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M14.7188 9.46533H16.4867"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M14.7188 11.3623L15.2466 11.3624"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M14.7188 13.2598H16.4867"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.1177 16.521C11.1388 16.3945 11.1265 10.7388 11.1177 7.92676"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { TemperatureIcon };
