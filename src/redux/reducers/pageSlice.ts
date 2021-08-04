import { changePageAction } from './actionLiterals';

interface pageReducerState {
    currentPage: string
}

interface pageReducerAction {
    type: string,
    payload?: string
}

const initialState: pageReducerState = {
    currentPage: changePageAction.actionPayloads.login
};

export function pageReducer(state = initialState, action: pageReducerAction): any
{   
    switch(action.type)
    {
        case changePageAction.actionType:
            return action.payload;
        default:
            return state;
    }
}