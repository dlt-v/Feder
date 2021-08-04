import { combineReducers } from 'redux';

import { pageReducer } from './pageSlice';

export const rootReducer = combineReducers({
    currentPage: pageReducer
});
