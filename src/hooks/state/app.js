import {useDispatch, useSelector} from "react-redux";
import {resetLang, setLang} from "../../redux/store/actions/app";

export function useLangStore ()
{
    const dispatch = useDispatch()
    const lang = useSelector(state => state.App.lang);

    return {
        state: lang,
        set: (lang) => dispatch(setLang(lang)),
        reset: (lang) => dispatch(resetLang(lang)),
        dispatch
    }
}
