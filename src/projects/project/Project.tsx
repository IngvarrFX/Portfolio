import React from "react";
import styles from "./Project.module.css"
import github from "../../assets/github.svg"


type PropsType = {
    title: string
    discription: string
    repositories?: string
    demoLink?: string
    img: any
}

export const Project = (props: PropsType) => {

    return (
        <div className={styles.projectBlock}>
            <div className={styles.imgContainer}
                 style={{
                     backgroundImage:
                         "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
                         props.img +
                         ")",
                 }}
            >

            </div>
            <div className={styles.descriptionBlock}>
                <span className={styles.projectTitle}>{props.title}</span>
                <span className={styles.discription}>{props.discription}</span>
                <a href={props.repositories ? props.repositories : "#"} className={styles.btn_icon}><img src={github}
                                                                                                         width="50"
                                                                                                         height="50"
                                                                                                         alt="Пример"/></a>
                <a href={props.demoLink ? props.demoLink : "#"} className={styles.btn}>Live demo</a>
            </div>
        </div>
    )
}
