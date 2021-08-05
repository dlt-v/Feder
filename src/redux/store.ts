import { AnyAction, createStore, Store } from 'redux';

import { rootReducer, RootState } from './reducers/reducer';

export const store = createStore(rootReducer) as Store<RootState, AnyAction>;