import React from 'react';

// Components
import LeftBar from "../../components/leftbar";
import About from "../../components/about/about";
import RightBar from "../../components/rightbar";
import SwitchLangButton from './../../components/switchLangBtn'

export default () => {
    return (
        <>
            <SwitchLangButton />
            <LeftBar />
            <About />
            <RightBar />
        </>
    );
}
