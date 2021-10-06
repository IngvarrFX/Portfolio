import React from 'react';
import styles from './Project.module.css'



type PropsType ={
    title: string
    discription:string
}

export const Project = (props:PropsType) => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.imgContainer}>
                <a href="">Button</a>
            </div>
            <span className={styles.projectTitle}>{props.title}</span>
            <span className={styles.discription}>{props.discription}</span>
        </div>
    )
}
