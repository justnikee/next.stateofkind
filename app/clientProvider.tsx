'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { useMemo } from 'react';

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return useMemo(() => <Provider store={store}>{children}</Provider>, [store, children]);
};

export default ClientProvider;