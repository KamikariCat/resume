import React from 'react';

//Libs
import {filter, propEq} from "ramda";

// Component data
import {SkillBase} from './data';

// * * *
// props - isLearning {string}
export default props => {
    return (
        <div className="skill_box">
            {filter(propEq('learning', !!props.isLearning), SkillBase).map((element, index) =>
                <div key={index} className="skill_item">
                    <div className="progress" style={{background: `linear-gradient(60.39deg, ${element.colors[0]} 0%, ${element.colors[1]} 99.13%)`, width: `${element.progress}%`}}> </div>
                    <span className="text fz450">{element.name}</span>
                </div>
            )}
        </div>
    )
}
