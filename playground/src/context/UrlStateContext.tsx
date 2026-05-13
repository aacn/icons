import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { CategoryId, VersionOption } from '../lib/icons';

type UrlStateContextValue = {
  version: VersionOption;
  setVersion: (value: VersionOption) => void;
  selectedCategoryId: CategoryId;
  setSelectedCategoryId: (value: CategoryId) => void;
  query: string;
  setQuery: (value: string) => void;
  selectedIconName: string | null;
  setSelectedIconName: (value: string | null) => void;
};

const CATEGORY_ORDER: Array<CategoryId> = ['outline', 'filled', 'chars'];

function parseInitialUrlState() {
  const params = new URLSearchParams(window.location.search);
  const versionParam = params.get('version');
  const categoryParam = params.get('category');

  const version: VersionOption =
    versionParam === '1.2.1' || versionParam === 'latest'
      ? versionParam
      : 'latest';

  const category: CategoryId = CATEGORY_ORDER.includes(
    categoryParam as CategoryId
  )
    ? (categoryParam as CategoryId)
    : 'outline';

  return {
    version,
    category,
    query: params.get('q') ?? '',
    icon: params.get('icon'),
  };
}

const UrlStateContext = createContext<UrlStateContextValue | null>(null);

export function UrlStateProvider({ children }: { children: React.ReactNode }) {
  const initial = useMemo(() => parseInitialUrlState(), []);

  const [version, setVersion] = useState<VersionOption>(initial.version);
  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId>(
    initial.category
  );
  const [query, setQuery] = useState<string>(initial.query);
  const [selectedIconName, _setSelectedIconName] = useState<string | null>(
    initial.icon
  );

  useEffect(() => {
    const params = new URLSearchParams();

    params.set('version', version);
    params.set('category', selectedCategoryId);

    if (query.trim()) {
      params.set('q', query);
    }

    if (selectedIconName) {
      params.set('icon', selectedIconName);
    }

    const nextUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', nextUrl);
  }, [version, selectedCategoryId, query, selectedIconName]);

  function setSelectedIconName(icon: string | null) {
    if (selectedIconName === icon) {
      _setSelectedIconName(null);
      return;
    }

    _setSelectedIconName(icon);
  }

  const value = useMemo<UrlStateContextValue>(() => {
    return {
      version,
      setVersion,
      selectedCategoryId,
      setSelectedCategoryId,
      query,
      setQuery,
      selectedIconName,
      setSelectedIconName,
    };
  }, [version, selectedCategoryId, query, selectedIconName]);

  return (
    <UrlStateContext.Provider value={value}>
      {children}
    </UrlStateContext.Provider>
  );
}

export function useUrlState() {
  const ctx = useContext(UrlStateContext);
  if (!ctx) {
    throw new Error('useUrlState must be used within UrlStateProvider');
  }

  return ctx;
}
