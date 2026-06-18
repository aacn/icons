import type { SVGProps } from 'react';

function WavesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12.155" cy="11.9998" r="9.70679" stroke="currentColor" />
      <path
        d="M3.37769 15.9006C4.29738 16.7296 7.43978 17.9086 9.0268 14.2552C10.1845 11.59 12.3755 9.7691 14.8762 9.84299C16.9467 9.90417 18.8214 10.7407 19.2542 13.2776C19.2935 13.5078 19.0242 13.651 18.8313 13.5195C14.736 10.728 13.061 16.2403 16.4553 17.7013C19.9836 19.22 20.7199 16.4005 20.9629 15.8189"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M9.10478 14.0888C6.40772 15.3771 6.52459 11.9371 8.05909 12.1885C8.27938 12.2246 8.52045 12.0617 8.44742 11.8508C7.85892 10.1509 5.72463 10.3401 4.87328 11.6761C3.94072 13.1395 3.85576 13.5706 2.73047 13.9591"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { WavesIcon };
