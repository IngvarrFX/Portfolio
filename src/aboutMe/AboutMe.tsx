import React from "react"
import styles from "./AboutMe.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import {Title} from "../components/title/Title";
import {Description} from "../components/description/Description";
import data from "../myData"
import {Fade} from "react-awesome-reveal";

type PropsType = {}

export const AboutMe = (props: PropsType) => {
    return (
        <div className={styles.aboutMeBlock} id="aboutMe">
            <div className={stylesContainer.container}>
                <div className={styles.aboutMeContainer}>
                    <Fade cascade={true} direction={"up"} duration={1000} triggerOnce={true}>
                        <div className={styles.aboutMe}>
                            <div className={styles.description}>
                                <div className={styles.text}>
                                    <Title firstPart={"About"} secondPart={"me"}/>
                                </div>
                                <Description
                                    text={"Fast-forward to today, and have experience in creating SPA applications using React, Redux, ES6+, HTML, CSS. My main focus these days is to build a successful career in commercial software development as a Front-end / JavaScript / React developer.\n" +
                                    "\n" +
                                    "My place in the world seems to be at the intersection of creativity and logic. All projects are a problem to be solved, whether it’s to do with design or code—only the tools change. I'm quietly confident, naturally curious, and perpetually working on improving my chops one code problem at a time.\n" +
                                    "\n" +
                                    "I am always experimenting, always learning, and never bored."}/>
                            </div>
                            <div className={styles.photo}>
                                <img src={data.aboutImage}/>
                            </div>

                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
