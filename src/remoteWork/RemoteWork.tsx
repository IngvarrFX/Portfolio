import React from "react"
import styles from "./RemoteWork.module.css"
import stylesContainer from "../common/styles/Container.module.css";

type PropsType = {

}

export const RemoteWork=(props: PropsType) => {
    return (
        <div className={styles.remoteWorkBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.remoteWorkContainer}>
                <div className={styles.text}>
                    <h3>Considering options for remote work</h3>
                </div>
                    <a href="">Hire me</a>
                </div>
            </div>
        </div>
    )
}