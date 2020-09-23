const initial_state = {
    lang: 'en'
}

// Types
export const SWITCH_LANG = 'SWITCH_LANG';
export const RESET_LANG = 'RESET_LANG';

// Defaults
export const defaultLang = 'en';

// Reducer
export default function (state = initial_state, action)
{
    switch (action.type)
    {
        case SWITCH_LANG:
            return state = Object.assign({}, state, {lang: action.lang});

        case RESET_LANG:
            return state = Object.assign({}, state, {lang: defaultLang});

        default: return state;
    }
}
