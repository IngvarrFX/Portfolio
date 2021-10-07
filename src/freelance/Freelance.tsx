import React from "react"
import styles from "./Freelance.module.css"
import stylesContainer from "../common/styles/Container.module.css";

type PropsType = {

}

export const Freelance=(props: PropsType) => {
    return (
        <div className={styles.freelanceBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.freelanceContainer}>
                <div className={styles.text}>
                    <h3>Considering options for remote work</h3>
                </div>
                    <a href="">Hire me</a>
                </div>
            </div>
        </div>
    )
}