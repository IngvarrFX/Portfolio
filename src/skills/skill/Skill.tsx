import React from 'react';
import styles from './Skill.module.css'
import stylesContainer from '../common/styles/Container.module.css'


type PropsType ={
    title: string
    discription:string
}

export const Skill = (props:PropsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3>{props.title}</h3>
            <span className={styles.discription}>{props.discription}</span>
        </div>
    )
}
