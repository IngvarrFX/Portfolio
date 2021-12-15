import React from "react";
import styles from "./Main.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import {Fade} from "react-awesome-reveal";

export const Main = () => {
    return (
        <div className={styles.mainBlock} id="main">
            <div className={stylesContainer.container}>
                < div className={styles.textBlock}>
                    <div className={styles.text}>
                        <Fade cascade={true}>
                            <h2>Hi There 👋, I'm</h2>
                            <h1 className={styles.name}>Igor Nurov.</h1>
                            <h3>I build things for the web.</h3>
                            <span>Front End Developer</span>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}
