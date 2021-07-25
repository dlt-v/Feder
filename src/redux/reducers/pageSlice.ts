const initialState = {
    currentPage: 'login'
};

export default function pageReducer(state = initialState, action: any)
{
    switch(action.type)
{
    case 'page/changePage':
        return action.payload;
    default:
            return state;
    }
}