import React from "react"
import styles from './Footer.module.css'
import stylesContainer from "../common/styles/Container.module.css";

type PropsType = {

}

export const Footer=(props: PropsType) => {
    return (
        <div className={styles.footerBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.footerContainer}>
                    <h3>Nurov Igor</h3>
                    <div className={styles.itemContainer}>
                    </div>
                        <p> 2022 All rights reserved</p>
                </div>
            </div>
        </div>
    )
}