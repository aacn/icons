import { Tab, TabList } from '@headlessui/react';
import type { RefObject } from 'react';
import type { Category } from '../lib/icons';

type StickySearchNavProps = {
  categories: Array<Category>;
  query: string;
  onQueryChange: (value: string) => void;
  isStickyActive: boolean;
  selectedCategoryCount: number;
  selectedCategoryTotal: number;
  shellRef: RefObject<HTMLElement | null>;
};

export function StickySearchNav({
  categories,
  query,
  onQueryChange,
  isStickyActive,
  selectedCategoryCount,
  selectedCategoryTotal,
  shellRef,
}: StickySearchNavProps) {
  return (
    <section ref={shellRef} className="sticky top-0 z-30 w-full">
      <div className="pointer-events-auto relative border-b border-slate-200 bg-white pb-0 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
        <div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <div className="relative flex min-h-[58px] items-center gap-3 pt-1">
            <label
              htmlFor="icon-search"
              className="relative flex min-h-[58px] flex-1 items-center"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 -mt-1 flex w-5 items-center text-2xl text-slate-500 transition"
              >
                ⌕
              </span>
              <input
                id="icon-search"
                type="search"
                placeholder="Search all icons..."
                className="block w-full appearance-none bg-transparent py-4 pl-8 pr-4 text-[0.8125rem] leading-6 text-slate-900 placeholder:text-slate-400 focus:outline-none [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
              />
            </label>

            {isStickyActive ? (
              <TabList
                className="flex items-center gap-2"
                aria-label="Icon categories (sticky)"
              >
                {categories.map((category) => (
                  <Tab
                    key={`inline-${category.id}`}
                    className="cursor-pointer rounded-full px-3 py-1.5 text-[0.82rem] font-semibold text-slate-500 data-[selected]:bg-slate-100 data-[selected]:text-slate-900"
                  >
                    {category.title}
                  </Tab>
                ))}
              </TabList>
            ) : null}
          </div>

          {!isStickyActive ? (
            <div className="flex min-h-[48px] items-center justify-between border-t border-slate-200">
              <TabList className="flex items-center gap-2" aria-label="Icon categories">
                {categories.map((category) => (
                  <Tab
                    key={category.id}
                    className="cursor-pointer rounded-full px-3 py-1.5 text-[0.82rem] font-semibold text-slate-500 data-[selected]:bg-slate-100 data-[selected]:text-slate-900"
                  >
                    {category.title}
                  </Tab>
                ))}
              </TabList>

              <p className="text-[0.82rem] text-slate-500">
                Showing <strong>{selectedCategoryCount}</strong> of{' '}
                {selectedCategoryTotal}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
