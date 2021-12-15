import React from "react";
import styles from "./Main.module.css"
import stylesContainer from "../common/styles/Container.module.css"

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                < div className={styles.textBlock}>
                    <div className={styles.text}>
                        <span>Hi There</span>
                        <h1 className={styles.name}>I'am Igor Nurov</h1>
                        <span>I am Front-end Developer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
