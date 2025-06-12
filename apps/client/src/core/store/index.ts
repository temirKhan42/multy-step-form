'use client';

import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { loadState, saveState } from './persist';
import { api } from './api/';

const isBrowser = typeof window !== 'undefined';
const preloadedState = isBrowser ? loadState() : undefined;

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false })
      .concat(api.middleware); 
  }
});

if (isBrowser) {
  store.subscribe(() => {
    saveState(store.getState());
  });
}

export type RootState =  ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;