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

      <div className="relative mx-auto max-w-7xl px-4 pb-5 md:pb-14 pt-10 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-wrap items-start justify-between gap-5">
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
              <option value="latest">latest</option>
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
          </div>
        </div>
      </div>
    </header>
  );
}
