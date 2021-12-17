import React from "react"
import styles from "./Footer.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import img from "../../public/logo192.png"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import data from "../myData"

type PropsType = {}

export const Footer = (props: PropsType) => {
    return (
        <div className={styles.footerBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.footerContainer}>
                    <h2>Let's create your next experience together</h2>
                    <a className={styles.email} href={"mailto:nurov.mj@gmail.com"}>nurov.mj@gmail.com</a>
                    <div className={styles.itemContainer}>
                        <a href={data.social[1].url}><img className={styles.image} src={linkedin} alt=""/></a>
                        <a href={data.social[0].url}><img className={styles.image} src={github} alt=""/></a>
                    </div>
                    <p>Made With ❤️ by Igor Nurov</p>
                </div>
            </div>
        </div>
    )
}
