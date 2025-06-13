'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import i18n from '../locales';
import { store } from '../store';
import NotifyProvider from './notifyProvider';

export function Providers({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const queryClient = new QueryClient();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <p>...Loading</p>;
  }

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <NotifyProvider>
            {children}
          </NotifyProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </Provider>
  );
}
