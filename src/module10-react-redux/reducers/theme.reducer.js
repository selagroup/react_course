import { THEME_TOGGLE } from "../actions/theme.actions";

const initialState = 'light';


export function theme(state = initialState, action){
    switch (action.type) {
        case THEME_TOGGLE:
            return state === 'dark' ? 'light' : 'dark';
        default:
            return state;
    }
}