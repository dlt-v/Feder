import { combineReducers } from 'redux';

import pageReducer from './pageSlice';

const rootReducer = combineReducers({
    currentPage: pageReducer
});

export default rootReducer;