import { motion } from 'framer-motion';
import { TabPanel } from '@headlessui/react';
import type { Category, IconEntry } from '../lib/icons';

type IconPanelProps = {
  category: Category;
  icons: Array<IconEntry>;
  version: string;
  selectedIconName: string | null;
  onSelectIcon: (iconName: string) => void;
};

export function IconPanel({
  category,
  icons,
  version,
  selectedIconName,
  onSelectIcon,
}: IconPanelProps) {
  return (
    <TabPanel className="mt-2">
      <div className="mb-5 flex items-baseline justify-end gap-2.5 text-[0.92rem] text-slate-500">
        <strong className="text-[1.05rem] text-slate-900">{category.title}</strong>
        <span>{category.subtitle}</span>
      </div>

      <section
        className="grid grid-cols-[repeat(auto-fill,minmax(168px,1fr))] gap-3.5"
        aria-label={`${category.title} icons`}
      >
        {icons.length === 0 ? (
          <div className="col-span-full rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-[0.9rem] text-slate-500">
            No icons available in this category for {version}.
          </div>
        ) : null}

        {icons.map(({ name, label, Component }) => {
          const selected = selectedIconName === name;

          return (
            <motion.button
              type="button"
              key={`${version}-${name}`}
              title={name}
              onClick={() => onSelectIcon(name)}
              className={`rounded-[14px] border bg-white p-3 text-left transition ${
                selected
                  ? 'border-indigo-300 ring-2 ring-indigo-200'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              whileHover={{ y: -2 }}
            >
              <div className="mb-2 grid h-[108px] place-items-center rounded-xl border border-slate-200 bg-slate-50 text-black">
                <Component width={28} height={28} />
              </div>
              <p className="m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[0.86rem] text-slate-700">
                {label}
              </p>
              <p className="m-0 mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-[0.72rem] text-slate-400">
                {name}
              </p>
            </motion.button>
          );
        })}
      </section>
    </TabPanel>
  );
}
