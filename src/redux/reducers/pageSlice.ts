import { actionLiterals } from './actionLiterals';

const initialState = {
    currentPage: actionLiterals.changePage.options.login
};
const changePage = actionLiterals.changePage.action;

export default function pageReducer(state = initialState, action: any)
{
    switch(action.type)
{
    case changePage:
        return action.payload;
    default:
            return state;
    }
}