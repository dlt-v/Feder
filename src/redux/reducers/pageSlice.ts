import { actionLiterals } from './actionLiterals';

interface pageReducerState {
    currentPage: string
}

interface pageReducerAction {
    type: string,
    payload?: string
}

const initialState: pageReducerState = {
    currentPage: actionLiterals.changePage.options.login
};
const changePage = actionLiterals.changePage.action;

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