import React from "react";
import styles from "./Main.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import {Fade} from "react-awesome-reveal";
import scrollTo from "gatsby-plugin-smoothscroll"


export const Main = () => {
    return (
        <div className={styles.mainBlock} id="main">
            <div className={stylesContainer.container}>
                <div className={styles.textBlock}>
                    <div className={styles.text}>
                        <Fade cascade={true} direction={"up"} duration={800} triggerOnce={true}>
                            <h2 className={styles.greetings}>Hi There 👋, I'm</h2>
                            <h1 className={styles.name}>Igor Nurov.</h1>
                            <h3>I build things for the web.</h3>
                            <span>Front End Developer</span>
                        </Fade>
                    </div>
                </div>
                <Fade cascade={true} direction={"up"} duration={800} triggerOnce={true}>
                    <div className={styles.btn}>
                        <button onClick={() => scrollTo("#contacts")}>Connect with me</button>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
