import {defaultLang, SWITCH_LANG, RESET_LANG} from '../reducers/app'

export function setLang (lang = defaultLang)
{
    return {
        type: SWITCH_LANG,
        lang
    }
}

export function resetLang ()
{
    return {
        type: RESET_LANG,
        lang: defaultLang
    }
}
