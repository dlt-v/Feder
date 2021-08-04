import { Action } from 'redux';
import { changePageAction } from './actionLiterals';

export interface PageReducerState {
    currentPage: string
}

interface PageReducerAction extends Action<string> {
    payload: string;
}

const initialState: PageReducerState = {
    currentPage: changePageAction.actionPayloads.login
};

export function pageReducer(state = initialState, action: PageReducerAction): PageReducerState
{   
    switch(action.type)
    {
        case changePageAction.actionType:
            return {
                ...state,
                currentPage: action.payload
            };
        default:
        return state;
    }
}