import React from 'react';

export default function About (props) {
    const resumeEn = `
        Now i work in company like Frontend Developer. On work I creating the simple responsive charts using d3.
        I work for 1 year using Vuejs and learning Rect. Have experiens with Node js, good knowlege with HTML and css.
        I know php and Laravel framefork. Using Js i create the Discord chat bots.
    `;
    const resumeRu = `
        Ну кароче всё классно
    `;
    return (
        <div className="column about">
            <span className="header-text mobile_none">About</span>
            <div className="about_text">{ props.ru ? resumeRu : resumeEn }</div>
        </div>
    );
}
