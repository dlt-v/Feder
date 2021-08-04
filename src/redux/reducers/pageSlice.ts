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
const changePage = changePageAction.actionType;

export function pageReducer(state = initialState, action: pageReducerAction): any
{
    switch(action.type)
{
    case changePage:
        return action.payload;
    default:
            return state;
    }
}