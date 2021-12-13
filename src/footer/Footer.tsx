import React from "react"
import styles from './Footer.module.css'
import stylesContainer from "../common/styles/Container.module.css";
import img from '../../public/logo192.png'
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
type PropsType = {

}

export const Footer=(props: PropsType) => {
    return (
        <div className={styles.footerBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.footerContainer}>
                    <h3>Nurov Igor</h3>
                    <div className={styles.itemContainer}>
                        <a href="#"><img className={styles.image}  src={linkedin} alt=""/></a>
                        <a href="#"><img className={styles.image}  src={github} alt=""/></a>
                    </div>
                        <p> 2022 All rights reserved</p>
                </div>
            </div>
        </div>
    )
}
