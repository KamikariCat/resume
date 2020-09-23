import React from 'react';

// Component data
import {aboutText, headerText} from "./data";

// Hooks
import {useLangStore} from "../../hooks/state/app";

// Components
import Social from './../social'

export default function About () {
    const lang = useLangStore();

    return (
        <div className="column about">
            <span className="header-text mobile_none">{headerText[lang.state]}</span>
            <div className="about_text">
                {aboutText[lang.state].map((text, i) => <p key={i}>{text}</p>)}
            </div>
            <Social />
        </div>
    );
}
