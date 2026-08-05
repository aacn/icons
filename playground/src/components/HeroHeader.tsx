import type { VersionOption } from '../lib/icons';

type HeroHeaderProps = {
  totalIcons: number;
  version: VersionOption;
  onVersionChange: (version: VersionOption) => void;
};

export function HeroHeader({
  totalIcons,
  version,
  onVersionChange,
}: HeroHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#eef2ff_45%,#f8fafc_100%)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:44px_44px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] -bottom-[60%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,#c4b5fd_0%,transparent_70%)] opacity-45"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-5 md:pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <label
            htmlFor="version-picker"
            className="inline-flex items-center gap-2"
          >
            <span className="sr-only">Select icon package version</span>
            <select
              id="version-picker"
              className="h-[34px] cursor-pointer rounded-full border border-slate-300 bg-slate-50 px-3 text-[0.82rem] font-semibold text-slate-600 outline-none"
              value={version}
              onChange={(event) =>
                onVersionChange(event.target.value as VersionOption)
              }
            >
              <option value="latest">latest (v4.1.1)</option>
              <option value="3.4.2">v3.4.2</option>
              <option value="3.1.0">v3.1.0</option>
              <option value="2.4.0">v2.4.0</option>
              <option value="2.2.0">v2.2.0</option>
              <option value="2.0.0">v2.0.0</option>
              <option value="1.2.1">v1.2.1</option>
            </select>
          </label>
          <div className="-order-1">
            <p className="m-0 flex flex-wrap items-center gap-2.5 text-[0.9rem] text-slate-500">
              <strong className="font-semibold text-slate-600">
                {totalIcons} icons
              </strong>
              <span aria-hidden="true">•</span>
              <span>MIT license</span>
              <span aria-hidden="true">•</span>
              <span>React package</span>
            </p>
            <h1 className="mb-2 mt-4 max-w-3xl text-[clamp(2rem,4vw,3.3rem)] font-bold leading-[1.05] tracking-[-0.03em] text-slate-900">
              Native Systems Icons
            </h1>
            <p className="m-0 text-[0.95rem] text-slate-500">
              Browse every icon exported by{' '}
              <code className="font-semibold">@native-systems/icons</code>.
            </p>
            <a
              target="_blank"
              href="https://github.com/aacn/icons/blob/main/CHANGELOG.md"
              className="mt-5 md:mt-8 flex font-medium text-sm flex-row gap-2 justify-start items-center"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-6 fill-slate-900"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                ></path>
              </svg>
              Changelog
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
