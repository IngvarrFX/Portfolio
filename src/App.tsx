import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Projects} from './projects/Projects';
import {AboutMe} from "./aboutMe/AboutMe";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import Particles from "react-tsparticles";
import {Nav} from "./nav/Nav";

function App() {

    return (
        <div className={'appWrapper'}>
            <Header/>
            <Main/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
