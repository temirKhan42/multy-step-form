import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api/';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export type RootReducerState = ReturnType<typeof rootReducer>;