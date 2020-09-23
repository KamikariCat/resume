import React from 'react';

// Hooks
import {useLangStore} from "../../hooks/state/app";

// Helpers
import {capitalize} from "../../helpers/helpers";

export default () => {
    const lang = useLangStore();
    const switchLang = () => { lang.set(lang.state === 'en' ? 'ru' : 'en') };
    return (
        <div className="lang">
            <span onClick={switchLang}> {capitalize(lang.state)} </span>
        </div>
    );
}
