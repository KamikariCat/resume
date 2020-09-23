import React from 'react';

// Components
import SkillBox from "../skillbox";

// Hooks
import {useLangStore} from "../../hooks/state/app";

// Component data
import {HeaderText} from "./data";

export default () =>
{
    const lang = useLangStore();

    return (
        <div className="column column_left m350">
            <span className="header-text mobile_none">{HeaderText[lang.state]}</span>
            <div className="column_container fs800">
                <div className="skill_box">
                    <SkillBox/>
                </div>
            </div>
            <div className="column_container fs800">
                <SkillBox isLearning/>
            </div>
        </div>
    )
}

