import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Projects} from './projects/Projects';
import {Freelance} from "./freelance/Freelance";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Freelance/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
