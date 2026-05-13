import { TabGroup, TabPanels } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { HeroHeader } from './components/HeroHeader';
import { IconPanel } from './components/IconPanel';
import { StickySearchNav } from './components/StickySearchNav';
import { UrlStateProvider, useUrlState } from './context/UrlStateContext';
import { buildCategories } from './lib/icons';

function AppContent() {
  const {
    query,
    setQuery,
    version,
    setVersion,
    selectedCategoryId,
    setSelectedCategoryId,
    selectedIconName,
    setSelectedIconName,
  } = useUrlState();

  const [showToTop, setShowToTop] = useState<boolean>(false);
  const [isStickyActive, setIsStickyActive] = useState<boolean>(false);
  const shellRef = useRef<HTMLElement | null>(null);
  const hasScrolledToPreselectedRef = useRef<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowToTop(y > 360);

      const shellTop = shellRef.current?.getBoundingClientRect().top;
      setIsStickyActive(typeof shellTop === 'number' ? shellTop <= 0 : false);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const categories = useMemo(() => {
    return buildCategories(version);
  }, [version]);

  const selectedIndex = Math.max(
    0,
    categories.findIndex((category) => category.id === selectedCategoryId)
  );

  useEffect(() => {
    const selectedCategory = categories[selectedIndex] ?? categories[0];
    if (!selectedCategory) {
      return;
    }

    const existsInCategory = selectedCategory.icons.some(
      (icon) => icon.name === selectedIconName
    );
    if (selectedIconName && !existsInCategory) {
      setSelectedIconName(null);
    }
  }, [categories, selectedIndex, selectedIconName, setSelectedIconName]);

  const totalIcons = useMemo(() => {
    return categories.reduce((sum, category) => sum + category.icons.length, 0);
  }, [categories]);

  const filteredByCategory = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return categories.map((category) => {
      if (!normalizedQuery) {
        return category.icons;
      }

      return category.icons.filter((icon) => {
        return (
          icon.searchName.includes(normalizedQuery) ||
          icon.label.includes(normalizedQuery)
        );
      });
    });
  }, [categories, query]);

  const selectedCategory = categories[selectedIndex] ?? categories[0];
  const selectedCategoryIcons = filteredByCategory[selectedIndex] ?? [];

  useEffect(() => {
    if (!selectedIconName || hasScrolledToPreselectedRef.current) {
      return;
    }

    const selector = `[data-icon-name="${CSS.escape(selectedIconName)}"]`;
    const element = document.querySelector<HTMLElement>(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      hasScrolledToPreselectedRef.current = true;
    }
  }, [selectedIconName, filteredByCategory, selectedIndex]);


  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_92%_5%,#ece9ff_0%,transparent_34%),radial-gradient(circle_at_12%_15%,#e6f6ff_0%,transparent_28%),#f8fafc] text-slate-900">
      <HeroHeader
        totalIcons={totalIcons}
        version={version}
        onVersionChange={setVersion}
      />

      <main>
        <TabGroup
          selectedIndex={selectedIndex}
          onChange={(index) => {
            const category = categories[index];
            if (category) {
              setSelectedCategoryId(category.id);
            }
          }}
        >
          <StickySearchNav
            categories={categories}
            query={query}
            onQueryChange={setQuery}
            isStickyActive={isStickyActive}
            selectedCategoryCount={selectedCategoryIcons.length}
            selectedCategoryTotal={selectedCategory?.icons.length ?? 0}
            shellRef={shellRef}
          />

          <div className="mx-auto max-w-7xl px-4 pb-7 pt-5 sm:px-6 lg:px-8">
            <TabPanels>
              {categories.map((category, index) => {
                return (
                  <IconPanel
                    key={`${version}-${category.id}`}
                    category={category}
                    icons={filteredByCategory[index] ?? []}
                    version={version}
                    selectedIconName={selectedIconName}
                    onSelectIcon={setSelectedIconName}
                  />
                );
              })}
            </TabPanels>
          </div>
        </TabGroup>
      </main>

      <AnimatePresence>
        {showToTop ? (
          <motion.button
            type="button"
            className="fixed bottom-4 right-4 rounded-full bg-slate-900 px-3 py-2 text-[0.82rem] font-semibold text-white shadow-[0_10px_20px_rgba(2,8,23,0.28)] hover:bg-slate-800"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
          >
            ↑ Top
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function App() {
  return (
    <UrlStateProvider>
      <AppContent />
    </UrlStateProvider>
  );
}
