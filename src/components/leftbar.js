import React, {useState} from 'react';
import * as R from "ramda";

const initialSkillBase = [
    {name: 'HTML', colors: ['rgba(255, 78, 78, 0.8)', 'rgba(255, 163, 78, 0.8)'], progress: 100, learning: false},
    {name: 'NodeJs', colors: ['rgba(255, 78, 78, 0.8)', 'rgba(78, 255, 159, 0.8)'], progress: 88, learning: false},
    {name: 'CSS', colors: ['rgba(255, 78, 78, 0.8)', 'rgba(255, 163, 78, 0.8)'], progress: 100, learning: false},
    {name: 'Vue.js', colors: ['rgba(255, 78, 78, 0.5)', 'rgba(78, 255, 128, 0.5)'], progress: 88, learning: false},
    {name: 'JS', colors: ['rgba(255, 78, 78, 0.8)', 'rgba(241, 255, 78, 0.8)'], progress: 100, learning: false},
    // Learning ...
    {name: 'React', colors: ['rgba(200, 235, 255, 0.5)', 'rgba(0, 163, 255, 0.5)'], progress: 80, learning: true},
    {name: 'Redux', colors: ['rgba(255, 78, 78, 0.5)', 'rgba(78, 191, 255, 0.5)'], progress: 75, learning: true},
    {name: 'Mongo', colors: ['rgba(78, 255, 159, 0.8)', 'rgba(8, 95, 48, 0.8)'], progress: 65, learning: true},
    {name: 'Mongoose', colors: ['rgba(255, 0, 0, 0.5)', 'rgba(78, 255, 128, 0.5)'], progress: 70, learning: true},
    {name: 'D3', colors: ['rgba(255, 122, 0, 0.5)', 'rgba(255, 78, 78, 0.5)'], progress: 55, learning: true},
];

export default function LeftBar (props) {
    const [skillBase] = useState(initialSkillBase);
    return (
        <div className="column column_left m350">
            <span className="header-text mobile_none">{props.ru ? 'Навыки' : 'Skills'}</span>
            <div className="column_container fs800">
                <div className="skill_box">
                    {R.filter(R.propEq('learning', false), skillBase).map((element, index) =>
                        <div key={index} className="skill_item">
                            <div className="progress" style={{background: `linear-gradient(60.39deg, ${element.colors[0]} 0%, ${element.colors[1]} 99.13%)`, width: `${element.progress}%`}}> </div>
                            <span className="text fz450">{element.name}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="column_container fs800">
                <div className="skill_box">
                    {R.filter(R.propEq('learning', true), skillBase).map((element, index) =>
                        <div key={index} className="skill_item">
                            <div className="progress" style={{background: `linear-gradient(60.39deg, ${element.colors[0]} 0%, ${element.colors[1]} 99.13%)`, width: `${element.progress}%`}}> </div>
                            <span className="text fz450">{element.name}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
