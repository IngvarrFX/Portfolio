import React from 'react';
import styles from './Skill.module.css'



type PropsType ={
    icon: any
    discription:string
}

export const Skill = (props:PropsType) => {
    return (
        <div className={styles.skillsItems}>
            <img className={styles.icon} src={props.icon} alt="css"></img>
            <span className={styles.discription}>{props.discription}</span>
        </div>
    )
}
