import { combineReducers } from 'redux';

import { pageReducer, PageReducerState } from './pageSlice';

export interface RootState {
    paging: PageReducerState;
}

export const rootReducer = combineReducers<RootState>({
    paging: pageReducer
});
